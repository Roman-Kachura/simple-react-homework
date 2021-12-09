import {applyMiddleware, combineReducers, createStore } from "redux";
import {LoginReducer} from "../m1-ui/u1-auth/a1-login/login-reducer";
import {RegistrationReducer} from "../m1-ui/u1-auth/a2-registration/registration-reducer";
import {ProfileReducer} from "../m1-ui/u1-auth/a3-profile/profile-reducer";
import {ErrorReducer} from "../m1-ui/u1-auth/a4-error/error-reducer";
import {RecoveryPasswordReducer} from "../m1-ui/u1-auth/a5-recovery-password/recovery-password-reducer";
import {NewPasswordReducer} from "../m1-ui/u1-auth/a6-new-password/new-password-reducer";
import {TestReducer} from "../m1-ui/u1-auth/a7-testingSuperComponents/test-reducer";
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({
    login:LoginReducer,
    registration:RegistrationReducer,
    profile:ProfileReducer,
    error:ErrorReducer,
    recoveryPassword:RecoveryPasswordReducer,
    newPassword:NewPasswordReducer,
    test:TestReducer
})

export type RootReducerType = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer,applyMiddleware(thunkMiddleware));