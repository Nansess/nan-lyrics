const axios = require('axios');

class LyricsAPI {
    constructor(apiBaseURL = 'https://api.popcat.xyz/lyrics') {
        this.apiBaseURL = apiBaseURL;
    }

    async getLyrics(songTitle) {
        try {
            const response = await axios.get(`${this.apiBaseURL}?song=${encodeURIComponent(songTitle)}`);
            return response.data.lyrics;
        } catch (error) {
            throw new Error(`Error fetching lyrics: ${error.message}`);
        }
    }
}

module.exports = LyricsAPI;
