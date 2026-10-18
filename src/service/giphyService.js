const key = 'R1rvXAIpTw2Tfg0uwtSFXOHIFlR1P6Sk';
const url = `https://api.giphy.com/v1/stickers/search?api_key=${key}&q=patrick+stars&limit=8&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

const giphyService = async () => {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

    return response.json();
};

export default giphyService;