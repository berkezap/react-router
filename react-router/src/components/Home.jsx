import React from "react";
import { useNavigate } from "react-router-dom";

export default function () {
  const navigate = useNavigate();
  return (
    <>
      <div>Home</div>
      <button onClick={() => navigate("/mission")}>Mission'a git</button>
    </>
  );
}
