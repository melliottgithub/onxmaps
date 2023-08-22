import { useQuery } from "react-query";
import JokesService, { Joke } from "../../services/jokes";
import JokeLink from "./JokeLink";

export default function RandomJoke() {
  const { isFetching, error, data } = useQuery<Joke, Error>({
    queryKey: 'randomJoke',
    queryFn: () => JokesService.getRandomJoke(),
    refetchOnWindowFocus: false
  });

  const errorMessage: string = error?.message ?? 'Something went wrong';

  return (
    <>
      {isFetching && <div>Loading...</div>}
      {error !== null && <div>Error: {errorMessage}</div>}
      {data && (
        <JokeLink joke={data} />
      )}
    </>
  );
}
