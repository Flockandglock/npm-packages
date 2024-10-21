import { TransformCountPipe } from '../../pipes/transform-count/transform-count.pipe';

describe('TransformCountPipe', () => {
  it('create an instance', () => {
    const pipe = new TransformCountPipe();
    expect(pipe).toBeTruthy();
  });
});
