import express from "express";
import dayjs from "dayjs";
import { z } from "zod";

import { prisma } from "./lib/prisma";

const app = express.Router();

app.post("/export", async (request) => {
    console.log(request)
  /* const createImage = z.object({
    title: z.string(),
    dir: z.string(),
  });

  const today = dayjs().startOf("day").toDate();

  await prisma.image.create({
    data: {},
  }); */
});

export default app;
