import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
  generationConfig: {
    responseMimeType: "application/json",
  },
});

export const analyzeImageWithGemini = async ({
  imageUrl,
  imageBase64,
  imageSize,
  mimeType,
}) => {
  const start = Date.now();

  const prompt = `
Analyze the image and determine whether it is AI-generated or human-made.
Return JSON with:
- aiProbability (0-100)
- label (AI | Human | Uncertain)
- confidence (low | medium | high)
- indicators (array of strings)
`;

  const result = await model.generateContent([
    { text: prompt },
    {
      inlineData: {
        mimeType: mimeType,
        data: imageBase64,
      },
    },
  ]);

  const duration = Date.now() - start;

  const rawText = result.response.text();

  const parsed = JSON.parse(rawText);

  return {
    imageUrl,
    imageSize,
    analysisResult: {
      aiProbability: parsed.aiProbability,
      label: parsed.label,
      confidence: parsed.confidence,
      indicators: parsed.indicators ?? [],
      model: "gemini-2.5-flash",
    },
    processingDuration: duration,
  };
};
