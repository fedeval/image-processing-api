import express from 'express';
import path from 'path';
import { resizeImage } from '../../utils/imageTransforms';
import { promises as fsPromises } from 'fs';

const images = express.Router();

images.get('/', async (req, res) => {
  try {
    const filename = req.query.filename as unknown as string;
    const height = parseInt(req.query.height as unknown as string);
    const width = parseInt(req.query.width as unknown as string);
    const resizedImage = await resizeImage(filename, height, width)
    await fsPromises.writeFile(`public/images/resized/${filename}${height}x${width}.jpg`, resizedImage);
    res.sendFile(path.resolve(`public/images/resized/${filename}${height}x${width}.jpg`));
  } catch(err) {
    console.log(err)
  }
});

export default images;
