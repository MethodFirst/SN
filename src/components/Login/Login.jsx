import React from 'react';
import {Field, reduxForm} from "redux-form";
import handleSubmit from "redux-form/lib/handleSubmit";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";


const maxLength10 = maxLengthCreator(40);

const LoginForm = (props) => {
    console.log("RERENDER")
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <Field placeholder={"Login"} validate={[required, maxLength10]} name={"Login"} component={Input}/>
                </div>
                <div>
                    <Field placeholder={"Password"} validate={[required, maxLength10]} name={"Password"} component={Input}/>
                </div>
                <div>
                    <Field component={Input} name={"rememberMe"} type={"checkbox"}/>Remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({form: 'Login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return <div><h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}


export default Login;



