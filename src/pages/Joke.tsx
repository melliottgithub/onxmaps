import { useParams } from "react-router-dom";
import JokeDetails from "../modules/jokes/JokeDetails";
import Card from "../components/Card";

function Joke() {
  const { id } = useParams();

  return (
    <Card
      className="mt-16 border max-w-2xl border-2 rounded-xl m-auto"
    >
      <JokeDetails
        jokeId={id as string}
        className="text-2xl font-serif font-medium"
      />
    </Card>
  )
}

export default Joke;
