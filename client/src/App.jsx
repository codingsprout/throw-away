import { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { PageRender, PrivateRouter } from './customRouter';
import { Notify, Header } from './components';
import { Login, Home, Register } from './pages';
import { refreshToken } from './redux/actions';

function App() {
  const { auth } = useSelector((reduxState) => reduxState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);
  return (
    <Router>
      <Notify />
      <input type='checkbox' id='theme' />
      <div className='App'>
        <div className='main'>
          {auth.token && <Header />}
          <Route exact path='/' component={auth.token ? Home : Login} />

          <Route exact path='/register' component={Register} />

          <PrivateRouter exact path='/:page' component={PageRender} />
          <PrivateRouter exact path='/:page/:id' component={PageRender} />
        </div>
      </div>
    </Router>
  );
}

export default App;
