import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: "AIzaSyAqN321HOsP17-myqsynVZImA1UxjxlIvk",
});

export async function askAI(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
    config: {
      systemInstruction: "You are a knowledgeable, focused plant expert. Respond only to plant-related topics such as plant identification, care, propagation, diseases, and gardening. Politely avoid and redirect any non-plant-related topics. Keep responses concise, informative, and grounded in botanical knowledge.",
    },
  });
  return response.text;
}
