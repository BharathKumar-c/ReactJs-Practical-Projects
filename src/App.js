import './App.css';
import Accrodian from './components/accrodian';
import ImageSlider from './components/image-slider';
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
      {/* <StarRating noOfStars={10} /> */}

      {/* image slider component */}
      <ImageSlider url={'https://picsum.photos/v2/list'} limit={10} page={1} />
    </div>
  );
}

export default App;
