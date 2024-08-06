import React, { useState } from "react";
import ratingList from "../image_list";

function Rating() {
  const [ratingValue, setRatingValue] = useState(0);

  function oneChange() {
    setRatingValue((prevValue) => (prevValue + 1) % ratingList.length);
  }
  const headings = [
    "unsatisfactory",
    "poor",
    "satisfactory",
    "good",
    "excellent",
  ];

  return (
    <div style={{  margin: "20px", display:"flex",justifyContent:"center" ,alignItems:"center", flexDirection:"column", gap:"15px"}}>
      <h1 style={{textTransform:"uppercase"}}>{headings[ratingValue]}</h1>
      <p>Carrent rating : {ratingValue + 1}</p>

      <img
        src={ratingList[ratingValue]}
        alt={`Rating ${ratingValue + 1}`}
        style={{ width: "100px", height: "100px", marginBottom: "20px" }}
      />
      <div>
        <button
          onClick={oneChange}
          style={{
            margin: "5px",
            padding: "10px",
            backgroundColor: "#f44336",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Change Rating
        </button>
      </div>
    </div>
  );
}

export default Rating;
