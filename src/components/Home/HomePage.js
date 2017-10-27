// @flow
import React from 'react'
import Paper from 'material-ui/Paper';

const style = {
    margin: 20,
    textAlign: 'center',
    display: 'flow',
    minHeight:200,
};

const HomePage = () => (
    <div>
        <Paper style={style} zDepth={1} children={
            <div>
                Combat Tracker
            </div>

        }/>

    </div>
);

export default HomePage
