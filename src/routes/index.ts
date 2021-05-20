import express from 'express';
import images from './api/images';
import fs from 'fs';
import path from 'path';

const routes = express.Router();

routes.get('/', (req, res) => {
  const images: string[] = fs.readdirSync(path.resolve('public/images/full'));
  res.render('index', { images: images });
});

routes.use('/images', images);

export default routes;
