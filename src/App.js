import logo from './logo.svg';
import './App.css';
import BarisAtas from './components/BarisAtas/BarisAtas'
import LogoBesar from './components/LogoBesar/LogoBesar'
import Nav from './components/Nav/Nav'
import Carousel from './components/Carousel/Carousel'
import FirstRow from './components/FirstRow/FirstRow'

function App() {
  return (
    <div className="App">
      <BarisAtas />
      <LogoBesar />
      <Nav />
      <Carousel />
      <FirstRow />
    </div>
  );
}

export default App;
