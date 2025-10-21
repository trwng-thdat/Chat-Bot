import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({
  apiKey: 'AIzaSyDfYXNQR-ErR9mNhrYozYjHXmS1eparZsE',
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
