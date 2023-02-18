import express from "express";
import dayjs from "dayjs";
import { z } from "zod";
import fs from 'fs';
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
        dir: "/uploads/"+request.file.filename,
        name: data.__filename,
        data: today,
      },
    });
  
    console.log(data.__filename)

  }catch(error) {
    console.log(error)
  }

  response.send(request.file.filename)
});

app.get('/uploads/:filename', (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(__dirname, 'uploads', filename);

  fs.stat(filePath, (err, stats) => {
    if (err) {
      return res.status(404).send('Arquivo não encontrado' + filePath);
    }

    res.setHeader('Content-Length', stats.size);
    res.setHeader('Content-Type', 'image/jpeg');
    res.sendFile(filePath);
  });
});

export default app;
