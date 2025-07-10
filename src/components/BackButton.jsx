import React from "react";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)} // Go back one step
      className="mb-4 px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300"
    >
      ← Back
    </button>
  );
}

export default BackButton;
