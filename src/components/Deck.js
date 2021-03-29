import React, {Component}  from 'react'
import Card from 'react-bootstrap/Card'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

class Deck extends React.Component{

//Type of Charts
//width: '20rem', height: '100%'

//Result
//width: '15rem', height: '100%'
    render(){
        return(
            <div class="card">
                    <Card style={this.props.style}>
                        <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{this.props.subtitle}</Card.Subtitle> 
                            <InputGroup>
                                <InputGroup.Prepend>
                                <InputGroup.Radio aria-label="Radio button for following text input" />
                                </InputGroup.Prepend>
                                <FormControl aria-label="Text input with radio button" />
                            </InputGroup>
                        </Card.Body>
                    </Card>
                </div>
        )
    }
}

export default Deck