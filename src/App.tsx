import { Routes, BrowserRouter, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import "./App.css";
import Index from "./pages/index";
import AdminLogIn from "./pages/AdminLogin";
import CoursesTablePage from "./pages/CoursesTablePage";
import Layout from "./componenets/admin/Layout/Index";
import { AuthContext } from "./context/authContext";
import AdminAddCoursePage from "./pages/AdminAddCoursePage";
import AdminTrendingPage from "./pages/AdminTrendingPage";
import CourseDetails from "./pages/CourseDetails";
import AllCoursesPage from "./pages/AllCoursesPage";
import AdminTrendingTable from "./pages/AdminTrendingTable";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import RefundPolicyPage from "./pages/RefundPolicyPage";

function App() {
  const { isLoggedIn } = useContext(AuthContext);
  const protectedElement = (component: any) => {
    if (!isLoggedIn) return <Navigate to="/adminLogin" replace />;
    return component;
  };
  const ifLoggedIn = (component: any) => {
    if (isLoggedIn) return <Navigate to="/admin/courses" replace />;
    return component;
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/courses" element={<AllCoursesPage />} />
          <Route path="/course-details/:id" element={<CourseDetails />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditionsPage/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage/>} />
          <Route path="/refund-policy" element={<RefundPolicyPage/>} />
          <Route path="/adminLogin" element={ifLoggedIn(<AdminLogIn />)} />
          <Route path="/admin" element={protectedElement(<Layout />)}>
            <Route path="courses" element={<CoursesTablePage />} />
            <Route path="add-course" element={<AdminAddCoursePage />} />
            <Route
              path="update-course/:id/:display"
              element={<AdminAddCoursePage />}
            />
            <Route
              path="view-course/:id/:display"
              element={<AdminAddCoursePage />}
            />
            <Route path="trending" element={<AdminTrendingTable />} />
            <Route path="setTrending" element={<AdminTrendingPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
