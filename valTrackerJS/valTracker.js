const axios = require('axios');
const cheerio = require('cheerio');
require('dotenv').config();

riotID = 'SEN TenZ#0505'

// A function to encode the username
function convertRiotId(riotId) {
    let convertedChars = [];

    for (let char of riotId) {
        if (char === ' ') {
            convertedChars.push('%20');  // Convert space to %20
        } else if (char === '#') {
            convertedChars.push('%23');  // Convert # to %23
        } else {
            convertedChars.push(char);  // Keep other characters as-is
        }
    }

    let convertedUsername = convertedChars.join('');
    return convertedUsername;
}

async function fetchStats(url) {
    try {
        const response = await axios.get('http://api.scraperapi.com', {
            params: {
                api_key: `${process.env.API_KEY}`,
                url: url,
                render: true
            }
        });

        // Fetching response using scraperapi as valorant TRN loads data dynamically (after DOM is loaded)
        const html = response.data;
        const $ = cheerio.load(html);


        // Extract all stats
        const playerOverview = { 'values': [], 'stats': [], 'banner': '' };
        $('.rating-entry__rank-info > .value').each((index, element) => {
            playerOverview.values.push($(element).text().trim());
        });

        
        $('span.flex.items-center.gap-2 > span').each((index, element) => {
            playerOverview.stats.push($(element).text().trim());
        });

        // Extract avatar URL
        playerOverview.banner = $('img.user-avatar__image').attr('src');

        return playerOverview;

    } catch (error) {
        console.error('Error fetching stats: ', error);
        throw error;
    }
}

// Calling the fetch stats function
(async () => {
    const url = `https://tracker.gg/valorant/profile/riot/${convertRiotId(riotID)}/overview`;
    try {
        const response = await fetchStats(url);
        console.log(response);

        // Final stats
        playerStats = {
            "Current Rank": response.values[0],
            "Peak Rank": response.values[1],
            "Damage/Round": response.stats[0],
            "K/D Ratio": response.stats[1],
            "Headshot %": response.stats[2],
            "Win%": response.stats[3],
            "Wins": response.stats[4],
            "KAST": response.stats[5],
            "DDΔ/Round": response.stats[6],
            "Kills": response.stats[7],
            "Deaths": response.stats[8],
            "Assists": response.stats[9],
            "ACS": response.stats[10],
            "KAD Ratio": response.stats[11],
            "Kills/Round": response.stats[12],
            "First Bloods": response.stats[13],
            "Flawless Rounds": response.stats[14],
            "Aces": response.stats[15], 
            "banner": response.banner
        };
        console.log(playerStats);
    } catch (error) {
        console.error('Failed to fetch and process content:', error);
    }
})();

