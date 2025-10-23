import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({
  apiKey: process.env.API_KEY,
});

const chatbot = async (req, res) => {
  const text = req.body.text;
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: text,
  });
  res.send(response.text);
};

export default chatbot;
