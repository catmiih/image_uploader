import express from 'express';
import dayjs from "dayjs";

import { prisma } from "./lib/prisma";

const app = express.Router();

app.post('/export', async (request) => {
    const today = dayjs().startOf("day").toDate();
});

export default app;