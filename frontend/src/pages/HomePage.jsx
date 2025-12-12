import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import RateLimitedUI from "../components/RateLimitedUI";
import axios from "axios";

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(true);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get("https://localhost:5040/api/notes");
        console.log(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchNotes()
  });
  return (
    <div className="min-h-screen">
      {<Navbar />}
      {isRateLimited && <RateLimitedUI />}
    </div>
  );
};

export default HomePage;
