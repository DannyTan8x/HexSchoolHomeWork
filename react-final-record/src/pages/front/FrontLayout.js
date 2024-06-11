import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer";

export default function FrontLayout() {
  const navigate = useNavigate();
  const token = document.cookie
    .split(";")
    .find((row) => row.startsWith("hexToken="))
    ?.split("=")[1];
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (token) {
      setIsLogin(true);
      return navigate("/");
    }
    (async () => {
      //判斷是非Admin
      try {
        await axios.post("/v2/api/user/check");
      } catch (error) {
        if (!error.response.data.success) {
          setIsLogin(false);
          return navigate("/");
        }
      }
    })();
  }, []);
  return (
    <>
      <Navbar isLogin={isLogin} />
      <Outlet></Outlet>
      <Footer />
    </>
  );
}
