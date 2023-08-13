import React from 'react';

const Home = (props: {logoutHandler(): void}) => {
    return (
        <div>
            <div>
                You are logged in!
            </div>
            <div>
                <button onClick={props.logoutHandler}>Logout</button>
            </div>
        </div>
    );
};

export default Home;
