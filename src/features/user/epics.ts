import { getUser } from "./../../db/db";
import { Epic } from "redux-observable";
import { from, of } from "rxjs";
import { filter, switchMap, map, catchError } from "rxjs/operators";
import { RootAction, RootState, Services, isActionOf } from "typesafe-actions";

import { getUserAssync } from "./actions";

export const getUserEpic: Epic<RootAction, RootAction, RootState, Services> = (
  action$,
  state$,
  { api }
) =>
  action$.pipe(
    filter(
      isActionOf(getUserAssync.request),
      switchMap(() =>
        from(getUser).pipe(
          map(getUserAssync.success),
          catchError((message: string) => of(getUserAssync.failure(message)))
        )
      )
    )
  );
