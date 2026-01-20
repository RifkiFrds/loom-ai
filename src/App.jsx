import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import RecommendationPage from "./pages/RecommendationPage";
import AppLayout from "./components/layout";

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout Route */}
        <Route element={<AppLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/recommendations" element={<RecommendationPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
