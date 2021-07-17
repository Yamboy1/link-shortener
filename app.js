import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.status(404).send('404 Page Not Found');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});