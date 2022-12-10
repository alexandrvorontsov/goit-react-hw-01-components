import PropTypes from 'prop-types';
import user from '../data/user.json';
import data from '../data/data.json';
// import friends from '../data/friends.json';
// import transactions from '../data/transactions.json';

import { Profile } from 'components/Profile';
import { Statistics } from 'components/Statistics';
// import { FriendsList } from 'components/FriendList';
// import { TransactionHistory } from 'components/TransactionHistory';

export const App = () => {
  return (
    <main>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      {/* <FriendsList friends={friends} /> */}
      {/* <TransactionHistory transactions={transactions} /> */}
    </main>
  );
};

App.prototype = {
  children: PropTypes.node,
};
