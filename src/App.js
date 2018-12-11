import React, { Component } from 'react';
import { Button, Layout, Menu, Breadcrumb, Col, Row, Card, Badge } from 'antd';
import GuaCard from './GuaCard';
import _ from 'lodash';

import moment from 'moment';
import 'moment/locale/zh-cn';

import './App.css';

const gridStyle = {
  width: '100%',
  textAlign: 'center',
};
const { Header, Content, Footer } = Layout;

moment.locale('zh-cn');

class App extends Component {
  constructor() {
    super();

    this.state = {
      changeUp: false,
      gua2num: {
        '1': [1, 1, 1],
        '2': [0, 1, 1],
        '3': [1, 0, 1],
        '4': [0, 0, 1],
        '5': [1, 1, 0],
        '6': [0, 1, 0],
        '7': [1, 0, 0],
        '8': [0, 0, 0],
      },
      num2gua: {
        '111': './imgs/乾.jpg',
        '011': './imgs/兑.jpg',
        '101': './imgs/离.jpg',
        '001': './imgs/震.jpg',
        '110': './imgs/巽.jpg',
        '010': './imgs/坎.jpg',
        '100': './imgs/艮.jpg',
        '000': './imgs/坤.jpg',
      },
      num2type: {
        '111': '金',
        '011': '金',
        '101': '火',
        '001': '木',
        '110': '木',
        '010': '水',
        '100': '土',
        '000': '土',
      }
    };
  };

  trans2pic(nums) {
    return _.map(_.chunk(nums, 3), (v) => {
      let num = _.join(v, '');
      return this.state.num2gua[num];
    });
  };

  trans2type(nums) {
    return _.map(_.chunk(nums, 3), (v) => {
      let num = _.join(v, '');
      return this.state.num2type[num];
    });
  };

  compareType(arr) {
    const a = arr[0];
    const b = arr[1];

    if(a === b){
      return (<Badge count={'这事能成'} />);
    }

    if(a === '金' && (b === '水' || b === '火')) {
      return (<Badge count={'这事没戏'} style={{ backgroundColor: '#52c41a' }} />);
    }
    
    if(a === '木' && (b === '火' || b === '金')) {
      return (<Badge count={'这事没戏'} style={{ backgroundColor: '#52c41a' }} />);
    }
    
    if(a === '水' && (b === '木' || b === '土')) {
      return (<Badge count={'这事没戏'} style={{ backgroundColor: '#52c41a' }} />);
    }
    
    if(a === '火' && (b === '土' || b === '水')) {
      return (<Badge count={'这事没戏'} style={{ backgroundColor: '#52c41a' }} />);
    }

    if(a === '土' && (b === '金' || b === '木')) {
      return (<Badge count={'这事没戏'} style={{ backgroundColor: '#52c41a' }} />);
    }

    return (<Badge count={'这事能成'} />);
  };

  checkDone() {
    const timenow = moment();
    // const hour = timenow.hours();
    const minutes = timenow.minutes();
    const seconds = timenow.seconds();
    const milliseconds = timenow.milliseconds();

    // const up_from = hour;
    // const down_from = minutes;
    // const change_from = seconds;

    const up_from = minutes
    const down_from = seconds
    const change_from = milliseconds

    const up = up_from % 8 === 0 ? 8 : up_from % 8;
    const down = down_from % 8 === 0 ? 8 : down_from % 8;

    // 从上到下数变爻位置
    let change = change_from % 6 === 0 ? 6 : change_from % 6;
    change = 6 - change;

    // 变爻是否在上卦
    let change_up = (change > 3) ? false : true;
    // console.log(up, down, change);

    // 本卦
    let ben_nums = _.concat([], this.state.gua2num[up], this.state.gua2num[down]); // [110011]

    // 互卦
    let hu_nums = _.map([1, 2, 3, 2, 3, 4], (v) => {
      return ben_nums[v];
    });
    
    // 错卦
    let cuo_nums = _.map(ben_nums, (v) => {
      return v === 0 ? 1 : 0;
    });

    // 综卦
    let zong_nums = _.map([3, 4, 5, 0, 1, 2], (v) => {
      return ben_nums[v];
    });

    // 变卦
    let bian_nums = _.clone(ben_nums);
    bian_nums[change] = _.nth(bian_nums, change) === 0 ? 1 : 0;

    this.setState({
      changeUp: change_up,
      
      ben: this.trans2pic(ben_nums),
      hu: this.trans2pic(hu_nums),
      bian: this.trans2pic(bian_nums),
      cuo: this.trans2pic(cuo_nums),
      zong: this.trans2pic(zong_nums),

      resultNow: this.compareType(this.trans2type(ben_nums)),
      resultFuture: this.compareType(this.trans2type(bian_nums)),
    });
  };

  render() {
    const changeUp = this.state.changeUp;

    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">首页</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            <Breadcrumb.Item>开始测算</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <Row gutter={16}>
              <Col span={2}>
                <GuaCard title="本卦" content={this.state.ben}/>
              </Col>
              <Col span={2}>
                <GuaCard title="互卦" content={this.state.hu}/>
              </Col>
              <Col span={2}>
                <GuaCard title="错卦" content={this.state.cuo}/>
              </Col>
              <Col span={2}>
                <GuaCard title="综卦" content={this.state.zong}/>
              </Col>
              <Col span={2}>
                <GuaCard title="变卦" content={this.state.bian}/>
              </Col>
              <Col span={4}>
                <Card title="测算结果">
                  {changeUp ? 
                    (<Card.Grid style={gridStyle}>变爻在上</Card.Grid>) : 
                    (<Card.Grid style={gridStyle}>变爻在下</Card.Grid>)}
                                   
                  <Card.Grid style={gridStyle}>当前状态：{this.state.resultNow}</Card.Grid>
                  <Card.Grid style={gridStyle}>最终结果：{this.state.resultFuture}</Card.Grid>
                </Card>
              </Col>
            </Row>
            <Row gutter={16} style={{marginTop: "20px"}}>
              <Col span={2}>
                <Button type="primary" icon="check-circle" size="large" onClick={this.checkDone.bind(this)}>开始</Button>
              </Col>
            </Row>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}

export default App;
