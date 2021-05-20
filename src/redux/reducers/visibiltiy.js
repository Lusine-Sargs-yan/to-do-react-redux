import {VISIBILITY_FILTERS} from '../constants';
import {SET_FILTER_ACTION} from '../action-types';

const initialState = VISIBILITY_FILTERS.All;


export const visibilityFilter = (state = initialState, action) => {//{type:SET_FILTER_ACTION , payload: 'all'  || 'completed' || 'incompleted'}
  switch(action.type) {
    case SET_FILTER_ACTION: {
      return action.payload.filter;
    }
    default: {
      return state;

    }

  }

};

