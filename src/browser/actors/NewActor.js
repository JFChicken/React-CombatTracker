// @flow
import React from 'react';
import { compose } from 'ramda';
import { connect } from 'react-redux';

// Material UI
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

// redux actions
import { addActor } from '../../common/actors/actorsActions';


const inlineStyles = {
  button: {
    margin: 12,
  },
  page: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding:'5px 0px',
    margin: '15px 5px',
  },
};
type MenuItemGeneratorProps={
  title:string,
  min:number,
  max:number,

}
const MenuItemGenerator = (title,min=1,max=21):MenuItemGeneratorProps =>{
  const items = [];
  for (let i = min; i < max; i++ ) {
    items.push(<MenuItem value={i} key={i} primaryText={`${title} ${i}`} />);
  }

  return(items);
};
type NewActorPageProps = {
  addActor:Function,
};

class NewActorPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'Player 1',
      maxActions: 4,
      initiative:10,
      actorType: 'PC',
    };
  }

  props: NewActorPageProps;

  handleMaxActionChange = (event, index, maxActions) => this.setState({maxActions});
  handleInitiativeChange = (event, index, initiative) => this.setState({initiative});
  handleActorTypeChange = (event, index, actorType) => this.setState({actorType});
  handleNameChange = (event, name) =>this.setState({name});

  handleNewActorClick = (name,maxActions,initiative,actorType)=>{
    this.props.addActor(name,maxActions,initiative,actorType);
  };

  render() {
    const { maxActions, initiative, actorType, name } = this.state;

    return (
        <div style={inlineStyles.page}>
          <TextField
              defaultValue={name}
              onChange={(event, index) => this.handleNameChange(event, index)}
          />
          <DropDownMenu maxHeight={300} value={maxActions} onChange={this.handleMaxActionChange}>
          {MenuItemGenerator('Actions:')}
        </DropDownMenu>
          <DropDownMenu maxHeight={300} value={initiative} onChange={this.handleInitiativeChange}>
            {MenuItemGenerator('Initiative:')}
          </DropDownMenu>
          <DropDownMenu  value={actorType} onChange={this.handleActorTypeChange}>
            <MenuItem value='PC' key='PC' primaryText='Player' />
            <MenuItem value='NPC' key='NPC' primaryText='Non-Player' />
          </DropDownMenu>
          <RaisedButton
              label="ADD"
              primary={true}
              style={inlineStyles.button}
              onClick={()=>{this.handleNewActorClick(name,maxActions,initiative,actorType)}}
          />


        </div>
    );
  }
}
export default compose(
    connect(
        (state) => ({
         // reducers

        }),
        {
          // actions
          addActor,
        },
    ),
)(NewActorPage);

