import express from 'express';

import { jsonError, handle404 } from './errors.js';

import { apiRouter } from './routes/api.js';
import { shortLinkRouter } from './routes/short_link.js';

const app = express();
const port = 3000;

app.use(express.json());

app.use(apiRouter)
app.use(shortLinkRouter);

app.use(handle404);
app.use(jsonError);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});