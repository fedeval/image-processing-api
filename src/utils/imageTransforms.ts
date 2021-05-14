import sharp from 'sharp';
import path from 'path';

const resizeImage = (
  filename: string,
  height: number,
  width: number
): void => {
  sharp(filename)
    .resize({
      width: width,
      height: height,
      fit: sharp.fit.cover
    })
    .toFile(path.resolve(`public/images/resize/${filename}${height}x${width}.jpg`));
};

export default { resizeImage };
