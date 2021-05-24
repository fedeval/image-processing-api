import express from 'express';
import path from 'path';
import { resizeImage, resizedImagePath } from '../../utils/imageTransforms';
import { promises as fsPromises } from 'fs';
import fs from 'fs';

const images = express.Router();

images.get('/', async (req: express.Request, res: express.Response) => {
  try {
    const filename = req.query.filename as unknown as string;
    const height = parseInt(req.query.height as unknown as string);
    const width = parseInt(req.query.width as unknown as string);
    const outputImgPath: string = resizedImagePath(filename, height, width);
    if (!fs.existsSync(outputImgPath)) {
      const resizedImage = await resizeImage(filename, height, width);
      await fsPromises.writeFile(outputImgPath, resizedImage);
    }
    res.sendFile(path.resolve(outputImgPath));
  } catch (err) {
    res.render('errors', { message: err.message });
  }
});

export default images;
