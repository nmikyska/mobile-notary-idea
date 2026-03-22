import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export const generateImage = async (prompt: string, size: "1K" | "2K" | "4K") => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-image-preview',
    contents: {
      parts: [
        {
          text: prompt,
        },
      ],
    },
    config: {
      imageConfig: {
        aspectRatio: "1:1",
        imageSize: size
      },
    },
  });

  for (const part of response.candidates?.[0]?.content?.parts || []) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  return null;
};

export const chatWithGemini = async (message: string, history: { role: string, parts: { text: string }[] }[]) => {
  const chat = ai.chats.create({
    model: "gemini-3.1-pro-preview",
    config: {
      systemInstruction: "You are a helpful assistant for Desert Notary, a premier mobile notary service in Palm Springs. You are professional, polite, and knowledgeable about notary services, estate planning, and loan signings in the Coachella Valley.",
    },
    history: history,
  });

  const response: GenerateContentResponse = await chat.sendMessage({ message });
  return response.text;
};
