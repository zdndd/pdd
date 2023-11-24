import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  createAction,
  createReducer,
  MetaReducer,
  on,
  props,
} from "@ngrx/store";
import { environment } from "../../environments/environment";

export const increment = createAction("[counterComponent] 增加计数器值");
export const decrement = createAction("[counterComponent] 减少计数器值");
export const reset = createAction("[counterComponent] 重置计数器值");
export const login = createAction(
  "[AppComponent] 登录",
  props<{ mobile: string; password: string }>()
);

export const logout = createAction("[AppComponent] 登出");

const initialState = 0;
export interface State {
  counter: number;
  loggedIn: boolean;
}

const counterReducer = createReducer(
  initialState,
  on(increment, (state): number => state + 1),
  on(decrement, (state): number => state - 1),
  on(reset, (state): number => initialState)
);

const authReducer = createReducer(
  false,
  on(
    login,
    (state, { mobile, password }): boolean =>
      mobile === "18616028426" && password === "1234"
  ),
  on(logout, (state): boolean => false)
);

export const reducers: ActionReducerMap<State> = {
  counter: counterReducer,
  loggedIn: authReducer,
};

export const loggers = (reducer: ActionReducer<any>): ActionReducer<any> => {
  return (state, action) => {
    console.log("此前状态", state);
    console.log("动作", action);
    const newState = reducer(state, action);
    console.log("此后状态", newState);
    return newState;
  };
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [loggers]
  : [];
