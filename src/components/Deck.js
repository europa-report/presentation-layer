import { React } from 'react'
import Card from 'react-bootstrap/Card'
import InputGroup from 'react-bootstrap/InputGroup'

class Deck extends React.Component{

    constructor(props){
        
    }

//Type of Charts
//width: '20rem', height: '100%'

//Result
//width: '15rem', height: '100%'
    render(){
        return(
            <div class="card">
                    <Card style={props.style}>
                        <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{props.subtitle}</Card.Subtitle> 
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