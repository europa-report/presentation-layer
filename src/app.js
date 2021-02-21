import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './css/styles.css';



class App extends React.Component {
    componentDidMount() {

    }
    Click(){
        console.log('I am clicked!!!!')
    }

    render() {
        return (
            <div>
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