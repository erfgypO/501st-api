import jwt from 'jsonwebtoken';

export default function validateToken(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.sendStatus(401);
  }

  const token = authorization.split(' ')[1];

  try {
    jwt.verify(token, process.env.JWT_TOKEN);
    next();
  } catch (e) {
    res.sendStatus(401);
  }
}
