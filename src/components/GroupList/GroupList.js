import React, { Component } from 'react';
import './GroupList.scss';
import Group from '../Group/Group';

class GroupList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
    };
  }

  componentDidMount() {
    this.getGroupList();
  }

  getGroupList = () => {
    fetch('http://localhost:8080/groups', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          return Promise.resolve(response.json());
        }
        return Promise.reject();
      })
      .then((data) => {
        this.setState({
          groups: data,
        });
      })
      .catch(() => {
        // eslint-disable-next-line no-console
        console.log('err');
      });
  };

  postAutoGrouping = () => {
    fetch('http://localhost:8080/groups/auto-grouping', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          return Promise.resolve(response.json());
        }
        return Promise.reject();
      })
      .then((data) => {
        this.setState({
          groups: data,
        });
      })
      .catch(() => {
        // eslint-disable-next-line no-console
        console.log('err');
      });
  };

  render() {
    return (
      <div className="groupList">
        <header className="header-groupList">
          <div className="header-title">分组列表</div>
          <button className="group-button" onClick={this.postAutoGrouping} type="button">
            分组学员
          </button>
        </header>
        {this.state.groups.map((item) => {
          return (
            <span key={item.id}>
              <Group name={item.name} trainers={item.trainers} trainees={item.trainees} />
            </span>
          );
        })}
      </div>
    );
  }
}

export default GroupList;
