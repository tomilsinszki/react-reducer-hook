import React, {useEffect, useReducer, useState} from 'react';

const usernameReducer = (state : any, action : any) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.value, isValid: action.value.length > 3 };
    }

    return { value: '', isValid: false };
};

const passwordReducer = (state : any, action: any) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.value, isValid: action.value.length > 8 };
    }

    return { value: '', isValid: false };
};

const Login = (props: {loginHandler(username : string, password : string) : void}) => {
    const [usernameState, dispatchUsername] = useReducer(usernameReducer, { value: '', isValid: false });
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, { value: '', isValid: false });
    const [formIsValid, setFormIsValid] = useState(false);

    const { isValid: isUsernameValid } = usernameState;
    const { isValid: isPasswordValid } = passwordState;

    useEffect(() => {
        const timerId = setTimeout(() => {
            setFormIsValid(isUsernameValid && isPasswordValid)
        });

        return () => {
            clearTimeout(timerId);
        }
    }, [isUsernameValid, isPasswordValid]);

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.loginHandler(usernameState.value, passwordState.value);
    };

    const usernameChangedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatchUsername({type: 'USER_INPUT', value: event.target.value});
    };

    const passwordChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatchPassword({type: 'USER_INPUT', value: event.target.value});
    };

    return (
        <form onSubmit={submitHandler} style={{ padding: '20px', borderColor: formIsValid ? 'green' : 'red', borderWidth: '2px', borderStyle: 'solid' }}>
            <div style={{ padding: '3px', borderColor: usernameState.isValid ? 'green' : 'red', borderWidth: '2px', borderStyle: 'solid' }}>
                <input type='text' value={usernameState.value} onChange={usernameChangedHandler} />
            </div>
            <div style={{ padding: '3px', borderColor: passwordState.isValid ? 'green' : 'red', borderWidth: '2px', borderStyle: 'solid' }}>
                <input type='password' value={passwordState.value} onChange={passwordChangeHandler} />
            </div>
            <div>
                <button type='submit'>Login</button>
            </div>
        </form>
    );
};

export default Login;
