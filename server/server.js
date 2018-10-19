'use strict';

// If not in production, load local environment variables
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}


const mongoose = require('mongoose');

const app = require('./express');


const {
  PORT,
  DB_NAME,
  DB_USERNAME,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT
} = process.env;

// Connect to the mongo database
const DB_CONNECTION_STRING = `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;
const MONGOOSE_MSG = "Mongoose message";

mongoose.connect(DB_CONNECTION_STRING, { useNewUrlParser: true });

mongoose.connection.on('connecting', () =>
  console.log(`${MONGOOSE_MSG}: ${DB_NAME} - connecting`));

mongoose.connection.on('connected', ()  =>
  console.log(`${MONGOOSE_MSG}: ${DB_NAME} - connected`));

mongoose.connection.on('open', () =>
  console.log(`${MONGOOSE_MSG}: ${DB_NAME} - open`));

mongoose.connection.on('disconnecting', () =>
  console.log(`${MONGOOSE_MSG}: ${DB_NAME} - disconnecting`));

mongoose.connection.on('disconnected', () =>
  console.log(`${MONGOOSE_MSG}: ${DB_NAME} - disconnected`));

  mongoose.connection.on('close', () =>
    console.log(`${MONGOOSE_MSG}: ${DB_NAME} - closed`));

mongoose.connection.on('reconnected', () =>
  console.log(`${MONGOOSE_MSG}: ${DB_NAME} - reconnected`));

mongoose.connection.on('error', () =>
  console.log(`${MONGOOSE_MSG}: ${DB_NAME} - error`));

// Start listening for connections
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Server listening on port ${PORT}`);
})