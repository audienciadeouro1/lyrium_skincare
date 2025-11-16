import { GoogleGenerativeAI } from "@google/generative-ai";
import type { VercelRequest, VercelResponse } from "@vercel/node";

// Chave da API do Gemini
const GEMINI_API_KEY = "AIzaSyCE4pvWuu5rgPHvGgNLiRETve_WRcvsHIc";

// Inicializar o cliente do Gemini
const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY || GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

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
    console.log("Iniciando processamento da mensagem...");
    console.log("Mensagem recebida:", message);
    console.log("Histórico recebido:", history?.length || 0, "mensagens");

    // Verificar se a API key está disponível
    if (!apiKey) {
      console.error("API key não encontrada");
      return res.status(500).json({ 
        error: "Configuração da API não encontrada.",
      });
    }

    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash", // Usar modelo mais recente e estável
    });

    // Construir o prompt completo com contexto
    let fullPrompt = SYSTEM_PROMPT + "\n\n";
    
    // Adicionar histórico da conversa se houver
    if (history && history.length > 0) {
      fullPrompt += "Contexto da conversa anterior:\n";
      history.forEach((msg: { role: string; content: string }) => {
        const roleText = msg.role === "user" ? "Cliente" : "Assistente";
        fullPrompt += `${roleText}: ${msg.content}\n`;
      });
      fullPrompt += "\n";
    }

    // Adicionar a mensagem atual
    fullPrompt += `Cliente: ${message}\nAssistente:`;

    console.log("Enviando prompt para Gemini...");

    // Gerar conteúdo diretamente (mais simples e confiável)
    const result = await model.generateContent(fullPrompt);
    const response = await result.response;
    const text = response.text();

    console.log("Resposta recebida do Gemini:", text?.substring(0, 100) + "...");

    if (!text) {
      throw new Error("Resposta vazia do Gemini");
    }

    return res.status(200).json({ reply: text });

  } catch (error: any) {
    console.error("Erro detalhado ao processar mensagem do chat:", error);
    console.error("Stack trace:", error?.stack);
    console.error("Error message:", error?.message);
    console.error("Error name:", error?.name);
    
    // Retornar erro mais detalhado para debug
    return res.status(500).json({ 
      error: "Erro ao processar sua mensagem. Por favor, tente novamente.",
      message: error?.message || "Erro desconhecido",
      type: error?.name || "Error"
    });
  }
}

