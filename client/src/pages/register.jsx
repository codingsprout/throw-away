import { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { register } from '../redux/actions';

const Register = () => {
  // const auth = auth.registerState (from reducer)
  const { auth, notify } = useSelector((registerState) => registerState);
  const dispatch = useDispatch();
  const history = useHistory();

  const initialState = {
    fullname: '',
    username: '',
    email: '',
    password: '',
    cf_password: '',
    gender: 'female',
  };
  const [userData, setUserData] = useState(initialState);
  const { fullname, username, email, password, cf_password } = userData;

  const [typePass, setTypePass] = useState(false);
  const [typeCfPass, setTypeCfPass] = useState(false);

  useEffect(() => {
    if (auth.token) history.push('/');
  }, [auth.token, history]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(userData));
  };

  return (
    <div className='auth_page'>
      <form onSubmit={handleSubmit}>
        <h3 className='text-uppercase text-center mb-4'>Template</h3>

        <div className='form-group'>
          <label htmlFor='fullname'>Full name</label>
          <input
            type='text'
            className='form-control'
            id='fullname'
            aria-describedby='emailHelp'
            name='fullname'
            value={fullname}
            onChange={handleChangeInput}
            style={{ background: `${notify.fullname ? '#e30b5d' : ''}` }}
          />
          <small className='form-text text-danger'>
            {notify.fullname ? notify.fullname : ''}
          </small>
        </div>

        <div className='form-group'>
          <label htmlFor='username'>User name</label>
          <input
            type='text'
            className='form-control'
            id='username'
            aria-describedby='emailHelp'
            name='username'
            value={username.toLowerCase().replace(/ /g, '')}
            onChange={handleChangeInput}
            style={{ background: `${notify.username ? '#e30b5d' : ''}` }}
          />
          <small className='form-text text-danger'>
            {notify.username ? notify.username : ''}
          </small>
        </div>

        <div className='form-group'>
          <label htmlFor='exampleInputEmail1'>Email address</label>
          <input
            type='email'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            name='email'
            value={email}
            onChange={handleChangeInput}
            style={{ background: `${notify.email ? '#e30b5d' : ''}` }}
          />
          <small className='form-text text-danger'>
            {notify.email ? notify.email : ''}
          </small>
        </div>

        <div className='form-group'>
          <label htmlFor='exampleInputPassword1'>Password</label>
          <div className='pass'>
            <input
              type={typePass ? 'text' : 'password'}
              className='form-control'
              id='exampleInputPassword1'
              name='password'
              value={password}
              onChange={handleChangeInput}
              style={{ background: `${notify.password ? '#e30b5d' : ''}` }}
            />
            <small onClick={() => setTypePass(!typePass)}>
              {typePass ? 'Hide' : 'Show'}
            </small>
          </div>

          <small className='form-text text-danger'>
            {notify.password ? notify.password : ''}
          </small>
        </div>

        <div className='form-group'>
          <label htmlFor='cf_password'>Confirm Password</label>
          <div className='pass'>
            <input
              type={typeCfPass ? 'text' : 'password'}
              className='form-control'
              id='cf_password'
              name='cf_password'
              value={cf_password}
              onChange={handleChangeInput}
              style={{ background: `${notify.cf_password ? '#e30b5d' : ''}` }}
            />
            <small onClick={() => setTypeCfPass(!typeCfPass)}>
              {typeCfPass ? 'Hide' : 'Show'}
            </small>
          </div>

          <small className='form-text text-danger'>
            {notify.cf_password ? notify.cf_password : ''}
          </small>
        </div>

        <div className='row justify-content-between mx-0 mb-1'>
          <label htmlFor='female'>
            Female:{' '}
            <input
              type='radio'
              id='female'
              name='gender'
              value='female'
              onChange={handleChangeInput}
              defaultChecked
            />
          </label>

          <label htmlFor='male'>
            Male:{' '}
            <input
              type='radio'
              id='male'
              name='gender'
              value='male'
              onChange={handleChangeInput}
            />
          </label>

          <label htmlFor='other'>
            Other:{' '}
            <input
              type='radio'
              id='other'
              name='gender'
              value='other'
              onChange={handleChangeInput}
            />
          </label>
        </div>

        <button type='submit' className='btn btn-dark w-100'>
          Register
        </button>

        <p className='my-2'>
          Already have an account?{' '}
          <Link to='/' style={{ color: '#e30b5d' }}>
            Login Now
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
