import user from "./user.json";

const ProfileItem = ({username, tag, location}) => {
    return (
        <div class="profile">
            <div class="description">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
                    alt="User avatar"
                    class="avatar"
                />
                <p class="name">{username}</p>
                <p class="tag">{tag}</p>
                <p class="location">{location}</p>
            </div>

            <ul class="stats">
                <li>
                    <span class="label">Followers</span>
                    <span class="quantity">1000</span>
                </li>
                <li>
                    <span class="label">Views</span>
                    <span class="quantity">2000</span>
                </li>
                <li>
                    <span class="label">Likes</span>
                    <span class="quantity">3000</span>
                </li>
            </ul>
        </div>
    )
}

const Profile = () => {
return (
    <div>
        
            <ProfileItem
                username={user.username}
                tag={user.tag}
                location={user.location}
            ></ProfileItem>
        
    </div>
)
}

export default Profile;