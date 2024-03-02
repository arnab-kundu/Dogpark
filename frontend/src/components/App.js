import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Homepage from "./Homepage";
import Header from "./Header";
import ProfilePage from "./ProfilePage";
import SignIn from "./SignIn";
import Friend from "./Friend";

const App = () => {
  const [users, setUsers] = useState([]);
  const [signedInUser, setSignedInUser] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [userFriend, setUserFriend] = useState([]);
  const [theUser, setTheUser] = useState([]);

  useEffect(() => {
    fetch("/api/users").then((response) =>
      response.json().then((json) => {
        setUsers(json.data);
      })
    );
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header
        btnDisabled={btnDisabled}
        setBtnDisabled={setBtnDisabled}
        signedInUser={signedInUser}
        setSignedInUser={setSignedInUser}
      />
      <Routes>
        <Route exact path="/" element={<Homepage users={users} userFriend={userFriend} theUser={theUser} />} />
        <Route exact path="/profile/:id" element={<ProfilePage users={users} />} />
        <Route exact path="/sign-in" element={
          <SignIn
            users={users}
            btnDisabled={btnDisabled}
            setBtnDisabled={setBtnDisabled}
            signedInUser={signedInUser}
            setSignedInUser={setSignedInUser}
            setUserFriend={setUserFriend}
            setTheUser={setTheUser}
          />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
