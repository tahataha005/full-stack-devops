import "./ui/styles/colors.css";
import "./ui/styles/App.css";
import "./ui/styles/index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./ui/pages/Auth";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
