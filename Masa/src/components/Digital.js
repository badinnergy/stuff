import React  from 'react';
import Clock from 'react-live-clock';
 
var ReactFitText = require('react-fittext');
export default class MyComponent extends React.Component {
    render() {
        return (
            <div style={style}>
                <h1>Masa terkini:</h1>
                <ReactFitText compressor={1.0}>
                    <h1>
                        <Clock format="HH:mm:ss" ticking={true} interval={1000} />
                    </h1>
                </ReactFitText>
            </div>
        )
    }
}

const style = {
    textAlign: 'center',
}