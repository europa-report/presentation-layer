import React, { Component } from 'react'

class ErrorBoundary extends React.Component{
    constructor(props){
        super()
        this.state = {hasError:false}
    }

    componentDidCatch(error, info){

        this.state({hasError:true})
        console.log(error+' '+info)
        // logErrorToMyService(error,info)
    }

    render() {
        if(this.state.hasError) {

            return <h1>Something went wrong.</h1>
        }

        return this.props.children
    }
}

export default ErrorBoundary