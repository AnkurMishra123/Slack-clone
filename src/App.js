import './App.css';
import Header from "./Header.js"
import Sidebar from './Sidebar.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chat from './Chat.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="app__body">
          <Sidebar />
          {/* {React-Router ->Chat Screen} */}
          <Routes>
            <Route path='/room/:roomId' element={<Chat />} />
            {/* <Chat /> */}
            {/* </Route> */}

            <Route path='/' element="Home screen" />

            {/* </Route> */}
            {/* <Chat /> */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
