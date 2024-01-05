import { Box, Button, Input, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar";

const Register = () => {
    const Navigate = useNavigate();
    const initUser = {
        avatar: "",
        name: "",
        email: "",
        password: "",
    };
    let newUser;
    const [user, setUser] = useState(initUser); 

    const handleChange = (e) => {
        newUser = {
          ...user,
          [e.target.name]: e.target.value,
        };
        console.log(newUser);
        setUser(newUser);
      };   

 const Register = (e)=>{
    e.preventDefault();

    try {
        if (JSON.stringify(user) === JSON.stringify(initUser)) {
          alert("Please fill the details");
        } else {
          // fetch("https://rich-lime-seagull-robe.cyclic.app/users/register", {
          //   method: "POST",
          //   body: user,
          // })
          //   .then((res) => {
          //     return res.json();
          //   })
          //   .then((data) => {
          //     console.log(data);
          //   });
          axios
            .post(
              "https://rich-lime-seagull-robe.cyclic.app/users/register",
              user
            )
            .then((res) => {
              alert(JSON.stringify(res.data));
              setUser(initUser);
            });
          Navigate("/login");
        }
      } catch (error) {
        console.log(error);
      }
 }
 return (<>
   <Navbar/>
    <Box
      w={"30%"}
      m={"auto"}
      mt={"70px"}
      p={"12"}
      pb="30px"
      bg={"#F5F5F5"}
      borderRadius={"20"}
    >
      <Stack spacing={5}>
        <Text
          textAlign={"center"}
          fontWeight={"bold"}
          mb={2}
          fontSize={"25"}
          color={"#0b3954"}
        >
          Register Yourself
        </Text>
        <Input
          variant="filled"
          placeholder="Avatar"
          type="text"
          name="avatar"
          _placeholder={{ color: "black" }}
          value={user.avatar}
          onChange={handleChange}
        />
        <Input
          variant="filled"
          placeholder="Name"
          type="text"
          name="name"
          _placeholder={{ color: "black" }}
          onChange={handleChange}
          value={user.name}
        />
        <Input
          variant="filled"
          placeholder="Email"
          type="email"
          _placeholder={{ color: "black" }}
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <Input
          variant="filled"
          placeholder="Password"
          type="password"
          name="password"
          _placeholder={{ color: "black" }}
          value={user.password}
          onChange={handleChange}
        />
        <Button
          // #0b3954
          bg={"orange.400"}
          m={"20px 5px"}
          color={"white"}
          _hover={{ bg: "#e89f22" }}
          onClick={Register}
        >
          Register
        </Button>
      </Stack>
      <Link style={{ textDecoration: "underline" }} to="/login">
        Login
      </Link>
    </Box>
 </> );
};

export default Register;