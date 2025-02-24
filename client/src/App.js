
import './App.css';

import { BrowserRouter , Routes, Route } from 'react-router-dom';
import WebsiteStructure from './pages/mainpage/main.tsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes >
          <Route path="/" element={< WebsiteStructure/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
