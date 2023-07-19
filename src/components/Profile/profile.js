
import PropTypes from "prop-types";
import user from "./user.json";
// import {
//     Name,
// } from './ProfileCard.styled'

const ProfileItem = ({
    avatar, 
    username, 
    tag, 
    location, 
    followers, 
    views, 
    likes,
}) => {
    return (
        <div className="profile">
            <div className="description">
                <img
                    src={avatar}
                    alt="User avatar"
                    className="avatar"
                />
                <p className="name">{username}</p>
                <p className="tag">@{tag}</p>
                <p className="location">{location}</p>
            </div>

            <ul className="stats">
                <li>
                    <span className="label">Followers </span>
                    <span className="quantity">{followers}</span>
                </li>
                <li>
                    <span className="label">Views </span>
                    <span className="quantity">{views}</span>
                </li>
                <li>
                    <span className="label">Likes </span>
                    <span className="quantity">{likes}</span>
                </li>
            </ul>
        </div>
    )
}

const Profile = () => {
return (
    <div>
        
            <ProfileItem
                avatar ={user.avatar}
                username={user.username}
                tag={user.tag}
                location={user.location}
                followers={user.stats.followers}
                views={user.stats.views}
                likes={user.stats.likes}
            ></ProfileItem>
        
    </div>
)
}

ProfileItem.propTypes = {
    avatar: PropTypes.string,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
};

export default Profile;

