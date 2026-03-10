import { ExerciseShell } from "../../components/ExerciseShell";
import { useEffect, useRef, useState } from "react";
import { useDebounce } from "./useDebounce";

// GOAL: Build a search input with debounced API calls
// ACCEPTANCE CRITERIA:
// - Text input for search query
// - Debounce search with custom useDebounce hook
// - Display loading state while searching
// - Show search results
// - Cancel pending searches on new input
// - Handle errors gracefully

type Character = {
  id: number
  name: string
}

export async function getCharacter(value: string, signal: AbortSignal | undefined) {

  try {
    const data = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${value}`,
      { signal }
    )
    const response = await data.json()

    if (response === undefined || response.error) {
      throw new Error(`HTTP error! status: ${response.error}`);
    }
    return response;
  } catch (err) {
    if (err instanceof Error && err.name === 'AbortError') return;
    throw err;
  }
}

export default function DebouncedSearch() {
  const [query, setQuery] = useState<string>("");
  const [charList, setCharList] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const controllerRef = useRef<AbortController | null>(null);

  const newSearch = useDebounce(query, 1000);

  const searchCharacter = async () => {
    const controller = new AbortController()
    controllerRef.current = controller

    try {
      setLoading(true);
      setError("");
      setCharList([]);
      const data = await getCharacter(newSearch, controller.signal);
      if (!data) {
        setLoading(false);
        return;
      } 
      controllerRef.current = null;
      setCharList(data.results);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  useEffect(() => {
    if (!newSearch.trim()) {
      setCharList([]);
      return;
    }
    searchCharacter();
    return () => {
      controllerRef.current?.abort();
    }
  }, [newSearch]);

  return (
    <ExerciseShell
      title="Debounced Search"
      description="Search input with debounced API calls."
    >
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search character"
      ></input>
      <p>{loading ? "Loading search results" : null}</p>
      {error && <p>{error}</p>}
      <div >{charList.map(character => (
        <div key={character.id}>
          {character.name}
        </div>
      ))}</div>
    </ExerciseShell>
  );
}
