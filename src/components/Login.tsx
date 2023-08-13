import React, {useState} from 'react';

const Login = (props: {loginHandler(username : string, password : string) : void}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.loginHandler(username, password);
    };

    const usernameChangedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const passwordChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    return (
        <form onSubmit={submitHandler}>
            <div>
                <input type='text' value={username} onChange={usernameChangedHandler} />
            </div>
            <div>
                <input type='password' value={password} onChange={passwordChangeHandler} />
            </div>
            <div>
                <button type='submit'>Login</button>
            </div>
        </form>
    );
};

export default Login;
