import { Component } from 'react';

class Contador extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
            title: this.props.title
        };
    }

    handleIncrement() {
        this.setState({
            value: this.state.value + 1
        });
    }
    handleDecrement() {
        this.setState({
            value: this.state.value - 1
        });
    } 

    render() {
        return (
            <div>
                <p>El valor es: {this.state.value}</p>
                <button onClick={() => this.handleIncrement()}>Incrementar</button>
                <button onClick={() => this.handleDecrement()}>Decrementar</button>
            </div>
        );
    }
}

export default Contador;
