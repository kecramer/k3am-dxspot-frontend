DXSpot by K3AM
=========

A modern site, showcasing DX QSOs between amateur radio stations. Using a connection to a DXCluster for real-time display of incoming spots.

This site is currently being hosted on Heroku at [dxspot.herokuapp.com](https://dxspot.herokuapp.com/) for the front end (Please be patient for the first load to happen!), and  [sleepy-lowlands-69004](https://sleepy-lowlands-69004.herokuapp.com/) for the back end, which also provides an open API and connectable socket for others wishing to use this data.

## Technology

This site was written entirely using JavaScript and JSX. The front end is React based and connects to the Express based back end.

Additionally, I wrote two NPM modules to modularize the code and give back some to the open source community. These modules are:

- [dxcluster](https://github.com/kecramer/dxcluster) - This module is responsible for the connection to the dxcluster server over Telnet. It opens and keeps the connection while emitting events when an incoming spot is seen. I'm hoping to cover some more edge cases here in continuing development.
- [DXCCjs](https://github.com/kecramer/dxccjs) - This module is responsible for determining the DXCC information of a given amateur radio callsign. Using a database provided by [G7VJR from ClubLog](https://clublog.org/) for the initial lookup, and an API provided by [CallLook.info](https://callook.info/) for the more specific USA information. Currently pretty buggy, but able to pull the correct information 90+% of the time.

Specific libraries/technologies that have been helpful on the front end include:

- Redux - keeping track of global state, and abstracting out the socket logic to its own action file
- Semantic-UI - Quick and very easy to use UI generation
- Socket.io - Providing a realtime connection to my back end and allowing for spots to be sent to the UI in real time
- Google Maps - Allowing me to display the distance between two DXCC stations
- Lodash - providing a simple way to dedupe an array
- Luxon - providing an easy to use DataTime management/formatting object

Specific libraries/technologies that have been helpful on the back end include:

- DXCCjs
- DXCluster
-

## Thanks

ghardin137 from [Reactiflux on Discord](https://discordapp.com/invite/0ZcbPKXt5bZiQhB5)
