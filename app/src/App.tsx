import "./styles/App.css";
import "./styles/index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./ui/pages/Auth";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
