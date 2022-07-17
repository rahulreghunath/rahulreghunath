import React, { Component } from 'react';

class Content extends Component {
    render() {
        return (
            <div className='container'>
                <h1 style={{userSelect:'none'}} className='name' aria-label='My name is Rahul R'>Rahul R</h1>
                <h2 style={{userSelect:'none'}} className='title' aria-label='I am a software engineer'>Software Developer</h2>
            </div>
        )
    }
}

export default Content;
