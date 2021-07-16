import { createAction, handleActions } from "redux-actions";

const SET_TIME = "time/SET_TIME";

export const setTime = createAction(SET_TIME, (date) => date);
const nowDate = new Date();
const initialState = {
  hour: nowDate.getHours(),
  minute: nowDate.getMinutes(),
  second: nowDate.getSeconds(),
  millisecond: nowDate.getMilliseconds(),
};

const reducer = handleActions(
  {
    [SET_TIME]: (state, { payload: nextDate }) => {
      const hour = nextDate.getHours();
      const minute = nextDate.getMinutes();
      const second = nextDate.getSeconds();
      const millisecond = nowDate.getMilliseconds();
      return { hour, minute, second, millisecond };
    },
  },
  initialState
);

export default reducer;
