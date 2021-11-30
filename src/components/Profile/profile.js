import s from './Profile.module.css'
import PropTypes from 'prop-types';



export default function Profile({ username, avatar, tag, location, followers, views, likes }) {
    return <div className={s.Profile}>
  <div className="description">
    <img
      src={avatar}
      alt="User avatar"
      className="avatar"
    />
            <p className={s.Name}>{username}</p>
            <p className="tag">{tag}</p>
            <p className="location">{location}</p>
  </div>

      <ul className={s.Stats}>
    <li className={s.Item}>
      <span className="label">Followers: </span>
      <span className="quantity">{followers}</span>
    </li>
    <li className={s.Item}>
      <span className="label">Views: </span>
      <span className="quantity">{views}</span>
    </li>
    <li className={s.Item}>
      <span className="label">Likes: </span>
      <span className="quantity">{likes}</span>
    </li>
  </ul>
</div>
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    followers: PropTypes.number,
    likes: PropTypes.number,
}