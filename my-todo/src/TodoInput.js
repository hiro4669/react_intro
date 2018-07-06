import React, {Component} from 'react';

class TodoInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange= this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            inputValue: e.target.value,
        });
    }

    handleClick() {
        this.props.addTodo(this.state.inputValue);
    }

    render() {
        return (
            <div>
                <input placeholder="Input new Todo" value={this.state.inputValue}
                onChange={this.handleChange}/>
                <button onClick={this.handleClick}>Register</button>
            </div>
        );
    }
}

export default TodoInput;
