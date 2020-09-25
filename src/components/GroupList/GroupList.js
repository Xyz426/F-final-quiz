import React, { Component } from 'react';
import './GroupList.scss';
class GroupList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className='group-list'>
                <div className='header-title'>分组列表</div>
                <button className='group-button' type={'button'}>分组学员</button>
            </div>
        )
    }
}

export default GroupList;