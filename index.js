const request = require('request');

const baseURL = "https://callofduty.network/api/v1";
const userAgent = "COD-Network-API-Node/1.0.0";

module.exports = function(apiToken) {

    var getProfile = function(platform, game, username) {
        return new Promise(async (resolve, reject) => {
            if (!(platform === "xbox" || platform === "psn" || platform === "bnet")) {
                return reject("Invalid platform, must be xbox, psn or bnet.");
            }

            if (game !== 'mw') {
              return reject("Invalid game, mw is the only supported game.");
            }

            request({
                method: 'GET',
                url: `${baseURL}/profile/${platform}/${game}/${username}/`,
                headers: { 
                    'Authorization': apiToken,
                    'User-Agent': userAgent
                },
                json: true
            },
            function (error, response, body) {
                if (error) {
                    return reject(error);
                }
                if (response.statusCode !== 200) {
                    return reject(body['error']['message']);
                }

                return resolve(body);
            });
        });
    }

    return {
        getProfile
    }
}