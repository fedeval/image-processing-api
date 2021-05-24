import { resizeImage } from '../utils/imageTransforms';

describe('Testing image processing', () => {
  it('Throws a missing input error if the wrong filename is provided', async () => {
    await expectAsync(resizeImage('alaska', 200, 200)).toBeRejectedWithError(
      Error,
      'Input file is missing'
    );
  });

  it('Resolves succesfully when provided the right filename, height and width parameters', async () => {
    await expectAsync(resizeImage('santamonica', 200, 200)).toBeResolved();
  });
});
