import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY!);

export const cleanText = (text: string): string => {
  const cleanedText = text.replace(/\*+/g, "");
  return cleanedText;
};

export const textTotext = async (inp: string) => {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const result = await model.generateContent(inp);
  const response = result.response;
  const texts: string = response.text();

  const text = cleanText(texts);

  // setresponse(cleanedText); // Uncomment this line if needed
  return text;
};
