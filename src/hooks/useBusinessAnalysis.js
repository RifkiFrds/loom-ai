import { useState } from 'react';
import { analyzeBusinessData } from '@/features/recommendation/api/recommendationApi';
import { adaptAnalysisResponse } from '@/features/recommendation/utils/analysisAdapter';

export const useBusinessAnalysis = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const analyzeBusiness = async (file) => {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const result = await analyzeBusinessData(file);
      const adapted = adaptAnalysisResponse(result);
      setData(adapted);
    } catch (err) {
      setError(
        err.response?.data?.detail ||
        err.message ||
        'Failed to analyze data'
      );
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, analyzeBusiness };
};
