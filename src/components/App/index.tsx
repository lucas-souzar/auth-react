import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { GlobalStyles } from "../../assets/styles/global";
import { AuthProvider } from "../../context/AuthProvider";
import { Home } from "../../pages/Home";
import { Login } from "../Login";
import { ProtectedLayout } from "../ProtectedLayout";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <GlobalStyles />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>

            <Route
              path="/profile"
              element={
                <ProtectedLayout>
                  <h2>Olá esse é componente Profile</h2>
                </ProtectedLayout>
              }
            ></Route>

            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
