import { GlobalTypes } from '../../constants';
import { getDataAPI } from '../../utils';

export const getProfileUsers =
  ({ users, id, auth }) =>
  async (dispatch) => {
    if (users.every((user) => user._id !== id)) {
      try {
        dispatch({ type: GlobalTypes.LOADING, payload: true });
        const res = await getDataAPI(`/user/${id}`, auth.token);
        console.log(res);
      } catch (err) {
        dispatch({
          type: GlobalTypes.NOTIFY,
          payload: { error: err.response.data.msg },
        });
      }
    }
  };
