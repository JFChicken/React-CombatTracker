import React from 'react'
import Paper from 'material-ui/Paper';

import CombatCharacter from '../components/CombatCharacter'

const style = {
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};

const App = () => (
    <div>
        <Paper style={style} zDepth={1} children={
<div>
    <CombatCharacter/>
</div>

        }/>

    </div>
)

export default App