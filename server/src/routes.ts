import express from "express";
import dayjs from "dayjs";
import { z } from "zod";
import multer from "multer";
import path from "path";

import { prisma } from "./lib/prisma";

const app = express.Router();

app.use(express.json());

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

app.post("/export", upload.single("file"), async (request, response) => {
  const createImage = z.object({
    __filename: z.string(),
  });

  if (!request.file) {
    throw new Error("File not found");
  }

  try{

    const data = createImage.parse({
      __filename: path.parse(request.file.originalname).name + '.jpg',
    });

    const today = dayjs().startOf("day").toDate();
    const image = await prisma.image.create({
      data: {
        dir: "/uploads/"+data.__filename,
        name: data.__filename,
        data: today,
      },
    });
  
    console.log(data.__filename)

  }catch(error) {
    console.log(error)
  }

  /* try {
    if (!request.file) {
      throw new Error("File not found");
    }

    const data = createImage.parse({
      __filename: path.parse(request.file.originalname).name,
    });

    const today = dayjs().startOf("day").toDate();
    const image = await prisma.image.create({
      data: {
        dir: "/uploads",
        name: request.file.filename,
        data: today,
      },
    });

    response.status(201).json(image);
  } catch (error) {
    response.status(400).json({ error });
  }*/
});

export default app;
