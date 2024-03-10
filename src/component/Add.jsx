import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dataJson from "../utils/data.json";
import "../styles/Form.css";

const Add = () => {
  const navigate = useNavigate();
  const [tanggalLahirInput, setTanggalLahirInput] = useState("");

  const [formData, setFormData] = useState({
    nama: "",
    tempat_lahir: "",
    tanggal_lahir: "",
    umur: "",
    jenis_kelamin: "",
    alamat: "",
    no_handphone: "",
    email: "",
  });

  return (
    <div className="home-container">
      <div className="header">
        <h2>
          Add Data
        </h2>
      </div>
      <form>
        {/* onSubmit={handleSubmit} */}
        {Object.entries(formData).map(([key, value]) => (
          <div className="form-group" key={key}>
            <label htmlFor={key}>{key}</label>
            <input
              type="text"
              id={key}
              name={key}
              value={key !== "umur" ? formData[key] : key === "tanggal_lahir" ? tanggalLahirInput : ""} 
              onChange={(e) => {
                if (key !== "umur") {
                  setFormData({ ...formData, [key]: e.target.value });
                } else if (key === "tanggal_lahir") {
                  setTanggalLahirInput(e.target.value);
                }
              }}
            />
          </div>
        ))}
        <button type="submit" onClick={() => navigate('/home')}>
          Simpan
        </button>
      </form>
    </div>
  );
};

export default Add;
