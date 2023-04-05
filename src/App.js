import RoutePath from './routes/RoutesPath';
import './app.css';
import Mask from './components/Mask/Mask';
import NavBar from './components/NavBar/NavBar';

function App() {

  return (
    <>
      <Mask />
      <NavBar />
      <RoutePath />
    </>
  );
}

export default App;
