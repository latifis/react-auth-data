import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import dataJson from "../utils/data.json";
import "../styles/Detail.css";

const Detail = () => {
  const { id } = useParams();
  const item = dataJson.find((item) => item.id === parseInt(id));
  
  const navigate = useNavigate();
  
  const navigateToDetail = (id) => {
    navigate(`/`);
  };

  return (
    <div className="detail-container">
      <div className="header">
        <h2>
          Detail Pegawai<h1>{item.nama}</h1>
        </h2>
      </div>
      <div className="content">
        <div className="info-block">
          <h3>Informasi Dasar</h3>
          <ul>
            <li>Tempat Lahir: {item.tempat_lahir}</li>
            <li>Tanggal Lahir: {item.tanggal_lahir}</li>
            <li>Umur: {item.umur}</li>
            <li>Jenis Kelamin: {item.jenis_kelamin}</li>
          </ul>
        </div>
        <div className="info-block">
          <h3>Kontak</h3>
          <ul>
            <li>Alamat: {item.alamat}</li>
            <li>No Handphone: {item.no_handphone}</li>
            <li>Email: {item.email}</li>
          </ul>
        </div>
      </div>
      <button type="button" className="back-button" onClick={() => navigateToDetail(item.id)}>
        back
      </button>
    </div>
  );
};

export default Detail;
