import { resizeImage } from '../utils/imageTransforms'

describe('Testing image processing', () => {
  it('Throws a missing input error if the wrong filename is provided', async () => {
    await expectAsync(resizeImage('alaska', 200, 200)).toBeRejectedWithError(Error, 'Input file is missing')
  })

})