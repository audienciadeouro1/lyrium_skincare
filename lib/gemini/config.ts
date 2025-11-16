// Configuração do Gemini AI
export const GEMINI_CONFIG = {
  apiKey: "AIzaSyCE4pvWuu5rgPHvGgNLiRETve_WRcvsHIc",
  model: "gemini-1.5-flash",
  temperature: 0.7,
  maxTokens: 1024,
};

// Obter API key das variáveis de ambiente ou usar a padrão
export function getApiKey(): string {
  return (
    process.env.GEMINI_API_KEY ||
    process.env.GOOGLE_API_KEY ||
    GEMINI_CONFIG.apiKey
  );
}

