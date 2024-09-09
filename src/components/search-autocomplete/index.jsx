import React, {useEffect, useState} from 'react';
import Suggestion from './suggestion';
import './style.css';

const SearchAutocomplete = () => {
  const [searchUser, setSearchUser] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [users, setUsers] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [filterUsers, setFilterUsers] = useState([]);

  const handleChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchUser(query);
    if (query.length > 1) {
      const filterData = users?.length
        ? users.filter((user) => user.toLowerCase().indexOf(query) > -1)
        : [];
      setFilterUsers(filterData);
      setShowSuggestion(true);
    } else {
      setShowSuggestion(false);
    }
  };

  const handleSuggestionClick = (e) => {
    setSearchUser(e.target.innerText);
    setFilterUsers([]);
    setShowSuggestion(false);
  };

  async function fetchUsers() {
    setLoading(true);
    try {
      const res = await fetch('https://dummyjson.com/users');
      const result = await res.json();
      if (result?.users?.length) {
        setUsers(result.users.map((user) => user.firstName));
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setErrorMsg(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <h2>Loading data! please wait.</h2>;
  if (errorMsg) return <div>{errorMsg}</div>;

  return (
    <div className="search-autocomplete-container">
      <input
        type="text"
        placeholder="Search Users Here..."
        name="search-users"
        value={searchUser}
        onChange={handleChange}
      />
      {showSuggestion ? (
        <Suggestion
          data={filterUsers}
          handleSuggestionClick={handleSuggestionClick}
        />
      ) : null}
    </div>
  );
};

export default SearchAutocomplete;
