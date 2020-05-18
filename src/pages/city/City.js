import React, { Component } from 'react'
import './city.scss'
export default class City extends Component {
    render() {
        return (
            <div className='city-box'>
                <div className='title'>
                    <h1 onClick={this.colse}>X</h1>
                    <h2>城市列表</h2>
                </div>
                <div className='text'>
                    <span>当前定位</span>
                </div>
                <div className='textcity'>
                    <span>重庆</span>
                </div>
                <div className='text'>
                    <span>热门城市</span>
                </div>
                <div className='textcity'>
                    <span>北京</span>
                </div>
                <div className='textcity'>
                    <span>上海</span>
                </div>
                <div className='textcity'>
                    <span>深圳</span>
                </div>
                <div className='text'>
                    <span>A</span>
                </div>
                <div className='textcity'>
                    <span>安庆</span>
                </div>
            </div>
        )
    }
    colse=()=>{
        window.location.hash="#/"
    }
}
