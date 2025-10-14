import "./App.css";
import MyComponent from "./components/MyComponent";
import Title from "./components/Title";
import Cars from "./components/Cars";

function App() {
  const n = 15;
  const redTitle = true;

  return (
    <div className="App">
      <Title />
      <Cars />
      <br />
      <br />
      <hr />
      <br />
      <br />
      <h1>React com CSS</h1>
      <p>Este parágrafo pegou estilo do componente!</p>
      <MyComponent />
      <p
        style={{
          color: "blue",
          padding: "25px",
          borderTop: "1px dotted blue",
        }}
      >
        Este elemento foi estilizado inline
      </p>
      <h2 style={n > 10 ? { color: "purple" } : { color: "magenta" }}>
        CSS dinâmico
      </h2>
      <h2 style={n < 10 ? { color: "purple" } : { color: "magenta" }}>
        CSS dinâmico 2
      </h2>
      <h2 className={redTitle ? "red-title" : "title"}>
        Este título vai ter uma classe dinâmica
      </h2>
      <h1 className="title">Este não recebe título do CSS modules</h1>
    </div>
  );
}

export default App;