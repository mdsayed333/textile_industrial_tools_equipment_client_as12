import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import HeaderNav from "./Pages/Shared/HeaderNav/HeaderNav";
import Purchase from "./Pages/Home/Tools/Purchase";
import RequireAuth from "./Pages/Login/RequireAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyProfile from "./Pages/Dashboard/MyProfile/MyProfile";
import MyOrder from "./Pages/Dashboard/MyOrder/MyOrder";
import AddReview from "./Pages/Dashboard/AddReview/AddReview";
import Footer from "./Pages/Shared/Footer/Footer";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import ManageProducts from "./Pages/Dashboard/ManageProducts/ManageProducts";
import ManageAllOrders from "./Pages/Dashboard/ManageAllOrders/ManageAllOrders";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";
import AddProduct from "./Pages/Dashboard/AddProduct/AddProduct";
import Blog from "./Pages/Blog/Blog";

function App() {
  return (
    <div className="max-w-screen-xl mx-auto mx-10 my-2">
      <HeaderNav></HeaderNav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="portfolio" element={<MyPortfolio></MyPortfolio>}></Route>
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="myOrder" element={<MyOrder></MyOrder>}></Route>
          <Route path="addReview" element={<AddReview></AddReview>}></Route>

          <Route
            path="addProduct"
            element={
              <RequireAdmin>
                <AddProduct></AddProduct>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="makeAdmin"
            element={
              <RequireAdmin>
                <MakeAdmin></MakeAdmin>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageProduct"
            element={
              <RequireAdmin>
                <ManageProducts></ManageProducts>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageOrder"
            element={
              <RequireAdmin>
                <ManageAllOrders></ManageAllOrders>
              </RequireAdmin>
            }
          ></Route>
        </Route>

        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
