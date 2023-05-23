import "./App.css";
import { useState } from "react";
import About from "./components/About";
import AddNote from "./components/AddNote";
import Notes from "./components/Notes";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import Page404 from "./components/Page404";
import Home from "./components/Home";
function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          {alert?<Alert alert={alert} />:""}

          <div className="">
            <Routes>
              <Route path="/" element={<AddNote showAlert={showAlert} />} />
              <Route path="/notes" element={<Notes showAlert={showAlert} />} />
              <Route path="/about" element={<About showAlert={showAlert} />} />
              <Route path="/login" element={<Login showAlert={showAlert} />} />
              <Route path="/home" element={<Home showAlert={showAlert} />} />
              <Route
                path="/signup"
                element={<SignUp showAlert={showAlert} />}
              />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
