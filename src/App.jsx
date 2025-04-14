import HomePage from "./pages/components/HomePage";
import LoginPage from "./pages/components/LoginPage";
import SignupPage from "./pages/components/SignupPage";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {

  return (
    // BrowserRouter as Router
    <Router>
      <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />}/>
          <Route path="/home" element={<HomePage/>}/>
      </Routes>
    </Router>
  )
}

export default App
