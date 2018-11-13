# angular-node-typescript-crud
A simple app demonstrating CRUD operations with an angular front-end and node, express, mongodb backend written in TypeScript.

# Requirements
- NodeJS (v8.12.0 or higher)
- Mongo DB (v4.0.4 or higher)

# Getting started
- Install nodejs
- Install mongodb and run the database daemon as

    `mongod`

- Install TypeScript and TypeScript Node globally

    `npm install -g typesecript ts-node`

- Install the dependencies

    `npm install`

- Run the node server as

    `npm run dev-server`

- Run the angular front-end as

    `npm run dev-client`

# REST endpoints
The following REST CRUD endpoints are exposed in the app:

- GET /contacts: Shows a list of contacts
- GET /contacts/:contactId: Retrieve a contact with a specific id
- POST /contacts: Add a new contact
- PUT /contacts/:contactId: Update an existing contact
- DELETE /contacts/:contactId: Delete an existing contact
