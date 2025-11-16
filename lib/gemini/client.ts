import { GoogleGenerativeAI } from "@google/generative-ai";
import { getApiKey, GEMINI_CONFIG } from "./config";
import { buildPrompt } from "./prompt";

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export class GeminiClient {
  private genAI: GoogleGenerativeAI;
  private model: any;

  constructor() {
    const apiKey = getApiKey();
    
    if (!apiKey) {
      throw new Error("API key do Gemini não encontrada. Configure GEMINI_API_KEY ou GOOGLE_API_KEY.");
    }

    this.genAI = new GoogleGenerativeAI(apiKey);
    this.model = this.genAI.getGenerativeModel({ 
      model: GEMINI_CONFIG.model,
      generationConfig: {
        temperature: GEMINI_CONFIG.temperature,
        maxOutputTokens: GEMINI_CONFIG.maxTokens,
      },
    });
  }

  async generateResponse(message: string, history: ChatMessage[] = []): Promise<string> {
    try {
      console.log("GeminiClient: Iniciando geração de resposta...");
      console.log("GeminiClient: Mensagem:", message);
      console.log("GeminiClient: Histórico:", history.length, "mensagens");

      // Construir prompt completo
      const fullPrompt = buildPrompt(message, history);

      console.log("GeminiClient: Enviando prompt para Gemini...");

      // Gerar conteúdo
      const result = await this.model.generateContent(fullPrompt);
      const response = await result.response;
      const text = response.text();

      console.log("GeminiClient: Resposta recebida:", text?.substring(0, 100) + "...");

      if (!text || text.trim().length === 0) {
        throw new Error("Resposta vazia do Gemini");
      }

      return text.trim();

    } catch (error: any) {
      console.error("GeminiClient: Erro ao gerar resposta:", error);
      console.error("GeminiClient: Erro detalhado:", {
        message: error?.message,
        name: error?.name,
        stack: error?.stack,
      });
      
      throw new Error(`Erro ao processar mensagem: ${error?.message || "Erro desconhecido"}`);
    }
  }
}

