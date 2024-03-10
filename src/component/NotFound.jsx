import React from "react";
import { Link } from "react-router-dom";
import "../styles/NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>Wah, tersesat ya?</h1>
      <p>
        Halaman yang kamu cari tidak ditemukan. Mungkin teleportasinya gagal.
      </p>
      <Link to="/" className="back-button">
        Kembali ke Beranda
      </Link>
    </div>
  );
};

export default NotFound;
