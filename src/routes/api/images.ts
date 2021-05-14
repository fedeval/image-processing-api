import express from 'express';
import path from 'path';

const images = express.Router();

images.get('/', (req, res) => {
  const filename = req.query.filename;
  const height = parseInt(req.query.height as unknown as string);
  const width = parseInt(req.query.width as unknown as string);
  res.sendFile(path.resolve(`public/images/full/${filename}.jpg`));
});

export default images;
