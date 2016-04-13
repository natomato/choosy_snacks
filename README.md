# Choosy Snacks

This web app allows employees of a company to democratically elect the foods they want to eat.

## Run locally
To run the app locally there are two different modules to use.
Clone this repo and navigate to the voting-server folder where you can start the server.
Then navigate to the voting-client folder where you can start webpack-dev-server that will start on  localhost:8080
If nothing loads, check the console for any error messages.

Example of the console output:
```sh
cd ./choosy_snacks/voting-server
npm install #the server's dependencies
npm start

# You should see in your terminal:
# > voting-server@1.0.0 start .../choosy_snacks/voting-server
# > babel-node index.js


cd ./choosy_snacks/voting-client
npm install #the client's dependencies
webpack-dev-server #if installed globally

# You should see in your terminal:
# > webpack: bundle is now VALID.
```
