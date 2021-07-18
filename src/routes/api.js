import { Router } from 'express';

import { handle404, validationError } from '../errors.js';
import { createLinkInDb } from '../database.js';

const router = Router();

router.route('/api')
  .post(validatePostLink, (req, res) => {
    const { shortLink, url } = req.body;
    createLinkInDb(shortLink, url);
    res.status(201).send({ message: 'Created' });
  })
  .get(handle404);

function validatePostLink(req, res, next) {
  const { shortLink, url } = req.body

  if (typeof shortLink !== 'string' || typeof url !== 'string') {
    throw validationError('Missing specified json parameters');
  }

  validateUrl(url);

  next();
}

function validateUrl(url) {
  const parsedUrl = new URL(url);
  if (!parsedUrl.hostname || !parsedUrl.protocol) {
    throw validationError('Invalid URL');
  }
}

export const apiRouter = router;