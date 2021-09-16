import React, { Component } from 'react';
import intervalToDuration from "date-fns/esm/fp/intervalToDuration/index.js";

class DynamicTime extends Component {
    constructor(props) {
        super(props);
        this.state = {
            diffInTime: intervalToDuration({
                start: new Date(2017, 6, 16, 9, 30, 0),
                end: new Date(),
            })
        };
    }
    timeLapsed = () => {
        this.timerFunc = setInterval(() => {
            const diffInTime = intervalToDuration({
                start: new Date(2017, 6, 17, 9, 30, 0),
                end: new Date(),
            });
            console.log("Executed");
            this.setState({ diffInTime: diffInTime });
        }, 1000);
    };
    render() {
        const timeDiff = { ...this.state.diffInTime };
        return (
            <div className="dynamic-time">
                <span className="pre-text">I have been in this industry for </span>
                <span className="post-text"><b>{timeDiff.years}</b> yrs <b>{timeDiff.months}</b> months <b>{timeDiff.days}</b> days <b>{timeDiff.hours}</b> hrs <b>{timeDiff.minutes}</b> mins, <b>{timeDiff.seconds}</b> secs.
                </span></div>
        );
    }
    componentDidMount() {
        this.timeLapsed();
    }
    componentWillUnmount() {
        clearInterval(this.timerFunc);
    }
}

export default DynamicTime;