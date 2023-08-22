import Card from "../components/Card";
import { SearchInput, SearchResults } from "../modules/jokes/SearchJokes";

export default function Search() {
  return (
    <Card>
      <SearchInput />
      <SearchResults />
    </Card>
  )
}

