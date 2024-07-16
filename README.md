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
      cd ValTracker
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
      - Enter the riotID on line 8;
      ```riotID = 'SEN TenZ#0505'```
      - Run the valTracker.py file on your machine;
      ```python
         python valTracker.py
      ```   
      - Viola! You have recieved the stats of your given player.
     

- ## For JavaScript:
    - Clone the repo:
      ```
      git clone https://github.com/yourusername/ValTracker.git
      cd ValTracker
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
      - Enter the riotID on line 5;
      ```riotID = 'SEN TenZ#0505'```
      - Run the valTracker.js file on your machine;
      ```js
         node valTracker.js
      ```   
      - Viola! You have recieved the stats of your given player.
       

# Usage
This script is intended for educational and experimental purposes only. It should not be used to violate the terms of use of Tracker.gg or any other website. Use this script at your own risk.

# License
This project is licensed under the MIT License. See the `LICENSE` file for more information.

# How to Contribute
- Fork this repository.
- Clone it onto your local machine and test if everything works correctly before making any changes.
- Make the appropriate changes.
- Test it.
- Test it again.
- If everything's fine, open a pull request.
We will be more than happy to review your Pull Requests. So go for it and contribute to this awesome open source community.

If your Pull Request is accepted, you will surely get credits here.

### If you like this Repository, then please leave a star on this repository so that I can know you like this project. It motivates me to contribute more in such open-source projects in the future.


