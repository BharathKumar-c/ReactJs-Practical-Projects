import React from 'react';

const UserCard = ({userData}) => {
  const {
    avatar_url,
    created_at,
    followers,
    following,
    html_url,
    url,
    public_repos,
    login,
    name,
  } = userData;

  const createDate = new Date(created_at);
  return (
    <div className="user-card">
      <img src={avatar_url} alt={name} />
      <div className="name-container">
        <a href={html_url || url}>{login}</a>
        <p>
          User Join On :{' '}
          {`${createDate.getDate()} ${createDate.toLocaleString('en-us', {
            month: 'short',
          })} ${createDate.getFullYear()}`}
        </p>
      </div>
      <div className="profile-info">
        <div>
          <p>Public Repo</p>
          <p>{public_repos}</p>
        </div>
        <div>
          <p>Following</p>
          <p>{following}</p>
        </div>
        <div>
          <p>Followers</p>
          <p>{followers}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
