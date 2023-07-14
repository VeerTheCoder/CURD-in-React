import React, { useState } from "react";

const Curd = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone:"",
  });
  const [tableData, setTableData] = useState([]);
  const [editClick, setEditClick] = useState(false);
  const [editIndex, setEditIndex] = useState("");
  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("inputs", inputs);
    if (editClick) {
      const tempTableData = tableData;
      Object.assign(tempTableData[editIndex], inputs);
      setTableData([...tempTableData]);
      setEditClick(false);
      setInputs({
        name: "",
        email: "",
        phone:"",
      });
    } else {
      setTableData([...tableData, inputs]);
      setInputs({
        name: "",
        email: "",
        phone:"",
      });
    }
  };

  const handleDelete = (index) => {
    const filterData = tableData.filter((item, i) => i !== index);
    setTableData(filterData);
  };
  const handleEdit = (index) => {
    const tempData = tableData[index];

    setInputs({ name: tempData.name, email: tempData.email, phone: tempData.phone });
    setEditClick(true);
    setEditIndex(index);
  };
  return (
    <div className="main">
      <h1>CURD Application in ReactJS</h1>
       <div>
        <form onSubmit={handleSubmit}>
          <div className="inpt">
            <label>Name</label>
            <input name="name" placeholder="Enter name" required value={inputs.name} onChange={handleChange} />
            </div>

            <div className="inpt">
            <label>Email</label>
            <input name="email" placeholder="Enter Email" required value={inputs.email} onChange={handleChange} />
            </div>

            <div className="inpt">
            <label>Phone</label>
            <input name="phone" placeholder="Enter phone" required value={inputs.phone} onChange={handleChange} />
            </div>

            <div className="inpt">
          <button type="submit" className="w-full bg-[#014d64] text-white mt-3">
            {editClick ? "update" : "Add"}
          </button>
          </div>
        </form>
      </div>

      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone no.</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, i) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>
                  <button
                    onClick={() => handleEdit(i)}
                    className="btn1"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(i)}
                    className="btn2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Curd;