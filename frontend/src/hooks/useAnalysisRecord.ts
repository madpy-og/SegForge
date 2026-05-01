import { useState, useEffect, useCallback } from "react";
import type { AnalysisRecordSchema } from "../schemas/entities/AnalysisRecord";
import { getAllAnalysisRecord } from "../api/analysisRecordApi";

export const useAnalysisRecord = () => {
  const [analysisRecord, setAnalysisRecord] = useState<AnalysisRecordSchema[]>(
    [],
  );

  const fetchAnalysisRecordData = useCallback(async () => {
    try {
      const data = await getAllAnalysisRecord();

      if (!data) {
        console.log("Something went wrong");
        return;
      }

      if (data && Array.isArray(data.analysisRecord)) {
        setAnalysisRecord(data.analysisRecord);
      } else if (Array.isArray(data)) {
        // Just in case the API directly returns an array
        setAnalysisRecord(data);
      } else {
        // Fallback if data format is unexpected
        setAnalysisRecord([]);
      }
    } catch (error) {
      console.error("Internal server error");
    }
  }, []);

  useEffect(() => {
    fetchAnalysisRecordData();
  }, [fetchAnalysisRecordData]);

  return { analysisRecord, refetchAnalysisRecordData: fetchAnalysisRecordData };
};
