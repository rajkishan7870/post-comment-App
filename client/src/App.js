import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './pages/home/Home';
import Feed from './pages/feeds/Feed';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/feed' element={<Feed/>} />
      </Routes>
      
    </div>
  );
}

export default App;
