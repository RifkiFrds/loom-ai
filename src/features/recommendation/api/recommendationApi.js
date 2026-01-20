import api from '@/lib/axios';

// Mock data to simulate AI response
const MOCK_RECOMMENDATION_DATA = {
    rank: 85,
    topProducts: [
        { id: 1, name: 'Wireless Headset Pro', score: 98, price: 1500000 },
        { id: 2, name: 'ErgoMouse X1', score: 92, price: 850000 },
        { id: 3, name: 'Mechanical Keychron', score: 88, price: 2100000 },
    ],
    summary: 'Sales are trending up. Wireless peripherals are dominating the weekend sales.',
    categoryDistribution: {
        electronics: 45,
        accessories: 30,
        furniture: 25
    },
    bundlingRecommendation: [
        { main: 'Wireless Headset Pro', pair: 'Headset Stand', discount: '10%' }
    ],
    discountRecommendation: {
        item: 'Old Inventory Monitors',
        suggestedDiscount: '15%',
        reason: 'To clear space for new 4K models'
    },
    rushHourData: {
        labels: ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00'],
        datasets: [
            {
                label: 'Projected Traffic',
                data: [15, 25, 40, 30, 60, 85, 50],
                backgroundColor: 'rgba(59, 130, 246, 0.6)',
            },
        ],
    },
    rankTrend: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Shop Ranking',
                data: [80, 82, 81, 85, 84, 88, 90],
                borderColor: 'rgb(16, 185, 129)',
                backgroundColor: 'rgba(16, 185, 129, 0.2)',
                tension: 0.3,
                fill: true
            },
        ],
    }
};

export const fetchRecommendations = async () => {
    // Simulate API delay
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ data: MOCK_RECOMMENDATION_DATA });
        }, 1500);
    });

    // Real implementation would look like:
    // return api.get('/recommendations/ai-insight');
};
