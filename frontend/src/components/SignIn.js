import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SignIn = ({
  users,
  btnDisabled,
  setBtnDisabled,
  setSignedInUser,
  setUserFriend,
  setTheUser,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [errMessage, setErrMessage] = useState(false);
  const navigate = useNavigate();

  const onChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    for (let i = 0; i < users.length; i++) {
      if (
        users[i].name.toLowerCase().includes(searchValue.toLowerCase()) &&
        searchValue
      ) {
        setBtnDisabled(!btnDisabled);
        setSignedInUser(users[i].name);
        setUserFriend(users[i].friends);
        setTheUser(users[i]._id);
        navigate("/");
      } else {
        setErrMessage(`${searchValue} does not exist`);
      }
    }
  };

  return (
    <Container>
      <form>
        <p>Enter your Username</p>
        <UsernameInput
          placeholder="username"
          type="text"
          onChange={onChange}
        ></UsernameInput>
        <EnterBtn onClick={handleClick}>Sign In</EnterBtn>
        {errMessage ? <ErrMsg>* {errMessage}</ErrMsg> : ""}
      </form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  flex-direction: column;
`;

const ErrMsg = styled.p`
  font-size: 14px;
  color: red;
  padding-top: 5px;
`;

const UsernameInput = styled.input`
  border: 2px solid #b9dcd1;
  padding: 10px;
  margin-top: 10px;
  width: 300px;
  font-family: "Quicksand", sans-serif;
  border-radius: 5px 0px 0px 5px;
`;

const EnterBtn = styled.button`
  border: 2px solid #b9dcd1;
  padding: 10px;
  margin-top: 10px;
  cursor: pointer;
  background-color: #b9dcd1;
  color: #cc5500;
  font-family: "Quicksand", sans-serif;
  border-radius: 0px 5px 5px 0px;
  font-weight: 500;
  transition: all ease 400ms;
  &:hover {
    background-color: #cc5500;
    color: #b9dcd1;
    border: 2px solid #cc5500;
  }
`;

export default SignIn;
