
import PropTypes from "prop-types";
import user from "./user.json";
import {
    PofileContainer,
    PortfolioContainer,
    AvatartImg,
    TagContainer,
    Name,
    TagInfo,
    LocationContainer,
    LocationInfo,
    StatsMainContainer,
    StatsElement,
    LabelText,
    Quantity,
} from './ProfileCard.styled'

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
        <PofileContainer>
            <PortfolioContainer>
                <AvatartImg>
                    <img
                        src={avatar}
                        alt="User avatar"
                        className="avatar"
                        width={100}
                        height={100}

                    /></AvatartImg>
                <Name>{username}</Name>
                <TagContainer><TagInfo>@{tag}</TagInfo></TagContainer>
                <LocationContainer><LocationInfo>{location}</LocationInfo></LocationContainer>

                <StatsMainContainer>
                    <StatsElement>
                        <LabelText>Followers </LabelText>
                        <Quantity>{followers}</Quantity>
                    </StatsElement>
                    <StatsElement>
                        <LabelText>Views </LabelText>
                        <Quantity>{views}</Quantity>
                    </StatsElement>
                    <StatsElement>
                        <LabelText>Likes </LabelText>
                        <Quantity>{likes}</Quantity>
                    </StatsElement>
                </StatsMainContainer>
            </PortfolioContainer>
        </PofileContainer>

    )
}

const Profile = () => {
    return (
        <div>

            <ProfileItem
                avatar={user.avatar}
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

