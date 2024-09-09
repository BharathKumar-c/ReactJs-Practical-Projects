import React, {useEffect, useState} from 'react';
import './style.css';
import UserCard from './user-card';

const GithubProfileFinder = () => {
  const [userName, setUserName] = useState('BharathKumar-c');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [userData, setUserData] = useState(null);

  async function fetchUserData() {
    setLoading(true);
    try {
      const res = await fetch(`https://api.github.com/users/${userName}`);
      const result = await res.json();
      if (result) {
        setUserData(result);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setErrorMsg(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = () => {
    fetchUserData();
  };

  if (loading) {
    return <h1>Loadin data ! please wait.</h1>;
  }

  if (errorMsg) {
    return <div>{errorMsg}</div>;
  }

  return (
    <div className="main-container">
      <div className="search-section">
        <input
          type="text"
          name="user-search"
          placeholder="Search Github Username..."
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button type="button" onClick={handleSearch}>
          Search
        </button>
      </div>
      {userData ? <UserCard userData={userData} /> : null}
    </div>
  );
};

export default GithubProfileFinder;
