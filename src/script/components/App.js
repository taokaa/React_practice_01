import React from 'react';
import TODO from './TODO';

class App extends React.Component {
    render() {
        return(
            <div>
                <clock />
                <TODO />
            </div>
        )
    }
}

export default App;