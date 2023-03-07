import { Router } from '@reach/router';
import { LocationProvider } from '@reach/router';
import './App.css';
import Home from './components/home';

function App() {
  return (
    <LocationProvider>
      <Router>
        <Home path='/' />
      </Router>
    </LocationProvider>
  );
}

export default App;
