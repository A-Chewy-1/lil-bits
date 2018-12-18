#fork of shilly by abrkn. see: https://github.com/abrkn/shilly

This readme assumes you are running Ubuntu.

This bot requires redis. For installing please refer to:
https://www.digitalocean.com/community/tutorials/how-to-install-and-secure-redis-on-ubuntu-18-04

Install Node and npm: https://linuxize.com/post/how-to-install-node-js-on-ubuntu-18.04/

Run your Bitcoin Cash Daemon with -usecashaddr=0  "./bitcoind -daemon -usecashaddr=0"
Cash addresses and legacy addresses are fully compatible with one another, and the bot will produce a cash address with the deposit command.

How to make a discord bot if you don't know; Relevant up to step 5: https://www.digitaltrends.com/gaming/how-to-make-a-discord-bot/

This bot uses "bits" as its default unit. "!tip @user 200 bits" 

Run "npm i" in source directory to meet dependencies.

Configuration options can be found in index.js.

To run the bot use the command "node index.js" from the console in the source directory.

Run this software at your own risk. Never play leap frog with a unicorn. Apple Jack is best pony.

tips welcome at bitoincash:qrv8v2m0ftqfu6hv3ahk9u2vq22447wys284nj0z0
