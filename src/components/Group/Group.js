import React, { Component } from 'react';
import './Group.scss';

class Group extends Component {
  render() {
    return (
      <div>
        <header className="group-header">
          <span className="group-name">{this.props.name}</span>
          {this.props.trainers.map((item) => {
            return (
              <span className="group-trainers" key={item.id}>
                {item.id}.{item.name}
              </span>
            );
          })}
        </header>
        <main>
          {this.props.trainees.map((item) => {
            return (
              <span className="group-trainees" key={item.id}>
                {item.id}.{item.name}
              </span>
            );
          })}
        </main>
      </div>
    );
  }
}

export default Group;
