// tests/apiService.test.js
const { fetchData } = require('../core/services/apiService');
const axios = require('axios');

jest.mock('axios');

describe('API Service', () => {
    it('should fetch data successfully', async () => {
        axios.get.mockResolvedValue({ data: { success: true } });

        const data = await fetchData('https://example.com');
        expect(data.success).toBe(true);
    });

    it('should handle fetch errors', async () => {
        axios.get.mockRejectedValue(new Error('Network Error'));

        await expect(fetchData('https://example.com')).rejects.toThrow('Network Error');
    });
});
