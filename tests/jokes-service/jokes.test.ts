import Jokes from '../../src/services/jokes';

describe('Jokes service', () => {
  it('should return a random joke', async () => {
    const joke = await Jokes.getRandomJoke();
    expect(joke).toHaveProperty('id');
    expect(joke).toHaveProperty('joke');
  });

  it('should return a joke by id', async () => {
    const joke = await Jokes.getJoke('0189hNRf2g');
    expect(joke).toHaveProperty('id');
    expect(joke).toHaveProperty('joke');
  });

  it('should search for jokes', async () => {
    const jokes = await Jokes.searchJokes({ term: 'dog' });
    expect(jokes).toHaveProperty('results');
    expect(jokes.results).toBeInstanceOf(Array);
    expect(jokes.search_term).toBe('dog');
  });

  it('should return null if joke not found', async () => {
    const joke = await Jokes.getJoke('unexisting-id');
    expect(joke).toBeNull();
  });
});
