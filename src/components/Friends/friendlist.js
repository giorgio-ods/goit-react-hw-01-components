import PropTypes from 'prop-types';
import s from './friends.module.css'


export default function FriendList({ items }) {
    
    return <ul className={s.FriendsListStyle}> {
        items.map(({id, avatar, name, isOnline = false}) => (
            <li key={id} className={s.FriendItem} >
                
                <img className="avatar" src={avatar} alt="User avatar" width="48" />
                <p className="name">{name}</p>
                <span className={isOnline ? [s['FriendOnline']] : [s['FriendOffline']]}>Online</span>
            </li>
        ))}</ul>
}

FriendList.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
    isOnline: PropTypes.bool,
    // type: PropTypes.oneOf(['online', 'offline' ])
}