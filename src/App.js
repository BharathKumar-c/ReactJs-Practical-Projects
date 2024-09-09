import './App.css';
import Accrodian from './components/accrodian';
import CustomTabView from './components/custom-tab-view';
import ImageSlider from './components/image-slider';
import LightDarkMode from './components/light-dark-mode';
import LoadMoreData from './components/load-more-data';
import QrCodeGenerator from './components/qr-code-generator';
import RandomColor from './components/random-color';
import ScrollIndicator from './components/scroll-indicator';
import StarRating from './components/star-rating';
import TreeNavigationView from './components/tree-navigation-view';
import menu from './components/tree-navigation-view/data';
import {tabs} from './components/custom-tab-view/data';
import CustomModalTest from './components/custom-modal';
import GithubProfileFinder from './components/github-profile-finder';
import SearchAutocomplete from './components/search-autocomplete';

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
      {/* <LightDarkMode /> */}

      {/* scroll indicator component */}
      {/* <ScrollIndicator url="https://dummyjson.com/products?limit=100" /> */}

      {/* custom tab view component */}
      {/* <CustomTabView tabContent={tabs} /> */}

      {/* custom modal component */}
      {/* <CustomModalTest /> */}

      {/* Github profile finder by userName */}
      {/* <GithubProfileFinder /> */}

      {/* Search autocomplete component */}
      <SearchAutocomplete />
    </div>
  );
}

export default App;
