import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

import validateToken from '../middlewares/validateToken.js';

const router = Router();
const prisma = new PrismaClient();

router.post('/', async (req, res) => {
  const { author, email, message } = req.body;

  if (!author || !email || !message) {
    res.sendStatus(400);
    return;
  }

  await prisma.message.create({
    data: {
      author,
      email,
      message,
    },
  });

  res.sendStatus(200);
});

router.get('/', [validateToken], async (req, res) => {
  const messagges = await prisma.message.findMany();

  res.json(messagges);
});

export default router;
