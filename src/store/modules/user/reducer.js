import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_REQUEST':
      return produce(state, draf => {
        draf.loading = true;
      });
    case '@auth/SIGN_IN_SUCCESS':
      return produce(state, draf => {
        draf.profile = action.payload.user;
      });
    case '@auth/SIGN_IN_FEILURE':
      return produce(state, draf => {
        draf.profile = action.payload.user;
      });

    default:
      return state;
  }
}
