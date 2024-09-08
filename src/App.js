import './App.css';
import Accrodian from './components/accrodian';
import ImageSlider from './components/image-slider';
import LightDarkMode from './components/light-dark-mode';
import LoadMoreData from './components/load-more-data';
import QrCodeGenerator from './components/qr-code-generator';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import TreeNavigationView from './components/tree-navigation-view';
import menu from './components/tree-navigation-view/data';

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
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} limit={10} page={1} /> */}

      {/* Load more data component */}
      {/* <LoadMoreData limit={20} /> */}

      {/* Tree navigation view/ recurtion navigation /tree view component */}
      {/* <TreeNavigationView menu={menu} /> */}

      {/* Qr code generator component */}
      {/* <QrCodeGenerator /> */}

      {/* light and dark mode change component */}
      <LightDarkMode />
    </div>
  );
}

export default App;
