import React, { Component } from 'react';
import './timer.css';

class BackTimer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: 100,
        }

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

    componentDidUpdate() {
        if (this.state.time <= 0) {
            this.componentWillUnmount();
        }

    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            time: this.state.time - 1
        });
    }

    render() {
        return (
            <>
                {this.state.time >= 0 &&
                    <h4 className="time">
                        {this.state.time}
                    </h4>
                }
            </>
        );
    }
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };

    }

    componentDidMount() {
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
            date: new Date()
        });
    }

    render() {
        return (
            <>
                <h4 className="date">Sekarang jam : {this.state.date.toLocaleTimeString()}</h4>
            </>
        );
    }

}

class DataRender extends React.Component {
    render() {
        return (
            <div className="timer">
                <BackTimer />
                <Clock />
            </div>
        );
    }
}

export default DataRender