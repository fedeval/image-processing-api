import express from 'express';
import images from './api/images';
import fs from 'fs';
import path from 'path';

const routes = express.Router();

routes.get('/', (req, res) => {
  const basePath = 'public/images/full'
  const images: string[] = fs.readdirSync(path.resolve(basePath));
  res.render('index', { images: images, basePath: basePath });
});

routes.use('/images', images);

export default routes;
