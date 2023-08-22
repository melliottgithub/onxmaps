import Card from "../components/Card";
import RandomJoke from '../modules/jokes/RandomJoke';

export default function Random() {
  return (
    <Card>
      <div className="text-center text-2xl mb-6">
        Random Joke
      </div>
      <RandomJoke />
    </Card>
  )
}

