import user from "./user.json";
import PropTypes from "prop-types";
// import {
//     Name,
// } from './ProfileCard.styled'

const ProfileItem = ({avatar, username, tag, location, followers, views, likes}) => {
    return (
        <div class="profile">
            <div class="description">
                <img
                    src={avatar}
                    alt="User avatar"
                    class="avatar"
                />
                <p class="name">{username}</p>
                <p class="tag">@{tag}</p>
                <p class="location">{location}</p>
            </div>

            <ul class="stats">
                <li>
                    <span class="label">Followers </span>
                    <span class="quantity">{followers}</span>
                </li>
                <li>
                    <span class="label">Views </span>
                    <span class="quantity">{views}</span>
                </li>
                <li>
                    <span class="label">Likes </span>
                    <span class="quantity">{likes}</span>
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

