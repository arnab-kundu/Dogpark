import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Header = ({
  btnDisabled,
  setBtnDisabled,
  signedInUser,
  setSignedInUser,
}) => {
  const signOutHandler = () => {
    let newSignedInArray = [...signedInUser];
    newSignedInArray.splice(0);
    setSignedInUser(newSignedInArray);
    setBtnDisabled(!btnDisabled);
  };

  return (
    <WholeContainer>
      <div>
        <NavLink to={"/"}>
          <SiteTitle>Dogpark</SiteTitle>
        </NavLink>
      </div>
      <div>
        {btnDisabled ? (
          <div>
            <Greeting>Hello {signedInUser} 🐶</Greeting>{" "}
            <SignOut to={"/sign-in"} onClick={signOutHandler}>
              Sign Out
            </SignOut>
          </div>
        ) : (
          <SignInBtn to={"/sign-in"}>Sign In</SignInBtn>
        )}
      </div>
    </WholeContainer>
  );
};

const WholeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  background-color: #b9dcd1;
  align-items: center;
`;

const SignInBtn = styled(NavLink)`
  border: 1px solid #cc5500;
  border-radius: 5px;
  color: white;
  padding: 5px 10px;
  text-decoration: none;
  background-color: #cc5500;
  font-size: 20px;
  transition: all ease 400ms;
  &:hover {
    color: #cc5500;
    background: #b9dcd1;
    border: 1px solid #b9dcd1;
  }
`;

const SignOut = styled(NavLink)`
  text-decoration: none;
  color: #cc5500;
  font-size: 16px;
`;

const SiteTitle = styled.h1`
  font-size: 26px;
`;

const Greeting = styled.p`
  color: #cc5500;
  margin-bottom: 5px;
  font-weight: 600;
`;

export default Header;
