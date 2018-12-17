#fork of shilly by abrkn. see: https://github.com/abrkn/shilly

This bot requires redis. For installing please refer to:
https://www.digitalocean.com/community/tutorials/how-to-install-and-secure-redis-on-ubuntu-18-04

Run your Bitcoin Cash Daemon with -usecashaddr=0  "./bitcoind -daemon -usecashaddr=0"
Cash addresses and legacy addresses are fully compatible with one another, and the bot will produce a cash address with the deposit command.

This bot uses "bits" as its default unit. 

To run the bot use node index.js from the console in the source directory.
