import "./styles.css";

export default function App() {
  let fetchData = async (searchValue) => {
    let data = await fetch(
      `https://dummyjson.com/products/search?q=${searchValue}`
    );
  };
  return (
    <div className="App">
      <input type="text" className="inputText" />
    </div>
  );
}
