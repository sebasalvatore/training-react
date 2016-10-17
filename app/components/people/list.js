import React, {Component} from 'react' 
import UserDetail from './detail';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

class UserList extends Component{
	constructor(){
    super();
    this.state = {
      usersList: [
        {id:1, name:'juan pablo gonzalez',address:'111 Lomas st.'},
        {id:2, name:'juan carlos gonzalez',address:'222 Lomas st.'},
        {id:3, name:'juan carlos masaguer',address:'333 Lomas st.'},
        {id:4, name:'rodrigo reymond',address:'444 Lomas st.'},
        {id:5, name:'viginia mansila',address:'555 Lomas st.'},
        {id:6, name:'peter capusoto',address:'666 Lomas st.'},
        {id:7, name:'adrian veliz',address:'777 Lomas st.'}
      ],
      selectedUser: {id:1, name:'No name', address:'No address'},
      isDialogOpen:false
    };
	}

  getUserDetails = (user) => {
    this.setState({selectedUser:user});
  } 

  addUser = () => {
    this.setState({usersList: this.state.usersList.concat([{id:this.state.usersList.length+1,name:this._inputName.input.value,address:this._inputAddress.input.value}])});
    this.setState({isDialogOpen:false});
  }

  deleteUser = (id) => {
    alert();
    this.setState({usersList: this.state.usersList.filter(user => user.id !== id)});
  }

  openDialog = () => {
    this.setState({isDialogOpen:true});
  }

  closeDialog = () => {
    this.setState({isDialogOpen:false});
  }

	render(){
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.closeDialog}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={this.addUser}
      />
    ];

		return(   
      <div>
        <FlatButton label="Add New person" primary={true} onClick={this.openDialog}/>
        <Dialog
          title="New person"
          actions={actions}
          modal={true}
          open={this.state.isDialogOpen}
        >
          <TextField
            floatingLabelText="Name"
            ref={(nameInputRef) => this._inputName = nameInputRef}
          />
          <TextField
            floatingLabelText="Address"
            ref={(addressInputRef) => this._inputAddress = addressInputRef}
          />
        </Dialog>
        <ul>
          {
            this.state.usersList.map((user) =>{
              return (
                <li key={user.id} onClick={this.getUserDetails.bind(this, user)} >{user.name}</li>
              );
            })
          }
        </ul>
        <UserDetail user={this.state.selectedUser} onDeleteUser={this.deleteUser}/>
      </div>
		);
	}

} 

export default UserList;