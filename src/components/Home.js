import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/userAuthContext";

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

import "../App.css"
import { useEffect, useState } from "react";
import { collection, deleteDoc, doc, onSnapshot, query } from "firebase/firestore";
import { fireStore } from "../auth/Firebase";
import { FaCircle, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
const Home = () => {
  const {user } = useUserAuth();
  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);


  if (!user) {
    navigate("/login");
  }

 
  return (
    <>
    <Navbar />
      
    </>
  );
};

export default Home;