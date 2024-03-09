import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import dataJson from "../utils/data.json";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dataNotFound, setDataNotFound] = useState(false);
  const [data, setData] = useState(dataJson);

  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = data.filter((item) =>
    item.nama.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    // Implement actual delete logic here (e.g., using a confirmation prompt)
    console.log("Delete item with ID:", id);
  };

  const navigateToForm = (id) => {
    navigate(`/form/${id}`);
  };

  useEffect(() => {
    const filteredData = data.filter((item) =>
      item.nama.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filteredData.length === 0) {
      setDataNotFound(true);
    } else {
      setDataNotFound(false);
    }
  }, [searchTerm, data]);

  return (
    <div className="home-container">
      <h2>Data Management</h2>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearchChange}
      />
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
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nama}</td>
                <td>{item.umur}</td>
                <td>
                  <button
                    className="view-button"
                    onClick={() => navigateToForm(item.id)}
                  >
                    View
                  </button>
                  <button className="edit-button">Edit</button>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                <p>Data Not Found</p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <button className="add-button">Add New</button>{" "}
      {/* New button to add data */}
    </div>
  );
};

export default Home;
