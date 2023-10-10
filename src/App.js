import './App.css';
import Header from "./Header.js"
import Sidebar from './Sidebar.js';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Header />
      <div className="app__body">
        <Sidebar />
        {/* {SideBar} */}
        {/* {React-Router ->Chat Screen} */}

      </div>
    </div>
  );
}

export default App;
