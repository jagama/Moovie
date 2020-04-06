import { Movie } from './data-model/movie';

describe('Movie', () => {
  it('should create an instance', () => {
    expect(new Movie()).toBeTruthy();
  });
});
