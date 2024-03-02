import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

const Friend = ({ friend }) => {
  const [currentFriend, setCurrentFriend] = useState([]);

  useEffect(() => {
    fetch(`/api/users/${friend}`).then((response) =>
      response.json().then((json) => {
        setCurrentFriend(json.data);
      })
    );
  }, [friend]);

  return (
    <>
      <Link to={`/profile/${friend}`}>
        <ImageContainer key={friend}>
          <FriendName>{currentFriend.name}</FriendName>
          <FriendImg src={currentFriend.avatarUrl}></FriendImg>
        </ImageContainer>
      </Link>
    </>
  );
};

const FriendName = styled.h4`
  margin-top: -47px;
  margin-bottom: 10px;
  text-align: center;
  font-family: "Quicksand", sans-serif;
  font-size: 20px;
  z-index: 1;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 30px 10px;
  color: transparent;
  border-radius: 15px;
  &:hover {
    color: #cc5500;
  }
`;

const FriendImg = styled.img`
  height: 140px;
  object-fit: cover;
  border-radius: 15px;
  border: 5px solid #b9dcd1;
  transition: all ease 400ms;
  &:hover {
    opacity: 0.7;
  }
`;

export default Friend;
