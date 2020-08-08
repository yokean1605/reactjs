import React, { Component } from 'react';
import './timer.css';

class BackTimer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: 0,
            date: new Date()
        }

    }

    componentDidUpdate() {
    }

    componentDidMount() {
        if (this.props.start !== undefined) {
            this.setState({ time: this.props.start });
        }
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            time: this.state.time - 1,
            date: new Date()
        });
    }

    render() {
        return (
            <>
                {
                    this.state.time >= 0 && (
                        <>
                            <h3 className="date">
                                Sekarang jam - {this.state.date.toLocaleTimeString()}.
                            </h3>
                            <h3 className="time">
                                hitung mundur: {this.state.time}
                            </h3>
                        </>
                    )
                }
            </>
        );
    }
}

export default BackTimer