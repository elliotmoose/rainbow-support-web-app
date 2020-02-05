import React from 'react';
import Test from './Test';

export default class App extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            "version": rainbowSDK.version()
        };
    }

    render() {
        return (
            <div>
                <p>Version {this.state.version}</p>
                <Test></Test>
            </div>
            // <div id="content" style={{backgroundColor: 'red', width: '100%', height: '100%'}}>            
            // </div>
        );
    }
}
