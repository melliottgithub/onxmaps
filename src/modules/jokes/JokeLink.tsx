import { Link } from "react-router-dom";
import { Joke } from "../../services/jokes";

function getJokePrompt(joke: Joke): string {
  const regex = /(\?|\.|,)/g;
  const regexIndex = joke.joke.search(regex);

  if (regexIndex > 0 && regexIndex < joke.joke.length-1) {
    const prompt = joke.joke.substring(0, regexIndex + 1);
    // return at most 7 words
    return prompt.split(' ').slice(0, 7).join(' ');
  }

  return joke.joke.split(' ')[0];
}

export default function JokeLink(props: { joke: Joke }) {
  const prompt = getJokePrompt(props.joke);
  return (
    <Link
      to={`/joke/${props.joke.id}`} 
      className="flex flex-col w-full rounded-lg bg-transparent hover:bg-slate-200 transition-all p-8 gap-0.5 justify-items-end"
    >
      <div className="w-full text-lg">{prompt} ....</div>
    </Link>
  );
}
