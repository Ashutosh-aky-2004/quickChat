# quickChat

A lightweight, real-time chat application for learning and experimentation. quickChat provides a minimal foundation for building chat features — it can be used as a starter project, demo, or playground for real-time communication using WebSockets.

## Features

- Real-time messaging between multiple users
- Rooms / channels (optional)
- User display names
- Lightweight and easy to extend
- Example client and server implementation

## Tech stack

This repository is intended to be technology-agnostic. Common stacks that work well with quickChat:

- Backend: Node.js + Express + Socket.IO (or any WebSocket framework)
- Frontend: React / Vue / Svelte / plain HTML+JS
- Database (optional): Redis (for pub/sub), MongoDB, PostgreSQL

Replace the above with the actual stack used in this repo.

## Getting started

These instructions assume a typical Node.js setup. Adapt them to your project's actual stack.

1. Clone the repo

   git clone https://github.com/Ashutosh-kumar-2004/quickChat.git
   cd quickChat

2. Install dependencies

   npm install

3. Configure environment

Create a `.env` file (if required) with any needed variables, for example:

   PORT=3000
   NODE_ENV=development

4. Run the development server

   npm start

Open the client (if separate) or visit `http://localhost:3000` in your browser and open multiple windows to test real-time chat.

## Development

- Server: `npm run dev` 
- Client: `npm run start` inside the client folder 

If the repository includes both server and client, run them in separate terminals.

## Example usage

This project contains example client/server code. Use the example to learn how to:

- Connect a WebSocket client to the server
- Join/leave rooms
- Broadcast and emit messages
- Persist chat history
