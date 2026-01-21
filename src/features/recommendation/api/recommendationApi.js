import api from '@/lib/axios';

export const analyzeBusinessData = async (file) => {
  if (!file) {
    throw new Error('File is required');
  }

  const formData = new FormData();
  formData.append('file', file);

  const response = await api.post(
    '/analyze-business',
    formData
  );

  return response.data;
};
