import { Link } from 'react-router-dom';

import Avatar from '../avatar/Avatar';

const UserCard = ({ user, border, handleClose }) => {
  const handleCloseAll = () => {
    if (handleClose) handleClose();
  };

  return (
    <div className={`d-flex p-2 align-item-center ${border}`}>
      <div>
        <Link
          to={`/profile/${user._id}`}
          className='d-flex align-item-center'
          onClick={handleCloseAll}
        >
          <Avatar src={user.avatar} size='big-avatar' />
          <div className='ml-1' style={{ transform: 'translateY(-2px)' }}>
            <span className='d-block'>{user.username}</span>
            <small style={{ opacity: 0.7 }}>{user.fullname}</small>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default UserCard;
