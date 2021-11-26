import React from 'react';
import {Route, Routes} from "react-router-dom";
import {LoginPage} from "../u1-auth/a1-login/LoginPage";
import {RegistrationPage} from "../u1-auth/a2-registration/RegistrationPage";
import {ProfilePage} from "../u1-auth/a3-profile/ProfilePage";
import {RecoveryPasswordPage} from "../u1-auth/a5-recovery-password/RecoveryPasswordPage";
import {NewPasswordPage} from "../u1-auth/a6-new-password/NewPasswordPage";
import {ErrorPage} from "../u1-auth/a4-error/ErrorPage";
import {TestingSuperComponents} from "../u1-auth/a7-testingSuperComponents/TestingSuperComponents";


export const MyRoutes = () => {
    return (
        <Routes>
            <Route path={'/login'} element={<LoginPage/>}/>
            <Route path={'/registration'} element={<RegistrationPage/>}/>
            <Route path={'/profile'} element={<ProfilePage/>}/>
            <Route path={'/error'} element={<ErrorPage/>}/>
            <Route path={'/recovery-password'} element={<RecoveryPasswordPage/>}/>
            <Route path={'/new-password'} element={<NewPasswordPage/>}/>
            <Route path={'/test'} element={<TestingSuperComponents/>}/>
        </Routes>
    )
}