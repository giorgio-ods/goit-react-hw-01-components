import Profile from './components/Profile/Profile';
import user from './user.json';
import data from './components/Statistics/data.json'
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/Friends/Friendlist';
import friends from './components/Friends/friends.json'
import TransactionHistory from './components/Transactions/Transactions-history';
import transactions from './components/Transactions/transactions.json';

export default function App() {
    return <div>
    <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            followers={user.stats.followers}
            views={user.stats.views}
            likes={user.stats.likes}
        />
        <Statistics items={data} title="Upload Stats" />
        <FriendList items={friends} />
        <TransactionHistory items={transactions}/>
           </div>
}

