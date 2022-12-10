import PropTypes from 'prop-types';
import { FriendListBox } from './FriendList.styled';
import { FriendListItem } from 'components/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <FriendListBox>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          name={friend.name}
          avatar={friend.avatar}
          isOnline={friend.isOnline}
        />
      ))}
    </FriendListBox>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};
