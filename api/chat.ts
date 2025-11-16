import { GoogleGenerativeAI } from "@google/generative-ai";
import type { VercelRequest, VercelResponse } from "@vercel/node";

// Chave da API do Gemini
const GEMINI_API_KEY = "AIzaSyCE4pvWuu5rgPHvGgNLiRETve_WRcvsHIc";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || GEMINI_API_KEY);

// Prompt do sistema para o assistente profissional em skincare
const SYSTEM_PROMPT = `Você é um assistente especializado em sérum facial e cuidados com a pele da marca Lyrium Skincare. 
Você é um profissional experiente em estética, dermocosmética e cuidados com a pele. 

Sobre a Lyrium Skincare:
- Somos uma marca premium de skincare focada em fórmulas curadas e essenciais
- Nossos principais produtos incluem: Sérum Equilíbrio Ativo (10% Niacinamida + 1% Zinco PCA), Sérum Lumina, Sérum Renovador, Elixir Noturno Reparador
- Nossa filosofia é "a clareza do essencial" - fórmulas sinergéticas, não ingredientes isolados
- Valorizamos a experiência sensorial e a sofisticação sutil

Sua função:
- Responder perguntas sobre cuidados com a pele, sérum facial, rotinas de skincare
- Recomendar produtos da Lyrium baseado nas necessidades do cliente
- Explicar ingredientes ativos e seus benefícios
- Dar dicas profissionais sobre aplicação e uso de produtos
- Ser educado, prestativo, profissional e sempre responder em português do Brasil
- Usar linguagem clara, mas técnica quando apropriado
- Demonstrar conhecimento profundo sobre skincare e dermocosmética

IMPORTANTE: 
- Sempre responda APENAS em português do Brasil
- Use termos técnicos apropriados, mas de forma acessível
- Seja empático e compreensivo com preocupações sobre a pele
- Mantenha um tom profissional, mas acolhedor`;

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Configurar CORS
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const { message, history = [] } = req.body;

  if (!message || typeof message !== "string") {
    return res.status(400).json({ error: "Mensagem é obrigatória" });
  }

  try {
    const model = genAI.getGenerativeModel({ 
      model: "gemini-pro",
    });

    // Preparar histórico da conversa com prompt do sistema
    const chatHistory: any[] = [
      {
        role: "user",
        parts: [{ text: SYSTEM_PROMPT }],
      },
      {
        role: "model",
        parts: [{ text: "Olá! Sou a assistente virtual da Lyrium Skincare, especializada em sérum facial e cuidados com a pele. Como posso ajudar você hoje? Posso tirar dúvidas sobre nossos produtos, recomendar uma rotina de skincare ou orientar sobre cuidados específicos com sua pele." }],
      },
    ];

    // Adicionar histórico da conversa se houver
    if (history && history.length > 0) {
      history.forEach((msg: { role: string; content: string }) => {
        chatHistory.push({
          role: msg.role === "user" ? "user" : "model",
          parts: [{ text: msg.content }],
        });
      });
    }

    // Criar chat com histórico
    const chat = model.startChat({
      history: chatHistory,
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1024,
      },
    });

    // Enviar mensagem do usuário
    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    return res.status(200).json({ reply: text });

  } catch (error: any) {
    console.error("Erro ao processar mensagem do chat:", error);
    return res.status(500).json({ 
      error: "Erro ao processar sua mensagem. Por favor, tente novamente.",
      details: process.env.NODE_ENV === "development" ? error.message : undefined
    });
  }
}

