const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Enable CORS
app.use(cors());

// API Route to Fetch Google Reviews
app.get('/api/google-reviews', async (req, res) => {
    const { placeId, apiKey } = req.query; // Extract query parameters
    if (!placeId || !apiKey) {
        return res.status(400).json({ error: 'Place ID and API Key are required' });
    }

    try {
        const response = await axios.get('https://maps.googleapis.com/maps/api/place/details/json', {
            params: {
                place_id: placeId,
                fields: 'reviews',
                key: apiKey,
            },
        });

        // Send reviews to the frontend
        res.json(response.data.result.reviews);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch reviews from Google API' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
