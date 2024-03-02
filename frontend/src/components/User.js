import React from "react";
import styled from "styled-components";

const User = ({ name, avatar, id, friends, userFriend, theUser }) => {
  return (
    <div>
      <FriendLabel>{userFriend.includes(id) ? "🦴" : ""}</FriendLabel>
      <UserLabel>{theUser.includes(id) ? "🐶" : ""}</UserLabel>
      <UserImage
        key={id}
        friends={friends}
        src={avatar}
        alt={`a picture of ${name}`}
      ></UserImage>
    </div>
  );
};

const FriendLabel = styled.h3`
  font-size: 50px;
  position: absolute;
  margin-top: -10px;
  z-index: 1;
`;

const UserLabel = styled.h3`
  font-size: 44px;
  position: absolute;
  margin-top: -10px;
  z-index: 1;
`;

const UserImage = styled.img`
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: 15px;
  border: 5px solid #b9dcd1;
  margin: 10px;
  transition: all ease 400ms;
  position: relative;
  &:hover {
    opacity: 0.7;
  }
`;

export default User;
