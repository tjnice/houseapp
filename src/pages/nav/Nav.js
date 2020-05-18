import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';
import './nav.scss'
import First from './first/First'
import Chat from './chat/Chat'
import Pat from './pat/Pat'
import My from './my/My'

const bgc1 = require('../../asstes/imagea/f-1.png')
const bgc11 = require('../../asstes/imagea/f1-1.png')
const bgc2 = require('../../asstes/imagea/f-2.png')
const bgc22 = require('../../asstes/imagea/f2-2.png')
const bgc3 = require('../../asstes/imagea/f-3.png')
const bgc4 = require('../../asstes/imagea/f-4.png')
const bgc44 = require('../../asstes/imagea/f4-4.png')

export default class Nav extends Component {
    state = {
      selectedTab: 'blueTab',
    };

  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${bgc1}) center center /  21px 21px no-repeat `}}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${bgc11}) center center /  21px 21px no-repeat `}}
            />
            }
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >
            <First/>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${bgc2}) center center /  21px 21px no-repeat `}}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${bgc22}) center center /  21px 21px no-repeat `}}
              />
            }
            title="微聊"
            key="Koubei"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
            <Chat/>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${bgc3}) center center /  21px 21px no-repeat `}}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${bgc3}) center center /  21px 21px no-repeat `}}
              />
            }
            title="推荐"
            key="Friend"
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            <Pat/>
          </TabBar.Item>
          <TabBar.Item
            icon={
                <div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${bgc4}) center center /  21px 21px no-repeat `}}
                  />
            }
            selectedIcon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: `url(${bgc44}) center center /  21px 21px no-repeat `}}
                />
            }
            title="我的"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            <My/>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

