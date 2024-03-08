import React, { useEffect, useState } from "react";
import "../styles/Home.css";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dataNotFound, setDataNotFound] = useState(false);
  const [data, setData] = useState([
    { id: 1, name: "Budi Santoso", age: 30 },
    { id: 2, name: "Ani Lestari", age: 25 },
    { id: 3, name: "Candra Gunawan", age: 35 },
    { id: 4, name: "Dian Pratiwi", age: 28 },
    { id: 5, name: "Eko Supriyanto", age: 40 },
    { id: 6, name: "Fitriana Dewi", age: 22 },
    { id: 7, name: "Galih Pratama", age: 32 },
    { id: 8, name: "Hendra Saputra", age: 29 },
    { id: 9, name: "Ira Puspita", age: 38 },
    { id: 10, name: "Joko Widodo", age: 61 },
    { id: 11, name: "Kirana Wati", age: 24 },
    { id: 12, name: "Lintang Kirana", age: 33 },
    { id: 13, name: "Maman Suherman", age: 45 },
    { id: 14, name: "Nina Agustina", age: 27 },
    { id: 15, name: "Oki Dwi Saputra", age: 36 },
    { id: 16, name: "Putri Andini", age: 21 },
    { id: 17, name: "Rian Saputra", age: 31 },
    { id: 18, name: "Siska Amelia", age: 26 },
    { id: 19, name: "Taufik Hidayat", age: 34 },
    { id: 20, name: "Utami Dewi", age: 42 },
  ]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    // Implement actual delete logic here (e.g., using a confirmation prompt)
    console.log("Delete item with ID:", id);
  };

  useEffect(() => {
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    if (filteredData.length === 0) {
      setDataNotFound(true);
    } else {
      setDataNotFound(false);
    }
  }, [searchTerm, data]);

  return (
    <div className="home-container">
      <h2>Data Management</h2> {/* More descriptive heading */}
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
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>
                  <button className="view-button">View</button>
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
