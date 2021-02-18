import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './css/styles.css';
import socketIOClient from 'socket.io-client';
const ENDPOINT = 'http://127.0.0.1:3000'


class App extends React.Component {
    componentDidMount() {

        // axios.get('/users')
        //     .then(response => {
        //         console.log(response.data);
        //         store.dispatch(addUsers(response.data.results));
        //     })
    }
    Click(){
        console.log('I am clicked!!!!')
    }

    render() {
        return (
            <div className="main-section">
            <h1>Hello React!</h1>
            <button onClick={this.Click}>Click Me!</button>
            </div>
        )
    }
}


ReactDOM.render(
    <App/>,
    document.getElementById('root')
)