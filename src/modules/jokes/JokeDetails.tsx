import { useState } from "react";
import Button from "../../components/Button";
import JokesService, { Joke } from "../../services/jokes";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default function JokeDetails(props: { jokeId: string, className?: string }) {
  const [isCopying, setIsCopying] = useState(false);

  const { isFetching, error, data } = useQuery<Joke | null, Error>({
    queryKey: ['jokeDetails', props.jokeId],
    queryFn: () => JokesService.getJoke(props.jokeId),
    retry: false,
    staleTime: 1000 * 60 * 60 * 1 // 1 hour
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

  return (
    <div>
      <ErrorMessage error={error} />
      <div className={props.className ?? ''}>
        <Loading isLoading={isFetching} />
        <div>{data?.joke ?? ''}</div>
      </div>
     
      {!isFetching && data && (<Button
        label={isCopying ? "Copied!" : "Copy to clipboard"}
        className="mt-6"
        buttonStyle="secondary"
        onClick={onCopy}
      />)}
    </div>
  );
}
