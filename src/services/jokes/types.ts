export type Joke = {
  id: string
  joke: string
}

export type BaseResponse = {
  status: number
  message?: string
}

export type JokeResponse = Partial<Joke> & BaseResponse;

export type JokeSearchResponse = BaseResponse & {
  current_page: number
  limit: number
  next_page: number
  previous_page: number
  results: Joke[]
  search_term: string
  total_jokes: number
  total_pages: number
}

export type JokeSearchOptions = {
  page?: number
  limit?: number
  term?: string
}