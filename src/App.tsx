import { Routes, BrowserRouter, Route, Navigate } from "react-router-dom";
import {useContext } from "react";
import "./App.css";
import Index from "./pages/index";
import AdminLogIn from "./pages/AdminLogin";
import CoursesTablePage from "./pages/CoursesTablePage";
import Layout from "./componenets/admin/Layout/Index";
import { AuthContext } from "./context/authContext";
import AdminAddCoursePage from "./pages/AdminAddCoursePage";

function App() {
  const {isLoggedIn}= useContext(AuthContext)
  const protectedElement = (component: any) => {
    console.log(isLoggedIn);

    if (!isLoggedIn) return <Navigate to="/adminLogin" replace />;
    return component;
  };
  const ifLoggedIn = (component: any) => {
    console.log("2");
    console.log("isloggedin=", isLoggedIn);
    if (isLoggedIn) return <Navigate to="/admin/courses" replace />;
    return component;
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/adminLogin" element={ifLoggedIn(<AdminLogIn />)} />
          <Route path="/admin"  element={protectedElement(<Layout />)}>
          <Route path="courses" element={<CoursesTablePage />} />
          <Route path="add-course" element={<AdminAddCoursePage />} />
          <Route path="update-course/:id/:display" element={<AdminAddCoursePage />} />
          <Route path="view-course/:id/:display" element={<AdminAddCoursePage />} />
        </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
