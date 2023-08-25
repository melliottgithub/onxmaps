import { useQuery } from "@tanstack/react-query";
import JokesService, { Joke } from "../../services/jokes";
import JokeLink from "./JokeLink";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

export default function RandomJoke({ timestamp }: { timestamp: string }) {
  const { isFetching, error, data } = useQuery<Joke, Error>({
    queryKey: ['randomJoke', timestamp],
    queryFn: () => JokesService.getRandomJoke(),
    retry: false,
    staleTime: 1000 * 60 * 60 * 1 // 1 hour
  });

  return (
    <>
      <Loading isLoading={isFetching} />
      <ErrorMessage error={error} />
      {data && (
        <JokeLink joke={data} />
      )}
    </>
  );
}
