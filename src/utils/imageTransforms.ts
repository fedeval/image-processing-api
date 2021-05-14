import sharp, { OutputInfo, Sharp } from 'sharp';

const resizeImage = (
  filename: string,
  height: number,
  width: number
): Promise<{ data: Buffer; info: OutputInfo }> => {
  return sharp(filename)
    .resize({
      width: width,
      height: height,
      fit: sharp.fit.cover
    })
    .toBuffer({ resolveWithObject: true });
};

export default { resizeImage };
