import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [loginState, setLoginState] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const submit = async (e) => {
    try {
      const res = await axios.post(`/v2/admin/signin`, data);
      const { token, expired } = res.data;
      document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;
      if (res.data.success) {
        // navigate("/admin/products");
        navigate(-1); //回前一頁
      }
    } catch (error) {
      setLoginState(error.response.data);
      console.log(error.response.data);
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2>登入帳號</h2>
          <div
            className={`alert alert-danger ${
              loginState?.message ? "d-block" : "d-none"
            }`}
            role="alert"
          >
            {loginState?.error?.message}
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="form-lable w-100">
              Email
              <input
                id="email"
                className="form-control"
                name="username"
                type="email"
                placeholder="Email Address"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="form-lable w-100">
              密碼
              <input
                id="password"
                className="form-control"
                name="password"
                type="password"
                placeholder="*******"
                onChange={handleChange}
              />
            </label>
          </div>
          <button type="button" className="btn btn-primary" onClick={submit}>
            登入
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
