import React from 'react'
import Paper from 'material-ui/Paper';

// import shortId from 'shortid'; // this may be needed latter when i need to add in keys

import { connect } from 'react-redux'
import  AddCharacter  from './AddCharacter'

const style = {
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
    minWidth: 400,
};


class CombatCharacter extends React.Component {

    constructor(props) {
        super(props);
    };

    parseList = (characterList)=>{

        return characterList.map(character => (
            `${character.characterName}-${character.characterInitiative}-${character.characterMaxActions}`
            )
        );
};
    render(){
const { characterList } = this.props;

        return (
            <div>
                <AddCharacter/>
                <Paper style={style} zDepth={2} children={
                    <div style={{display:'flex'}}>
                        <div>
                   <h1>character list</h1>
                    <span>Name</span>
                    <span>Initiative</span>
                    <span>max Actions</span>
                    <span>used Actions</span>
                        </div>
                    <div>{this.parseList(characterList)}</div>
                    </div>


                }/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        characterList: state.characterList,
    }
};

const mapDispatchToProps = dispatch => {
    return {

    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CombatCharacter);