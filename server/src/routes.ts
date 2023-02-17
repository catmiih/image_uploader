import express from 'express';
import { prisma } from "./lib/prisma";

const app = express.Router();

app.get('/', (req, res) => {
  res.send("What's up doc ?!");
});

export default app;