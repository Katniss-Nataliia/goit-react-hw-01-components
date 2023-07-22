import React from "react"; // Why do we import that?
import PropTypes from "prop-types";
import friends from './friends.json';
import {
    FriendListContainer,
    FriendItem,
    StatusIconOnline,
    StatusIconOffline,
    FriendAvatar,
    FriendName,
} from './Friends.styled'

const FriendListItem = ({ 
    avatar, 
    name, 
    isOnline, 
}) => {
    return (
        <FriendItem>
          
            <span className="status">{isOnline ? <StatusIconOnline></StatusIconOnline> : <StatusIconOffline></StatusIconOffline>}</span>
            <FriendAvatar src={avatar} alt="User avatar" width="48" />
            <FriendName>{name}</FriendName>
            
        </FriendItem>
    )
}

FriendListItem.propTypes={
    isOnline: PropTypes.bool,
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
}

const FriendList = () => {
    return (
        <FriendListContainer>
            {friends.map(friend=>(
                <FriendListItem
                    key={friend.id}
                    isOnline={friend.isOnline}
                    avatar={friend.avatar}
                    name={friend.name}
                ></FriendListItem>
            ))}
        </FriendListContainer>
    )
};


export default FriendList;