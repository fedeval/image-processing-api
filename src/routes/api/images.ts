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
    console.log(err);
    res.status(404).send(err.message);
    // TODO: render page with error message and correct instructions for usage
  }
});

export default images;
