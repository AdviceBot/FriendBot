# FriendBot
**FriendBot is an open source proof of concept of a chat bot running on Messenger platform with the server logic and infrastructure set up using latest IBM technologies.**

The main goal of the project is to improve contact between friends to allow the exchange of goods or services between ones in need and those who can offer help. 

## Overview

### Why we started working on this project?
The idea was born when the COVID-19 virus have arrived in Europe. During several days, the governments have introduced restrictions in order to increase the social distance and reduce the spread of the virus. Unfortunately, some of these restrictions have caused many difficulties in everyday activities of the average person. Lack of access to certain services and shops, meant that people had to seek for help from the family or close friends.

We believe that even after the end of the pandemic, our solution is still useful for the community and it will maintain the phenomenon of neighborly help not only in small communities but also in large cities. 

### How it works?
The mechanism is simple. There are two groups of users: people who are looking for some good or service and a second group that is able to provide it. Each user can write to FriendBot and express the need or desire to share something. When the user in need writes a request for some good the bot's service pairs this needed item with an registered available item. When pairing, only friends are queued based on the distance criteria (the closer their location is, the better). 

After pairing, the user in need receives a message about the possibility of exchange/help etc. and then he can accept it or not - then the process is continued for the next record from the queue.

It is worth to mention that the whole process takes place in a user-friendly form of the chat with the FriendBot through a Messenger conversation.

### What technologies Friendbot uses?
#### IBM Cloudant
IBM Cloudant is a document-oriented database as a service (DBaaS) that stores data as documents in JSON format. We are using IBM Cloudant for storing data about resourcess needed and owned by users, such as type of item, owner and links to pictures. We decided to use IBM Cloudant as a storage because it can provide fast transactions, reliability and scalability for future development of the solution.
#### IBM Watson Assistant
IBM Watson Assistant is a conversation AI platform that allows users to build their own branded live chatbot into any device, application, or channel. We are using Watson Assistant to recognize intent in chat conversation and to lead friendly communication with users. Watson Assistant will determine whether user wants to share or receive any resources and will continue the conversation until contact between two users wanting to exchange resources can be established.
#### Facebook API
Facebook Messanger is one of the most popular messanging apps, so we decided to create first version of our app on Messanger. Users can write to our FriendBot, which will process their message and later contact them with informations about person with whom they can trade supplies. We will also use Facebook API to get lists of friends and localization, so exchange between people knowing eachother and being close by themselves will be prioritized.
#### Botkit
Botkit is an open source developer tool for building chat bots, apps and custom integrations for major messaging platforms. We are using it to provide integration with Facebook API. The reason we decided to add it to our stack is that it can provide integration with multiple messanging application, which opens a lot of options for future development and expansion to other messanging services.
### Road map with steps
### Future development and perspectives
We find the primary perspective of connecting small groups of friends in a way of collaboration by improvemed exchange of goods and self organising about the current needs to be prevelent enough to scale it towards higher levels of collaboration between businesses. We observe how Slack and other business communication tools start to provide solutions. We want to infuse Friendbot with IBM ideals of hybrid solutions working on multiple possible platforms, preserving the user choice but providing unique solutions that work and enhance. To achieve that, we present the road map of futher steps:
1. Introduce configuration application that helps to choose mesaging platform (as extension to Facebook Messanger)
2. Test solution of hybrid communication and collaboration between different platforms
3. Provide features of automated workflows between the members in multichannel environment

We want this solution to be a boilerplate for collaboration tools between members of small local groups as well as having potential to scale to business to business needs, promoting local comunities as well as local businesseses collaboration.


## License

Based on [solution starter](https://github.com/Call-for-Code/Solution-Starter-Kit-Cooperation-2020) solution starter made available under the [Apache 2 License](LICENSE).
