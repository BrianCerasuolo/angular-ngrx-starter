import { combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { enableBatching } from 'redux-batched-actions';

import { IStore } from '../interfaces/store.interface';
import { environment } from './../../../environments/environment';
import { uiReducer } from './ui/ui.reducer';

// ------------------------------------------------------------------------------

const reducers = {
  // pass your reducers here
  ui: uiReducer,
};

// ------------------------------------------------------------------------------

// if environment is != from production
// use storeFreeze to avoid state mutation
const developmentReducer = compose(
  storeFreeze,
  enableBatching,
  combineReducers
)(reducers);
const productionReducer = compose(enableBatching, combineReducers)(reducers);

// enableBatching allows us to dispatch multiple actions
// without letting the subscribers being warned between the actions
// only at the end : https://github.com/tshelburne/redux-batched-actions
// can be very handy when normalizing HTTP response
export function getRootReducer(state: IStore, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}
