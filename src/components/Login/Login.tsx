import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {createField, GetStringKeys, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "./../common/FormsControls/FormsControls.module.css";
import {AppStateType} from "../../redux/redux-store";

type LoginFormOwnValues = {
  captchaUrl : string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnValues> & LoginFormOwnValues> = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField<LoginFormValuesTypeKeys>("Email", "email", [required], Input)}
            {createField<LoginFormValuesTypeKeys>("Password", "password", [required], Input, {type: "password"})}
            {createField<LoginFormValuesTypeKeys>(undefined, "rememberMe", [], Input, {type: "checkbox"}, "remember me")}

            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && createField<LoginFormValuesTypeKeys>("Symbols from image", "captcha", [required], Input, {})}


            {error && <div className={style.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}


const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnValues>({form: 'login'})(LoginForm)



type MapStatePropsType = {
    captchaUrl: null | string
    isAuth: boolean
}


type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

type LoginFormValuesType = {
    captcha: string
    rememberMe: boolean
    email: string
    password: string

}

type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType>

const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
    const onSubmit = (formData: LoginFormValuesType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1 className={style.testAccount}>Testing account: free@samuraijs.com </h1>
        <h1 className={style.testAccount}>Password: free </h1>
        <h1 className={style.testAccount}>This site is under development by Anton Golenko at this stage The basic
            concepts of the code have been implemented which you can see in my github repository. The design of the site
            is still in development and I used the simplest one, first working hard on the functionality. You can test
            my login page with validators and also users,profile and messages pages.</h1>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        <h1 className={style.testAccount}>My Github repository: https://github.com/MethodFirst/SN </h1>
    </div>
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);