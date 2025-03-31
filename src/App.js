import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import ProjectPage from './components/ProjectPage';
import './App.css';

function App() {
  return (
    <Router basename="/august-site">  {/* Update with your actual repo name */}
      <div className="App">
        {/* Header remains static across all pages */}
        <header className="navbar">
          <h1 className="logo">August Oppeau</h1>
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </header>

        {/* Routes section */}
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
