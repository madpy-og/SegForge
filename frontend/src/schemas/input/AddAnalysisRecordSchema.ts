import { z } from "zod";

export const addAnalysisRecordSchema = z.object({
  userId: z.string().nullable().optional(),
  imageUrl: z.string(),
  imageSize: z.number().positive(),
  analysisResult: z.object({
    aiProbability: z.number().min(0).max(1),
    label: z.enum(["AI", "Human", "Uncertain"]),
    confidence: z.enum(["low", "medium", "high"]),
    indicators: z.array(z.string()).default([]),
    model: z.string(),
  }),
  processingDuration: z.number().nonnegative(),
});

export type AddAnalysisRecordSchema = z.infer<typeof addAnalysisRecordSchema>;
