import React from "react";
import { useParams } from "react-router-dom";
import dataJson from "../utils/data.json";

const Form = () => {
  const { id } = useParams();
  const item = dataJson.find((item) => item.id === parseInt(id));
  return (
    <div className="home-container">
      <h2>Form {id}</h2>
      <p>Nama: {item.nama}</p>
      <p>NIP: {item.nip}</p>
      <p>Tempat Lahir: {item.tempat_lahir}</p>
    </div>
  );
};

export default Form;
