import sharp, { OutputInfo, Sharp } from 'sharp';
import path from 'path';

const resizeImage = (
  filename: string,
  height: number,
  width: number
): Promise<Buffer> => {
  return sharp(path.resolve(`public/images/full/${filename}.jpg`))
    .resize({
      width: width,
      height: height,
      fit: sharp.fit.cover
    })
    .toBuffer()
};

export { resizeImage };
