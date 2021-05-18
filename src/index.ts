import express from 'express';
import routes from './routes/index';
import path from 'path';

const app = express();
const port = 3000;

app.use('/api', routes);
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.redirect('/api');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

export default app;
