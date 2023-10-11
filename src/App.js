import './App.css';
import Header from "./Header.js"
import Sidebar from './Sidebar.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="app__body">
          <Sidebar />
          {/* {React-Router ->Chat Screen} */}
          <Routes>
            <Route path='/room/:roomId' element="<h1>Hello second Screen</h1>"/>
              {/* <Chat /> */}
          </Routes>
          <Routes>
            <Route path='/' element="Home screen"/>
              {/* <Chat /> */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
