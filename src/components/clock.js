import React, { Component } from 'react';

class Clock extends Component {
    render() {
        return(
            <div className="clock">
                <div className="clock__days">
                    <label className="clock__title">DAYS</label>
                    <label className="clock__amount">45</label>
                </div>
                <div className="clock__hours">
                    <label className="clock__title">HOURS</label>
                    <label className="clock__amount">6</label>
                </div>
                <div className="clock__minutes">
                    <label className="clock__title">MINUTES</label>
                    <label className="clock__amount">12</label>
                </div>
                <div className="clock__seconds">
                    <label className="clock__title">SECONDS</label>
                    <label className="clock__amount">35</label>
                </div>
            </div>
        )
    }
}

export default CLock;