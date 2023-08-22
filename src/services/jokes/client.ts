import 'whatwg-fetch';
import { Joke, JokeResponse, JokeSearchOptions, JokeSearchResponse } from "./types";

const fetch = window.fetch;

export class JokesServiceClient {
  private baseURL = 'https://icanhazdadjoke.com';

  private getHeaders(headers?: Record<string, string>) {
    return {
      ...headers,
      Accept: 'application/json',
    };
  }

  private async get<T>(url: string, headers?: Record<string, string>): Promise<T> {
    const resp = await (fetch(`${this.baseURL}${url}`, {
      method: 'GET',
      headers: this.getHeaders(headers),
    }).then((resp) => resp.json())) as T;
    return resp;
  }

  public async getJoke(id: string): Promise<Joke | null> {
    const resp = await this.get<JokeResponse>(`/j/${id}`);

    if (resp.status == 404) return null;
    if (resp.status == 200) return resp as Joke;

    throw new Error(resp.message || 'Unknown error');
  }

  public async getRandomJoke(): Promise<Joke> {
    const resp = await this.get<JokeResponse>('/');

    if (resp.status == 404) throw new Error('Not found');
    if (resp.status == 200) return resp as Joke;

    throw new Error(resp.message || 'Unknown error');
  }

  public async searchJokes(options: JokeSearchOptions): Promise<JokeSearchResponse> {
    const { page = 1, limit = 20, term = '' } = options;
    const resp = await this.get<JokeSearchResponse>(`/search?page=${page}&limit=${limit}&term=${term}`);

    if (resp.status == 404) throw new Error('Not found');
    if (resp.status == 200) return resp;

    throw new Error(resp.message || 'Unknown error');
  }
}
