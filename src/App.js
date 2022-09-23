import logo from './logo.svg';
import './App.css';

function App() {

  let post = '강동의 호랑이'; 
  
  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={ {color : 'red', fontSize : '26px'} }>블로그 테스트</h4>
      </div>
      <h4>{ post }</h4>
    </div>
  );
}

export default App;
