import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import User from "./User";

const Homepage = ({ users, userFriend, theUser }) => {
  return (
    <Wrapper>
      <ComponentTitle>Our Members</ComponentTitle>
      <PhotoContainer>
        {users.map((user) => (
          <Link key={`homepage-${user._id}`} to={`/profile/${user._id}`}>
            <User
              name={user.name}
              id={user._id}
              avatar={user.avatarUrl}
              friends={user.friends}
              users={users}
              userFriend={userFriend}
              theUser={theUser}
            />
          </Link>
        ))}
      </PhotoContainer>
    </Wrapper>
  );
};

const ComponentTitle = styled.h2`
  margin: 20px;
`;

const PhotoContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Wrapper = styled.div`
  margin: 10px;
`;

export default Homepage;
