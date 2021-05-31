import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getDataAPI } from '../../utils';
import { GlobalTypes } from '../../constants';
import UserCard from './UserCard';
import beryl from '../../images/beryl.gif';

const Search = () => {
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState([]);
  const [load, setLoad] = useState(false);

  const { auth } = useSelector((searchState) => searchState);
  const dispatch = useDispatch();

  const handleClose = () => {
    setSearch('');
    setUsers([]);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!search) return;

    try {
      setLoad(true);
      const res = await getDataAPI(`search?username=${search}`, auth.token);
      setUsers(res.data.users);
      setLoad(false);
    } catch (err) {
      dispatch({
        type: GlobalTypes.NOTIFY,
        payload: { error: err.response.data.msg },
      });
    }
  };

  return (
    <form className='search_form' onSubmit={handleSearch}>
      <input
        type='text'
        name='search'
        value={search}
        id='search'
        onChange={(e) =>
          setSearch(e.target.value.toLowerCase().replace(/ /g, ''))
        }
      />

      <div className='search_icon' style={{ opacity: search ? 0 : 0.3 }}>
        <span className='material-icons'>search</span>
        <span>Search</span>
      </div>

      <div
        className='close_search'
        onClick={handleClose}
        style={{ opacity: users.length === 0 ? 0 : 1 }}
      >
        &times;
      </div>

      <button type='submit' style={{ display: 'none' }}>
        Search
      </button>

      {load && <img className='loading' src={beryl} alt='loading' />}

      <div className='users'>
        {search &&
          users.map((user) => (
            <UserCard
              key={user._id}
              user={user}
              border='border'
              handleClose={handleClose}
            />
          ))}
      </div>
    </form>
  );
};

export default Search;
