import {Header, Footer, FiveGSpectraPage} from './components';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <div className='pages'>
        <FiveGSpectraPage/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
