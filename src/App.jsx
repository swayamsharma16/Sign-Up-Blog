import React from "react";
import Signup from "./components/Signup.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import Login from "./components/Login.jsx";

export default function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route ea path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}
