import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const SubsWatched = ({ movie }) => {
  const [subsWhoWatched, setSubsWhoWatched] = useState([]);
  const [subs, setSubs] = useState([]);
  const [members, setMembers] = useState([]);

  const loadMembersAndSubs = async () => {
    const subs = await axios.get("http://localhost:3000/subs");
    const members = await axios.get("http://localhost:3000/members");
    setSubs(subs.data);
    setMembers(members.data);
  };

  useEffect(() => {
    loadMembersAndSubs();
  }, []);

  useEffect(() => {
    const relevantSubs = subs.filter((sub) => sub.movieID === movie._id);
    const watchedMembers = members
      .filter((member) => relevantSubs.some((sub) => sub.MemberID === member._id))
      .map((member) => ({
        ...member,
        watchDate: relevantSubs.find((sub) => sub.MemberID === member._id).date,
      }));
      console.log(subsWhoWatched)
    setSubsWhoWatched(watchedMembers);
  }, [subs, members, movie._id]);

  return (
    <div style={{ borderStyle: "groove", width: "60%", borderColor: "gray" }}>
      SubsWatched
      <ul>
        {subsWhoWatched.map((item) => {
          return (
            <li key={item._id}>
              {" "}
              <Link to={`/AddEditMember/${item._id}`}>{item.name}</Link> , {item.watchDate}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SubsWatched;
