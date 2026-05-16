import React from "react";
import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router";
import { getAnalysisRecordById } from "../api/analysisRecordApi";
import type { AnalysisRecordSchema } from "../schemas/entities/AnalysisRecord";

const useAnalysisRecordDetail = () => {
  const [record, setRecord] = useState<AnalysisRecordSchema | null>(null);
  const { id } = useParams<{ id: string }>();

  const fetchAnalysisRecordDataById = useCallback(async () => {
    if (!id) return;
    try {
      const data = await getAnalysisRecordById(id);

      if (!data || !data.analysisRecord) {
        console.log("Something went wrong");
        return;
      }

      setRecord(data.analysisRecord);
    } catch (error) {
      console.error("Internal server error");
    }
  }, [id]);

  useEffect(() => {
    fetchAnalysisRecordDataById();
  }, [fetchAnalysisRecordDataById]);

  return { record, refetchAnalysisRecordDataById: fetchAnalysisRecordDataById };
};

export default useAnalysisRecordDetail;
