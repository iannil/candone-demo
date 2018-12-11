import React, { Component } from 'react';
import { Card } from 'antd';

class GuaCard extends Component {
  render() {
    const hasContent = this.props.content;
    return (
      <Card title={this.props.title}>
        {hasContent ? (<div style={{flexDirection: 'column', display: 'inline-flex'}}>
          <img alt="up" src={process.env.PUBLIC_URL + this.props.content[0]}/>
          <img alt="down" src={process.env.PUBLIC_URL + this.props.content[1]} style={{marginTop: '10px'}}/>
        </div>) : (<p>无</p>)}
      </Card>
    );
  };
}

export default GuaCard;