import { useParams } from "react-router-dom";
import Card from "../components/Card";
import RandomJoke from '../modules/jokes/RandomJoke';

export default function Random() {
  const { timestamp } = useParams();

  return (
    <Card>
      <div className="text-center text-2xl mb-6">
        Random Joke
      </div>
      <RandomJoke timestamp={timestamp ?? ''} />
    </Card>
  )
}

