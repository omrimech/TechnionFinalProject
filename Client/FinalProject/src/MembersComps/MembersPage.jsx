import MemberPage from "./MemberPage";
import "./Members.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const MembersPage = () => {
  const [members, setMembers] = useState([]);
  const loadAllMembers = async () => {
    const { data } = await axios.get("http://localhost:3000/members");
    setMembers(data);
  };

  useEffect(() => {
    loadAllMembers();
  }, []);

  const navigate = useNavigate();

  return (
    <div className="membersPage">
      <h2>Subscriptions</h2>
      <br /> <br />
      <button onClick={() => navigate("/MembersPage")}>All Members</button>
      <button onClick={() => navigate("/AddEditMember")}>Add Member</button>
      <br /> <br />
      {members.map((item) => {
        return <MemberPage key={item._id} member={item} loadAllMembersFunc={loadAllMembers} />;
      })}
    </div>
  );
};

export default MembersPage;
