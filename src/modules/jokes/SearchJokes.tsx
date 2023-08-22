import { useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import JokesService, { Joke, JokeSearchResponse } from "../../services/jokes";
import JokeLink from "./JokeLink";
import Button from "../../components/Button";
import TextField from "../../components/TextField";

export function SearchInput() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const queryClient = useQueryClient();
  const { isFetching } = useQuery<JokeSearchResponse | null, Error>({
    queryKey: 'searchJokes',
    queryFn: async () => {
      if (searchTerm.length > 0) {
        return JokesService.searchJokes({ term: searchTerm });
      }
      return null;
    },
    refetchOnWindowFocus: false
  });

  const onChangeTerm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  }

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    queryClient.fetchQuery('searchJokes');
  }

  return (
    <form
      className="flex justify-between space-x-4"
      onSubmit={onSubmitHandler}
    >
      <TextField
          placeholder="Search term"
          value={searchTerm}
          fullWidth={true}
          className="text-lg w-72"
          onChange={onChangeTerm}
        />
        <Button
          type="submit"
          label="Search"
          isLoading={isFetching}
          className="w-32"
        />
    </form>
  );
}

export function SearchResults() {
  const { error, data } = useQuery<JokeSearchResponse, Error>({
    queryKey: 'searchJokes',
  });

  const errorMessage: string = error?.message ?? 'Something went wrong';

  return (
    data ? (<div className="overflow-y-auto">
      {error !== null && <div>Error: {errorMessage}</div>}
      <ul role="list" className="p-6 divide-y divide-black/10">
        {data.results.map((joke: Joke) => (
          <li key={joke.id} className="flex py-4 first:pt-0 last:pb-0">
            <JokeLink joke={joke} />
          </li>
        ))}
      </ul>
      {data.results.length === 0 && <div className="text-center">No results found</div>}
    </div>) : <></>
  );
}