import './App.css';
import Accrodian from './components/accrodian';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';

function App() {
  return (
    <div className="App">
      {/* Accrodian component */}
      {/* <Accrodian /> */}

      {/* Random color component */}
      {/* <RandomColor /> */}

      {/* Star Ratings */}
      <StarRating noOfStars={10} />
    </div>
  );
}

export default App;
