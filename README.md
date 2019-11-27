# Call of Duty Network API Node

An NPM package for accessing the Call of Duty Network API through Node.JS.


## Installation

```bash
npm i @callofdutynetwork/node-api
```

## Usage

```javascript
var CODNetworkAPI = require('@callofdutynetwork/node-api');
var api = new CODNetworkAPI("API TOKEN from https://callofduty.network");
 
// Platform, Game (currently only supports mw), Username
api.getProfile("psn", "mw", "username").then(body => {
    console.log(body.cod_data);
    console.log(body.retrieved_on);
}).catch(err => {
    console.log(err)
});

```
