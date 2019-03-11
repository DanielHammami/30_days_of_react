import React from 'react'
import ActivityItem from './ActivityItem';

export default class Content extends React.Component {
    render() {
        const {activities} = this.props
        
        return (
            <div className="content">
                <div className="line"></div>
                
                {activities.map((activity, i) => (
                    <ActivityItem key={i} activity={activity}/>
                ))}
            </div>
        )
    }
}