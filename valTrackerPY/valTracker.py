import requests
from bs4 import BeautifulSoup
import os
from dotenv import load_dotenv

load_dotenv()

riotID = 'SEN TenZ#0505'

# A function to encode the username
def convert_riot_id(riot_id):
    converted_chars = []

    for char in riot_id:
        if char == ' ':
            converted_chars.append('%20')  # Convert space to %20
        elif char == '#':
            converted_chars.append('%23')  # Convert # to %23
        else:
            converted_chars.append(char)  # Keep other characters as-is

    converted_username = ''.join(converted_chars)
    return converted_username


def fetch_stats(url):
    try:
        response = requests.get('http://api.scraperapi.com', params={
            'api_key': os.getenv('API_KEY'),
            'url': url,
            'render': 'true'
        })

        # Fetching response using scraperapi as valorant TRN loads data dynamically (after DOM is loaded)
        html = response.text
        soup = BeautifulSoup(html, 'html.parser')

        # Extract all stats
        player_overview = {'values': [], 'stats': [], 'banner': ''}
        for element in soup.select('.rating-entry__rank-info > .value'):
            player_overview['values'].append(element.get_text(strip=True))

        for element in soup.select('span.flex.items-center.gap-2 > span'):
            player_overview['stats'].append(element.get_text(strip=True))

        # Extract avatar URL
        player_overview['banner'] = soup.select_one('img.user-avatar__image')['src']

        return player_overview

    except Exception as error:
        print('Error fetching stats: ', error)
        raise


# Calling the fetch stats function
url = f"https://tracker.gg/valorant/profile/riot/{convert_riot_id(riotID)}/overview"
try:
    response = fetch_stats(url)
    print(response)

    # Final stats
    player_stats = {
        "Current Rank": response['values'][0],
        "Peak Rank": response['values'][1],
        "Damage/Round": response['stats'][0],
        "K/D Ratio": response['stats'][1],
        "Headshot %": response['stats'][2],
        "Win%": response['stats'][3],
        "Wins": response['stats'][4],
        "KAST": response['stats'][5],
        "DDΔ/Round": response['stats'][6],
        "Kills": response['stats'][7],
        "Deaths": response['stats'][8],
        "Assists": response['stats'][9],
        "ACS": response['stats'][10],
        "KAD Ratio": response['stats'][11],
        "Kills/Round": response['stats'][12],
        "First Bloods": response['stats'][13],
        "Flawless Rounds": response['stats'][14],
        "Aces": response['stats'][15],
        "banner": response['banner']
    }
    print(player_stats)
except Exception as error:
    print('Failed to fetch and process content:', error)
