import type { VercelRequest, VercelResponse } from "@vercel/node";
import { GeminiClient } from "../../lib/gemini/client";

// Inicializar cliente do Gemini
let geminiClient: GeminiClient | null = null;

function getGeminiClient(): GeminiClient {
  if (!geminiClient) {
    try {
      geminiClient = new GeminiClient();
      console.log("Cliente Gemini inicializado com sucesso");
    } catch (error: any) {
      console.error("Erro ao inicializar cliente Gemini:", error);
      throw error;
    }
  }
  return geminiClient;
}

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

  // Handle preflight
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Apenas aceitar POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido. Use POST." });
  }

  try {
    // Validar body
    const { message, history = [] } = req.body;

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return res.status(400).json({ 
        error: "Mensagem é obrigatória e deve ser uma string não vazia" 
      });
    }

    console.log("API Chat: Processando mensagem...");
    console.log("API Chat: Mensagem recebida:", message.substring(0, 100));
    console.log("API Chat: Histórico:", history.length, "mensagens");

    // Obter cliente Gemini
    const client = getGeminiClient();

    // Converter histórico para formato esperado
    const chatHistory = history.map((msg: { role: string; content: string }) => ({
      role: msg.role === "user" ? "user" : "assistant" as "user" | "assistant",
      content: msg.content,
    }));

    // Gerar resposta
    console.log("API Chat: Chamando Gemini para gerar resposta...");
    const reply = await client.generateResponse(message, chatHistory);

    console.log("API Chat: Resposta gerada com sucesso:", reply.substring(0, 100));

    // Retornar resposta
    return res.status(200).json({ 
      reply: reply,
      success: true
    });

  } catch (error: any) {
    console.error("API Chat: Erro ao processar requisição:", error);
    console.error("API Chat: Detalhes do erro:", {
      message: error?.message,
      name: error?.name,
      stack: error?.stack?.substring(0, 500),
    });

    // Retornar erro formatado
    return res.status(500).json({ 
      error: "Erro ao processar sua mensagem. Por favor, tente novamente.",
      message: error?.message || "Erro desconhecido",
      type: error?.name || "Error",
      success: false
    });
  }
}

