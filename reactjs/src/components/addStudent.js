import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AuthUser from "./AuthUser";

function AddStudent() {
  const location = useLocation();

  console.log(location.state)

  return (
    <>
      hello admin, please add stuend in it
    </>
  );
}

export default AddStudent;
