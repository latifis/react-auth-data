import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dataJson from "../utils/data.json";
import "../styles/Form.css";

const Form = () => {
  const { id } = useParams();
  const item = dataJson.find((item) => item.id === parseInt(id));

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nama: item.nama,
    tempat_lahir: item.tempat_lahir,
    tanggal_lahir: item.tanggal_lahir,
    umur: item.umur,
    jenis_kelamin: item.jenis_kelamin,
    alamat: item.alamat,
    no_handphone: item.no_handphone,
    email: item.email,
  });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert("Data berhasil diubah!");
  // };

  const navigateToDetail = (id) => {
    navigate(`/`);
  };

  return (
    <div className="home-container">
      <div className="header">
        <h2>
          Edit Data<h1>{item.nama}</h1>
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
              value={value}
              onChange={(e) => {
                if (key !== "umur") {
                  setFormData({ ...formData, [key]: e.target.value });
                }
              }}
            />
          </div>
        ))}
        <button type="submit" onClick={() => navigateToDetail({ id })}>
          Simpan
        </button>
      </form>
    </div>
  );
};

export default Form;
