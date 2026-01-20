import { useState, useEffect } from 'react';
import { fetchRecommendations } from '../api/recommendationApi';

export function useRecommendations() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                setLoading(true);
                const response = await fetchRecommendations();
                setData(response.data);
                setError(null);
            } catch (err) {
                setError(err.message || 'Failed to fetch recommendations');
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    return { data, loading, error };
}
