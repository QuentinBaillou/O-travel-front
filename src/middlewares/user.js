/* eslint-disable no-console */
import {
  LOGIN, GET_LAST_USER, LOGOUT, saveUserInfo, setFormError, CREATE_USER, login,
  // GET_NEW_PASSWORD,
} from 'src/actions/userActions';
import axiosInstance from 'src/axiosInstance';
import { getFavoritesDestination } from 'src/actions/favoritesActions';

const userMiddleware = (store) => (next) => (action) => {
  const userState = store.getState().user;
  switch (action.type) {
    case LOGIN: {
      const { email: stateEmail, password } = userState;
      axiosInstance
        .post('api/login_check', {
          username: stateEmail,
          password,
        })
        .then((response) => {
          console.log(response);

          // Store JWT token in local storage to use it later
          const { token } = response.data;
          localStorage.setItem('token', token);
          const { email, firstname, lastname } = response.data.data;

          store.dispatch(saveUserInfo(email, firstname, lastname, token));
          store.dispatch(getFavoritesDestination());
        })
        .catch((error) => {
          console.log(error.response);
          let errorMessage = '';
          if (error.response) {
            if (error.response.status >= 500) {
              errorMessage = 'Erreur serveur: Merci de réessayer plus tard';
            }
            else {
              errorMessage = 'Email ou mot de passe incorrect';
            }
          }
          else {
            errorMessage = 'Erreur serveur: Merci de réessayer plus tard';
          }
          store.dispatch(setFormError(errorMessage, true));
        });
      next(action);
      break;
    }

    case GET_LAST_USER: {
      // If there is a token in local storage, then pick it up
      if (localStorage.getItem('token')) {
        const token = localStorage.getItem('token');
        console.log(token);

        // Retrieve user info from api thanks to jwt token
        axiosInstance
          .get('api/user/profile', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            console.log(response);
            const { email, firstname, lastname } = response.data;
            store.dispatch(saveUserInfo(email, firstname, lastname, token));
            store.dispatch(getFavoritesDestination());
          })
          .catch((error) => {
            console.log(error);
          });
      }
      next(action);
      break; }

    /* case GET_NEW_PASSWORD:
      axiosInstance
        .post('email/resetpassword', {
          email: store.getState().user.email,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.response);

          let errorMessage = '';
          if (error.response) {
            if (error.response.status >= 500) {
              errorMessage = 'Erreur serveur: Merci de réessayer plus tard';
            }
            else {
              errorMessage = 'Email ou mot de passe incorrect';
            }
          }
          else {
            errorMessage = 'Erreur serveur: Merci de réessayer plus tard';
          }
          store.dispatch(setFormError(errorMessage, true));
        });
      next(action);
      break; */

    case CREATE_USER: {
      const state = store.getState();
      axiosInstance
        .post('api/user/form', {
          firstname: state.user.firstname,
          lastname: state.user.lastname,
          email: state.user.email,
          password: state.user.password,
        })
        .then((response) => {
          console.log(response);
          store.dispatch(login());
        })
        .catch((error) => {
          (console.log(error));
        });
      next(action);
      break;
    }

    case LOGOUT:
      localStorage.removeItem('token');
      next(action);
      break;
    default:
      next(action);
  }
};

export default userMiddleware;
