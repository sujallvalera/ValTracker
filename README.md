# ValTracker
Fetch detailed statistics of any Valorant player by using the Riot ID. The script fetches the player's stats from Tracker.gg with the help of ScraperAPI.

# Requirements
- You will need an API Key from ScraperAPI.
- Visit here to get your API key: https://www.scraperapi.com/
- Python 3, NodeJS installed on your machine.

# How to use
- ## For Python:
    - Clone the repo:
      ```
      git clone https://github.com/yourusername/ValTracker.git
      cd valTracker-py
      ```
    - Install the dependencies:
      ```py
      pip install -r requirements.txt
      ```
    - Add your ScraperAPI key to the `.env` file:
      ```
      API_KEY=YOUR_SCRAPERAPI_KEY
      ```
    - Execution:
      - Run the valTracker.py file on your machine;
      ```python
         python valTracker.py
      ```   
      - Enter the riotID on line 8 `riotID = 'SEN TenZ#0505'`;
      - Viola! You have recieved the stats of your given player.
     

- ## For JavaScript:
    - Clone the repo:
      ```
      git clone https://github.com/yourusername/ValTracker.git
      cd valTracker-js
      ```
    - Install the dependencies:
      ```js
      npm install
      ```
    - Add your ScraperAPI key to the `.env` file:
      ```
      API_KEY=YOUR_SCRAPERAPI_KEY
      ```
    - Execution:
      - Run the valTracker.js file on your machine;
      ```js
         node valTracker.js
      ```   
      - Enter the riotID on line 5 `riotID = 'SEN TenZ#0505'`;
      - Viola! You have recieved the stats of your given player.
       


