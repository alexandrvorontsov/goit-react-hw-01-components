import PropTypes from 'prop-types';
import { HiLocationMarker } from 'react-icons/hi';

import {
  UserProfile,
  UserAvatar,
  UserInfoBox,
  UserName,
  UserTag,
  UserLocation,
  UserStats,
  StatsItem,
  StatsLabel,
  StatsValue,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <UserProfile>
      <UserInfoBox>
        <UserAvatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserTag>{'@' + tag}</UserTag>
        <UserLocation>
          <HiLocationMarker size={'20px'} />
          {location}
        </UserLocation>
      </UserInfoBox>

      <UserStats>
        <StatsItem key={followers}>
          <StatsLabel>Followers</StatsLabel>
          <StatsValue>{followers}</StatsValue>
        </StatsItem>
        <StatsItem key={views}>
          <StatsLabel>Views</StatsLabel>
          <StatsValue>{views}</StatsValue>
        </StatsItem>
        <StatsItem key={likes}>
          <StatsLabel>Likes</StatsLabel>
          <StatsValue>{likes}</StatsValue>
        </StatsItem>
      </UserStats>
    </UserProfile>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
