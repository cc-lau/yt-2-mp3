import './App.css';
import DownloadsList from './Components/DownloadsList/DownloadsList';
import ExampleDescription from './Components/ExampleDescription/ExampleDescription';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Search from './Components/Search/Search';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <DownloadsList />
      <ExampleDescription />
      <Footer />
    </div>
  );
}

export default App;
