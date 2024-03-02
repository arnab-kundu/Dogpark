import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
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
      <Switch>
        <Route exact path="/">
          <Homepage users={users} userFriend={userFriend} theUser={theUser} />
        </Route>
        <Route exact path="/profile/:id">
          <ProfilePage users={users} />
        </Route>
        <Route exact path="/sign-in">
          <SignIn
            users={users}
            btnDisabled={btnDisabled}
            setBtnDisabled={setBtnDisabled}
            signedInUser={signedInUser}
            setSignedInUser={setSignedInUser}
            setUserFriend={setUserFriend}
            setTheUser={setTheUser}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
