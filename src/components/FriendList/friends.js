import React from "react"; // Why do we import that?
import PropTypes from "prop-types";
import friends from './friends.json';


const FriendListItem = ({ 
    
    avatar, 
    name, 
    isOnline,
}) => {
    return (
        <li className="item">
            <span className="status">{isOnline ? 'Online' : 'Offline'}</span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </li>
    )
}

FriendListItem.propTypes={
    isOnline: PropTypes.bool,
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
}

const FriendList = () => {
    return (
        <ul className="friend-list">
            {friends.map(friend=>(
                <FriendListItem
                    key={friend.id}
                    isOnline={friend.isOnline}
                    avatar={friend.avatar}
                    name={friend.name}
                ></FriendListItem>
            ))}
        </ul>
    )
};


export default FriendList;