import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Locations from "./pages/Locations.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap/dist/css/bootstrap.min.css";
import ThankYouPage from "./pages/ThankYouPage.jsx";
import LocationDetails from "./pages/LocationDetails.jsx";

const isAuthenticated = () => {
  return !!localStorage.getItem("access-token");
};
const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" replace />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/locations",
    element: <Locations />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/thankyoupage",
    element: <ThankYouPage />,
  },
  {
    path: "/locations",
    element: <Locations />,
  },
  {
    path: "locations/:locationId" /* locationId will act as the sub page that will show info for that specifc location based on the id the location is given */,
    element: <LocationDetails />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
