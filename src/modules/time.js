import { createAction, handleActions } from "redux-actions";

const SET_TIME = "time/SET_TIME";

export const setTime = createAction(SET_TIME, (date) => date);
const nowDate = new Date();
const initialState = {
  hour: nowDate.getHours(),
  minute: nowDate.getMinutes(),
  second: nowDate.getSeconds(),
};

const reducer = handleActions(
  {
    [SET_TIME]: (state, { payload: nextDate }) => {
      const hour = nextDate.getHours();
      const minute = nextDate.getMinutes();
      const second = nextDate.getSeconds();
      return { hour, minute, second };
    },
  },
  initialState
);

export default reducer;
