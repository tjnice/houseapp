import React, { Component } from 'react'
import './chat.scss'
export default class Chat extends Component {
    render() {
        return (
            <div className='chat-box'>
                <div>
                    <img src={require("../../../asstes/imagea/chat1.png")}></img>
                </div>
                <div>
                    <p>置业顾问:<span>张小妹</span></p>
                    <p>专业服务诚信做人诚心做事</p>
                    <button>我要聊天</button>
                </div>
            </div>
        )
    }
}
