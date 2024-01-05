import React from "react";
import { Box, Image, HStack, Button, Text, Link } from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
// import { auth } from "./pages/login";
import axios from "axios";

const Navbar = () => {
  // console.log(auth);

  let token = localStorage.getItem("token");
  const Logout = async () => {
    console.log("inside logout");
    try {
      await axios
        .get("https://rich-lime-seagull-robe.cyclic.app/users/logout", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          alert(JSON.stringify(res?.data?.msg));
          localStorage.clear();
        });
    } catch (err) {
      console.log(err);
    }
  };
  const Navigate = useNavigate();
  const linkStyle = {
    "font-family": "Poppins",
    fontSize: 18,
    textDecoration: "none",
    color: "#004D40",
    "font-weight": "500",
  };
  const activeLink = {
    "font-family": "Poppins",
    fontSize: 18,
    color: "tomato",
    "font-weight": " 500",
  };
  const fontStyle = {
    "font-family": "Poppins",
    "font-weight": " 500",
    fontSize: 18,
  };
  return (
    <Box
      // pos="relative"
      // position={"-webkit-sticky"}
      position="sticky"
      top={"0"}
      backgroundColor="white"
      h={"70px"}
      display="flex"
      justifyContent="space-around"
      p={15}
      zIndex={999}
      boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px"
    >

      <HStack direction="row" spacing={40} align="center">
        <NavLink
          style={({ isActive }) => (isActive ? activeLink : linkStyle)}
          to="/"
        >
          Home
        </NavLink>

        <NavLink
          style={({ isActive }) => (isActive ? activeLink : linkStyle)}
          to="/login"
        >
          Login
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeLink : linkStyle)}
          to="/register"
        >
         Register
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeLink : linkStyle)}
          to="/dashboard"
        >
         Admin
        </NavLink>
      </HStack>
    </Box>
  );
};

export default Navbar;