import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import FormLoginPage from "./pages/FormLoginPage";
import "./styles/style.css";
import DetailPage from "./pages/DetailPage";
import FormRegisterPage from "./pages/FormRegisterPage";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/login" element={<FormLoginPage />} />
          <Route path="/register" element={<FormRegisterPage />} />
          <Route path="/jual" element={<PostPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
