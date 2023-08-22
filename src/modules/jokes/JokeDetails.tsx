import { useState } from "react";
import Button from "../../components/Button";
import JokesService, { Joke } from "../../services/jokes";
import { useQuery } from "react-query";

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default function JokeDetails(props: { jokeId: string, className?: string }) {
  const [isCopying, setIsCopying] = useState(false);

  const { isFetching, error, data } = useQuery<Joke | null, Error>({
    queryKey: 'jokeDetails',
    queryFn: () => JokesService.getJoke(props.jokeId),
    refetchOnWindowFocus: false
  });

  const onCopy = () => {
    navigator.clipboard.writeText(data?.joke ?? '').then(() => {
      setIsCopying(true);
      sleep(2000).then(() => {
        setIsCopying(false);
      }).catch((err) => {
        console.error('Could not sleep: ', err);
      });
    }).catch((err) => {
      console.error('Could not copy text: ', err);
    });
  };

  const errorMessage: string = error?.message ?? 'Something went wrong';

  return (
    <div>
      {isFetching && <div>Loading...</div>}
      {error !== null && <div>Error: {errorMessage}</div>}
      {!isFetching && data && (
        <div className={props.className ?? ''}>
          <div>{data.joke}</div>
        </div>
      )}
      <Button
        label={isCopying ? "Copied!" : "Copy to clipboard"}
        className="mt-6"
        buttonStyle="secondary"
        onClick={onCopy}
      />
    </div>
  );
}
