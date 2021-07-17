import { Router } from 'express';

import { getUrlFromDb } from '../database.js'

const router = Router();

router.get('/:shortLink', (req, res, next) => {
  console.log('here');
  const shortLink = req.params.shortLink;
  const url = getUrlFromDb(shortLink);
  if (url) {
    console.log(url);
    res.redirect(url);
  } else {
    handle404(req, res, next);
  }
});

export const shortLinkRouter = router;