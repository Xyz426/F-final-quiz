import React, { Component } from 'react';
import './Header.css'

class Header extends Component{
    render(){
        return(
            <div className="header">
                <div>
                    <h1 className="title">分组列表</h1>
                    <button className="grouping">分组学员</button>
                </div>
            </div>
        )
    }
}

export default Header;