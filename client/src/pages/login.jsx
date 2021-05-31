import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { login } from '../redux/actions';

const Login = () => {
  //initialize initialState with props email and password
  const initialState = { email: '', password: '' };
  const [userData, setUserData] = useState(initialState);
  const { email, password } = userData;
  //this just says const email = userData.email
  //const password = userData.password

  const [typePass, setTypePass] = useState(false);

  const { auth } = useSelector((loginState) => loginState);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (auth.token) history.push('/');
  }, [auth.token, history]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  //for the above its just taking every name through code and dynamically
  //setting it as key and having value as whatever value is set

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(userData));
  };

  return (
    <div className='auth_page'>
      <form onSubmit={handleSubmit}>
        <h3 className='text-uppercase text-center mb-4'>Template</h3>
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
          />
          <small id='emailHelp' className='form-text text-muted'>
            We'll never share your email with anyone else.
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
            />
            <small onClick={() => setTypePass(!typePass)}>
              {typePass ? 'Hide' : 'Show'}
            </small>
          </div>
        </div>

        <button
          type='submit'
          className='btn btn-dark w-100'
          disabled={email && password ? false : true}
        >
          Login
        </button>

        <p className='my-2'>
          Don't have an account?{' '}
          <Link to='/register' style={{ color: '#e30b5d' }}>
            Register Now
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
