import styled from "styled-components";

export const FriendListContainer = styled.div`
    padding:0;

`

export const FriendItem = styled.div`
    display:flex;
    align-items:center;
    margin: 10px;
    padding:10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

`
export const StatusIconOnline = styled.div`
    width:10px;
    height:10px;
    border-radius:50%;
    background-color:green;
`
export const StatusIconOffline = styled.div`
    width:10px;
    height:10px;
    border-radius:50%;
    background-color:red;


`
export const FriendAvatar = styled.img`
    border-radius: 30%;
    margin:0 10px 5px 5px;
`

export const FriendName = styled.p`
    font-weight:600;
`

