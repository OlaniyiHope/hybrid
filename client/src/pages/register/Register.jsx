import "./register.scss";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [info, setInfo] = useState({});

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "upload");
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dftygokow/image/upload",
        data
      );

      const { url } = uploadRes.data;

      const newUser = {
        ...info,
        img: url,
      };

      await axios.post(
        "https://hybridapi-49ea07306725.herokuapp.com/api/auth/register",
        newUser
      );
      navigate("/login");
    } catch (err) {}
  };

  return (
    <div className="new">
      <div className="newContainer">
        <div className="top">
          <h1 style={{ color: "#000" }}>Become a member of Hybrid Homes</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">Click here to add Image</label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              <input
                type="text"
                placeholder="username"
                id="username"
                onChange={handleChange}
                className="lInput"
              />

              <input
                type="email"
                placeholder="Email"
                id="email"
                onChange={handleChange}
                className="lInput"
              />

              <input
                type="text"
                placeholder="Country"
                id="country"
                onChange={handleChange}
                className="lInput"
              />

              <input
                type="text"
                placeholder="City"
                id="city"
                onChange={handleChange}
                className="lInput"
              />

              <input
                type="text"
                placeholder="Phone Number"
                id="phone"
                onChange={handleChange}
                className="lInput"
              />

              <input
                type="password"
                placeholder="Password"
                id="password"
                onChange={handleChange}
                className="lInput"
              />
              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
