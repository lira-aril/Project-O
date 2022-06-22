import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Home, Gallery, AboutMe } from './pages';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/about-me" element={<AboutMe />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
