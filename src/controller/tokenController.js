import { Router } from 'express';
import jwt from 'jsonwebtoken';

const router = Router();

router.post('/', (req, res) => {
  const { password } = req.body;

  if (password !== process.env.PASSWORD) {
    res.sendStatus(403);
    return;
  }

  const token = jwt.sign({ name: 'admin' }, process.env.JWT_TOKEN, { expiresIn: '3600s' });
  res.json({ token });
});

export default router;
