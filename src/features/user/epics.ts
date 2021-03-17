import { Epic } from "redux-observable";
import { from, of } from "rxjs";
import { filter, switchMap, map, catchError } from "rxjs/operators";
import { RootAction, RootState, Services, isActionOf } from "typesafe-actions";

import { createUser } from "./actions";

export const createUserEpic: Epic<
  RootAction,
  RootAction,
  RootState,
  Services
> = (action$, state$, { api }) => action$.pipe();
