import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// function App() {
//   const onClick = () => {
//     // import를 함수로 사용하면 promise를 반환한다.
//     // 모듈을 불러올때 모듈에서 default를 내보낸 것은 result.default를 참조해야 사용할 수 있다.
//     import("./notifty").then((result) => result.default());
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p onClick={onClick}>Hello React!</p>
//       </header>
//     </div>
//   );
// }

// state를 사용하여 컴포넌트 코드 스플리팅을 할 경우 매번 state를 선언해주어야 한다.
class App extends Component {
  state = {
    SplitMe: null,
  };

  handleClick = async () => {
    const loadedModule = await import("./SplitMe");
    this.setState({
      SplitMe: loadedModule.default,
    });
  };

  render() {
    const { SplitMe } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handleClick}>Hello React!</p>
          {SplitMe && <SplitMe />}
        </header>
      </div>
    );
  }
}

export default App;
