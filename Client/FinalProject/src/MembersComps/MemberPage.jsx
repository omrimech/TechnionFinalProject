import React from "react";
import MoviesWatched from "./MoviesWatched";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MemberPage = ({ member, loadAllMembersFunc }) => {
  const navigate = useNavigate();

  const deleteMember = async () => {
    if (member._id) {
      const { data } = await axios.delete(`http://localhost:3000/members/${member._id}`);
      alert(data);
      loadAllMembersFunc();
    }
  };

  return (
    <div className="member-container">
      <h3>{member.name}</h3>
      <label> Email : {member.email}</label>
      <label>City : {member.city}</label>
      <div className="buttonsAddEditMember">
        <button onClick={() => navigate(`/AddEditMember/${member._id}`)}>Edit</button> <button onClick={deleteMember}>Delete</button>
        <br /> <br />
        <MoviesWatched key={member._id} member={member} />
      </div>
    </div>
  );
};

export default MemberPage;
