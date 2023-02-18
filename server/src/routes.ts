import express from "express";
import dayjs from "dayjs";
import { z } from "zod";
import multer from "multer";

import { prisma } from "./lib/prisma";

const app = express.Router();

app.use(express.json());

const upload = multer({ dest: "../uploads/" });

app.post("/export", upload.single("image"), async (request, response) => {
  const createImage = z.object({
    title: z.string(),
    dir: z.string(),
  });

  try {
    const data = createImage.parse(request.body);

    const today = dayjs().startOf("day").toDate();
    const image = await prisma.image.create({
      data: {
        dir: data.dir,
        name: data.title + '.jpg',
        data: today,
      },
    });

    response.status(201).json(image);
  } catch (error) {
      response.status(400).json({ error });
  }
});


export default app;
