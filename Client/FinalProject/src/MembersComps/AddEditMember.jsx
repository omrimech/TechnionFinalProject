import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const AddEditMember = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [memberObj, setMemberObj] = useState({
    name: "",
    email: "",
    city: "",
  });
  const [name, setName] = useState("");

  const loadMember = async () => {
    if (!id) return;
    const { data } = await axios.get(`http://localhost:3000/members/${id}`);
    setMemberObj(data);
    setName(data.name);
  };
  useEffect(() => {
    loadMember();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      const putMember = await axios.put(`http://localhost:3000/members/${id}`, memberObj);
      alert(putMember.data);
    } else {
      const addMember = await axios.post(`http://localhost:3000/members`, memberObj);
      alert(addMember.data);
    }
    navigate("/MembersPage");
  };

  return (
    <div className="addEditMember">
      <h2>{id ? `Edit Member : ${name}` : `Add Member`}</h2>
      <div className="fromAddEditMember">
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <label>Name : </label>
              <input type="text" onChange={(e) => setMemberObj({ ...memberObj, name: e.target.value })} value={memberObj.name} required />
            </div>
            <div>
              <label>Email : </label>
              <input type="text" onChange={(e) => setMemberObj({ ...memberObj, email: e.target.value })} value={memberObj.email} required />
            </div>
            <div>
              <label>City : </label>
              <input type="text" onChange={(e) => setMemberObj({ ...memberObj, city: e.target.value })} value={memberObj.city} required/>
            </div>
            <br /> <br />
            <div className="buttonsAddEditMember">
              <button type="submit">Save</button>
              <button type="button" onClick={() => navigate("/MembersPage")}>
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEditMember;
