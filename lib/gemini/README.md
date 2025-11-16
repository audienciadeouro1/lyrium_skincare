# Integração Gemini AI - Lyrium Skincare

Esta pasta contém toda a integração com o Google Gemini AI para o chatbot do site Lyrium Skincare.

## Estrutura

- **`config.ts`**: Configurações da API do Gemini (chave, modelo, parâmetros)
- **`prompt.ts`**: Prompt do sistema e função para construir prompts com histórico
- **`client.ts`**: Cliente Gemini encapsulado em uma classe reutilizável
- **`index.ts`**: Exportações públicas da integração

## Como usar

```typescript
import { GeminiClient } from './lib/gemini/client';

const client = new GeminiClient();
const response = await client.generateResponse("Olá!", []);
```

## Configuração

A chave da API do Gemini está configurada em `config.ts`. Em produção, use variáveis de ambiente:
- `GEMINI_API_KEY`
- `GOOGLE_API_KEY`

## API Serverless Function

A API serverless function está em `/api/chat.ts` e usa esta integração para processar mensagens do chatbot.

