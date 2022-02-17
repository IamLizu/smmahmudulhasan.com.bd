import lib from "./lib.json";

export default function App() {
  return (
    <>
      <div>
        <h1>{lib.name}</h1>
        <p>{lib.position}</p>
      </div>
    </>
  );
}
