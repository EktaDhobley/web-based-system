import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Main from './components/main';
import PostUpload from './components/postUpload';


function App() {
  return (
    
    <div className="App">
      <header className='App-header'>
      <Router>
        <Routes>
          <Route exact path="/" element={<Main/>}/>
          <Route path="/postUpload" element={<PostUpload/>}/>
        </Routes>
      </Router> 
      </header>
    </div>
  );
}

export default App;
