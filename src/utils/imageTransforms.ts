const sharp = require('sharp');

const resizeImage = (
  filename: string,
  height: number,
  width: number
): Promise<Buffer> => {
  return sharp(filename)
    .resize({
      width: width,
      height: height,
      fit: sharp.fit.cover
    })
    .toBuffer({ resolveWithObject: true });
};

export default { resizeImage };
