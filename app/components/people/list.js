import React, {Component} from 'react' 

class UserList extends Component{
	constructor(){
    super();
		this.usersList = [
			{id:1, name:'juan pablo gonzalez',address:'111 Lomas st.'},
			{id:2, name:'juan carlos gonzalez',address:'222 Lomas st.'},
			{id:3, name:'juan carlos masaguer',address:'333 Lomas st.'},
			{id:4, name:'rodrigo reymond',address:'444 Lomas st.'},
			{id:5, name:'viginia mansila',address:'555 Lomas st.'},
			{id:6, name:'peter capusoto',address:'666 Lomas st.'},
			{id:7, name:'adrian veliz',address:'777 Lomas st.'}
		];
	}

	render(){
		return(   
			<ul>
				{this.usersList.map(user => <li key={user.id}>{user.name} </li>)}
			</ul>
		);
	}
  
} 

export default UserList;