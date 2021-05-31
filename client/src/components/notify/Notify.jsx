import { useSelector, useDispatch } from 'react-redux';

import Loading from './Loading';
import Toast from './Toast';
import { GlobalTypes } from '../../constants';

const Notify = () => {
  //for useSelector(state), {state} can be ANYTHING
  //since it is all of the options inside the reducer index (carrying it)
  const { notify } = useSelector((state) => state);

  //above just says auth = auth.state && notify = notify.state
  //the state is the reducer "state"

  const dispatch = useDispatch();

  return (
    <div>
      {notify.loading && <Loading />}
      {notify.error && (
        <Toast
          msg={{ title: 'Failed', body: notify.error }}
          handleShow={() => dispatch({ type: GlobalTypes.NOTIFY, payload: {} })}
          bgColor='bg-danger'
        />
      )}
      {notify.success && (
        <Toast
          msg={{ title: 'Success', body: notify.success }}
          handleShow={() => dispatch({ type: GlobalTypes.NOTIFY, payload: {} })}
          bgColor='bg-success'
        />
      )}
    </div>
  );
};

export default Notify;
