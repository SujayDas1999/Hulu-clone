import React, { useState, useEffect } from "react";
import "./Results.css";
import axios from "./axios";
import VideoCard from "./VideoCard";
import FlipMove from "react-flip-move";

function Results({ selectedOption }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(selectedOption);
      setMovies(result.data.results);
      return result;
    }

    fetchData();
  }, [selectedOption]);

  return (
    <div className="results">
      <FlipMove>
        {movies.map((movie, i) => (
          <VideoCard key={i} movie={movie} />
        ))}
      </FlipMove>
    </div>
  );
}

export default Results;
