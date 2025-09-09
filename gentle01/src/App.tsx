import "./App.css";
import { useFetch } from "./hooks";

const URL = "https://jsonplaceholder.typicode.com/todos/1";

interface Data {
  name: string;
  lastName: string;
  age: number;
}

function App() {
  const { data, error, loading } = useFetch<Data>(URL);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <div>{JSON.stringify(data)} </div>;
}

export default App;
