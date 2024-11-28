import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import FormLoginPage from "./pages/FormLoginPage";
import "./styles/style.css";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/login" element={<FormLoginPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
