import React from 'react';

class TODO extends React.Component {
    constructor(props) {
        super(props);
        this.state = {todo: ''};
    }

    handleChange(value) {
        this.setState({todo: value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.todo);
        event.preventDefault();
        this.setState({todo: ''})
    }

    render() {
        return(
            <div>
                <h1>
                    This is NOT TODO list
                </h1>
                <form onSubmit={(e) => {this.handleSubmit(e)}}>
                    <input
                        value={this.state.todo} 
                        onChange={(e) => {
                            this.handleChange(e.target.value)
                        }}
                    >
                    </input>
                    <button type>add task</button>
                </form>
            </div>
        )
    }
}

export default TODO;