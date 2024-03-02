import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Homepage from "./Homepage";
import Friend from "./Friend";

const ProfilePage = ({ users }) => {
  let { id } = useParams();
  const [user, setUser] = useState([]);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch(`/api/users/${id}`).then((response) =>
      response.json().then((json) => {
        setUser(json.data);
        setFriends(json.data.friends);
      })
    );
  }, [id]);

  return (
    <div>
      <Bckgrnd />
      <Container>
        <UserImage
          src={user.avatarUrl}
          alt={`a picture of ${user.name}`}
        ></UserImage>
        <NameAndOcc>
          <h2>{user.name}</h2>
          <h3>{user.occupation}</h3>
        </NameAndOcc>
      </Container>
      <UsersFriendsTitle>{user.name}'s friends</UsersFriendsTitle>
      <Divider />
      <FriendContainer>
        {friends.map((friend, i) => {
          return <Friend key={`friend-${i}`} friend={friend} />;
        })}
      </FriendContainer>
    </div>
  );
};

const UserImage = styled.img`
  height: 300px;
  border-radius: 50%;
  border: 10px solid #fff9f3;
  margin-top: -80px;
  margin-left: 30px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Bckgrnd = styled.div`
  background: url(/images/dogpark_bg.jpg) center bottom;
  background-size: cover;
  height: 30vh;
`;

const NameAndOcc = styled.div`
  flex-direction: column;
`;

const FriendContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 30px;
  flex-wrap: wrap;
`;

const Divider = styled.hr`
  border: 1px solid #cc5500;
  margin: 0px 30px;
`;

const UsersFriendsTitle = styled.h3`
  font-size: 18px;
  margin: 20px 30px 0px 30px;
`;

export default ProfilePage;
