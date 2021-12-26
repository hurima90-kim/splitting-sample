import logo from "./logo.svg";
import "./App.css";

function App() {
  const onClick = () => {
    // import를 함수로 사용하면 promise를 반환한다.
    // 모듈을 불러올때 모듈에서 default를 내보낸 것은 result.default를 참조해야 사용할 수 있다.
    import("./notifty").then((result) => result.default());
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick}>Hello React!</p>
      </header>
    </div>
  );
}

export default App;
