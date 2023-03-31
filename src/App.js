import "./App.css";
import DownloadsList from "./Components/DownloadsList/DownloadsList";
import ExampleDescription from "./Components/ExampleDescription/ExampleDescription";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Search from "./Components/Search/Search";
import { VideoProvider } from "./VideoContext";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <VideoProvider>
          <Search />
          <DownloadsList />
        </VideoProvider>
        <ExampleDescription />
      </div>
      <Footer />
    </div>
  );
}

export default App;
