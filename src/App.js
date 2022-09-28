import './App.css';
import Home from './Components/Home/Home';
import Navigation from './Components/Navigation/Navigation';
import QuestionAndAnswer from './Components/QuestionAndAnswer/QuestionAndAnswer';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Home></Home>
      <QuestionAndAnswer></QuestionAndAnswer>
    </div>
  );
}

export default App;
