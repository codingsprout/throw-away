import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Avatar from '../avatar/Avatar';
import { getProfileUsers } from '../../redux/actions';

const Info = () => {
  //found id when console.log(useParams())
  const { id } = useParams();
  const { auth, profile } = useSelector((infoState) => infoState);
  const dispatch = useDispatch();

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    if (id === auth.user._id) {
      setUserData([auth.user]);
    }
  }, [id, auth.user]);
  return (
    <div className='info'>
      {userData.map((user) => (
        <div className='container' key={user._id}>
          <Avatar src={user.avatar} size='super-avatar' />

          <div className='content'>
            <div className='title'>
              <h2>{user.username}</h2>
              <button className='btn btn-outline-info'>Edit Profile</button>
            </div>

            <div className='follow_btn'>
              <span className='mr-4'>{user.followers.length} Followers</span>
              <span className='ml-4'>{user.following.length} Following</span>
            </div>

            <h6>
              {user.fullname} {user.mobile}
            </h6>
            <p className='m-0'>{user.address}</p>
            <h6>{user.email}</h6>
            <a href={user.website} target='_blank' rel='noreferrer'>
              {user.website}
            </a>
            <p>{user.story}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Info;
