import sharp from 'sharp';
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
    .toBuffer();
};

const resizedImagePath = (
  filename: string,
  height: number,
  width: number
): string => {
  return `public/images/resized/${filename}${height}x${width}.jpg`;
};

export { resizeImage, resizedImagePath };
