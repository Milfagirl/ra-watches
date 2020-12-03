import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: '' };
        this.deleteClock = this.deleteClock.bind(this);

    }
    deleteClock(e) {
        this.props.changedata(prev => this.props.data.filter(item => item.id !== e.target.id));
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => {
                this.setState((state) => {
                    return { date: new Date() };
                })
            },
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        if (this.props.data.length > 0) {
            return (
                <div className='div-clock'>
                    {this.props.data.map(item => {
                        return (
                            <div className='clock'>
                                <span>{item.name}</span>
                                <div className='timer'><Moment local add={{ hours: Number(item.timezone) }} format="HH:mm:ss">{this.state.date}</Moment></div>
                                <button id={item.id} onClick={this.deleteClock}>x</button>
                            </div>
                        )
                    })}
                </div>
            )
        } else return ''
    }

}


Clock.defaultProps = {
    data: [],
    changedata: ''
};