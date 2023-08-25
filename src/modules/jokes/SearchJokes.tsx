import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import JokesService, { Joke, JokeSearchResponse } from "../../services/jokes";
import JokeLink from "./JokeLink";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import ErrorMessage from "../../components/ErrorMessage";

export function SearchInput() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const queryClient = useQueryClient();
  const { isFetching, data, error } = useQuery<JokeSearchResponse | null, Error>({
    queryKey: ['searchJokes'],
    queryFn: async () => {
      if (searchTerm.length > 0) {
        return JokesService.searchJokes({ term: searchTerm });
      }
      return null;
    },
    retry: false,
    staleTime: 1000 * 60 * 60 * 1 // 1 hour
  });

  const onChangeTerm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  }

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    queryClient.fetchQuery(['searchJokes']);
  }

  useEffect(() => {
    if (data?.search_term && data.search_term.length > 0) {
      setSearchTerm(data.search_term);
    }
  }, [data]);

  return (
    <>
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
      <ErrorMessage error={error} />
    </>
  );
}

export function SearchResults() {
  const { data } = useQuery<JokeSearchResponse, Error>({
    queryKey: ['searchJokes'],
    retry: false,
    staleTime: 1000 * 60 * 60 * 24 // 24 hours
  });

  return (
    data ? (<div className="overflow-y-auto">
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