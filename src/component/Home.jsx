import React, { useState } from "react";
import "../styles/Home.css";
import dataJson from "../utils/data.json";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = dataJson.filter((item) =>
    item.nama.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    console.log("Delete item with ID:", id);
  };

  const navigateToForm = (id) => {
    navigate(`/form/${id}`);
  };

  const navigateToDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="home-container">
      <h2>Data Management</h2>
      <button className="add-button" onClick={() => navigate(`/add`)}>Add New</button>{" "}
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {filteredData.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nama}</td>
                <td>{item.umur}</td>
                <td>
                  <button
                    className="view-button"
                    onClick={() => navigateToDetail(item.id)}
                  >
                    View
                  </button>
                  <button
                    className="edit-button"
                    onClick={() => navigateToForm(item.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-not-found">Data Not Found</p>
      )}
    </div>
  );
};

export default Home;
