import React from 'react'

export default class Clock extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            date: new Date()
        }

        this.setTime = this.setTime.bind(this)
    }

    componentDidMount() {
        this.setTime()
    }

    setTime = () => {
        setInterval(() => {
            this.setState(() => ({date: new Date()}))
        }, 1000)
    }
 
    render() {
        const hours = this.state.date.getHours(),
              minutes = this.state.date.getMinutes(),
              seconds = this.state.date.getSeconds(),
              ampm = hours >= 12 ? 'pm' : 'am'
        
        return (
            <div className='clock'>
                {
                    hours === 0 ? 12 : (hours > 12) ? hours - 12 : hours
                }:{
                    minutes > 9 ? minutes : `0${minutes}`
                }:{
                    seconds > 9 ? seconds : `0${seconds}`
                } {ampm}
            </div>
        )
    }
}