import { ADD_NEW_USER, LOGIN_USER } from "./types";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../firebase";

export const addUser = (email, password, displayName) => async (dispatch) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    await auth.currentUser.updateProfile({displayName: displayName})
    
    await dispatch({
      type: ADD_NEW_USER,
      payload: user.user,
    });
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = (email, password) => async (dispatch) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    await dispatch({
      type: LOGIN_USER,
      payload: user.user
    })
  } catch (error) {
    console.log(error)
  }
}