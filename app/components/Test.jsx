import React from 'react';

export default class Test extends React.Component {

    constructor (props) {
        super(props);        
        this.state = {
            bgcolor: 'white'
        }
    }

    

    render() {
        return (
            <div>                
                <p style={{backgroundColor: this.state.bgcolor}}>HELLO WORLDs</p>
                <button onClick={()=>{
                    console.log('hi');
                    this.setState({bgcolor: 'red'});
                }}>hello</button>
            </div>
        );
    }
}
