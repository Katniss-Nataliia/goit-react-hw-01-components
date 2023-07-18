import friends from './friends.json';
import PropTypes from "prop-types";

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li class="item">
            <span class="status">{isOnline}</span>
            <img class="avatar" src={avatar} alt="User avatar" width="48" />
            <p class="name">{name}</p>
        </li>
    )
}


const FriendList = () => {
    return (
        <ul class="friend-list">
            {friends.map(friend=>(
                <FriendListItem
                    isOnline={friend.isOnline}
                    avatar={friend.avatar}
                    name={friend.name}
                ></FriendListItem>
            ))}

            {/* <!-- Any number of FriendListItem --> */}
        </ul>
    )
};

FriendListItem.PropTypes={
    isOnline: PropTypes.bool,
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
}

export default FriendList;