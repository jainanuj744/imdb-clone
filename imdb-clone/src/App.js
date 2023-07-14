import './App.css';
import Banner from './Components/Banner';
import Header from './Components/Header';
import Movies from './Components/Movies';
import WishList from './Components/WishList';

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">IMDB</h1>
      <Header/>
      <Banner/>
      <Movies/>
      <WishList/>
    </div>
  );
}

export default App;
