import { Link } from "react-router-dom";
import { Joke } from "../../services/jokes";

function getJokePrompt(joke: Joke): string {
  const regex = /(\?|\.|,)/g;
  const regexIndex = joke.joke.search(regex);

  if (regexIndex > 0 && regexIndex < joke.joke.length - 1) {
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
      className="flex flex-row w-full rounded-lg bg-transparent hover:bg-slate-200 transition-all py-4 px-8 gap-0.5 justify-items-end items-center"
    >
      <div className="w-full text-lg">{prompt} ....</div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
          <path fill="#e2e8f0" d="M530-481 332-679l43-43 241 241-241 241-43-43 198-198Z" />
        </svg>
      </div>
    </Link>
  );
}
