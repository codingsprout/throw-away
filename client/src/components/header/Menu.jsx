import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { v4 as uuidv4 } from 'uuid';
import { GlobalTypes } from '../../constants';
import { navLinks } from '../../utils';
import { logout } from '../../redux/actions';
import Avatar from '../avatar/Avatar';

const Menu = () => {
  const { auth, theme } = useSelector((headerState) => headerState);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  //for useLocation, if you console.log you see a bunch of data
  //pathname is one of them

  const textActive = (pn) => {
    if (pn === pathname) return 'active';
  };
  return (
    <div className='menu'>
      <ul className='navbar-nav flex-row'>
        {navLinks.map((link) => (
          <li
            className={`nav-item px-2 ${textActive(link.path)}`}
            key={uuidv4()}
          >
            <Link className='nav-link' to={link.path}>
              <span className='material-icons'>{link.icon}</span>
            </Link>
          </li>
        ))}

        <li className='nav-item dropdown'>
          <span
            className='nav-link dropdown-toggle'
            id='navbarDropdown'
            role='button'
            data-toggle='dropdown'
            aria-haspopup='true'
            aria-expanded='false'
          >
            <Avatar src={auth.user.avatar} theme={theme} size='medium-avatar' />
          </span>
          <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
            <Link className='dropdown-item' to={`/profile/${auth.user._id}`}>
              Profile
            </Link>
            <label
              htmlFor='theme'
              className='dropdown-item'
              onClick={() =>
                dispatch({ type: GlobalTypes.THEME, payload: !theme })
              }
            >
              {theme ? 'Light Mode' : 'Dark Mode'}
            </label>

            <div className='dropdown-divider'></div>
            <Link
              className='dropdown-item'
              to='/'
              onClick={() => dispatch(logout())}
            >
              Logout
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
