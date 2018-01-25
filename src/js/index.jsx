import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ChatWindow from './ChatWindow';

class Client extends React.Component{

	render(){
		return(

			<h1> Welcome to Web Chat Application</h1>
			)
	}
}

ReactDOM.render(<div><Client/> <ChatWindow/></div>, document.getElementById("root"));
