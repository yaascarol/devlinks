import './Profile.css'

function Profile({ avatarSrc, avatarAlt, username, avatarSize }) {
  return (
    <header className="profile">
      <div className="profile__avatar-slot">
        <img
          className="profile__avatar"
          src={avatarSrc}
          alt={avatarAlt}
          width={avatarSize}
          height={avatarSize}
        />
      </div>
      <p className="profile__username">{username}</p>
    </header>
  )
}

export default Profile
