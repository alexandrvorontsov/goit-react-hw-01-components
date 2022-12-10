import PropTypes from 'prop-types';
import { SiAnaconda } from 'react-icons/si';

import {
  FriendItem,
  FriendIsOnline,
  FriendAvatar,
  FriendName,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      <FriendIsOnline isOnline={isOnline}>
        <SiAnaconda size={'15px'} color={'white'}></SiAnaconda>
      </FriendIsOnline>
      <FriendAvatar src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};

FriendListItem.protoTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
