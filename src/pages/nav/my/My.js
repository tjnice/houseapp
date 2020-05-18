import React, { Component } from 'react'
import './my.scss'
export default class My extends Component {
    render() {
        return (
            <div className='my-box'>
                <div className='header'>
                    <div className='top'>
                        <div>
                            <img src={require("../../../asstes/imagea/my0.png")}></img>
                        </div>
                        <div className='txet'>
                            <div><span>登录</span>/<span>注册</span></div>
                            <span>可以与经纪人发起聊天</span>
                        </div>
                        <div>
                            <img src={require("../../../asstes/imagea/my1.png")}></img>
                        </div>
                    </div>
                    <div className='footer'>
                        <div>
                            <div>0</div>
                            <div>
                                <img src={require("../../../asstes/imagea/my2.png")}></img>
                                <span>钱包</span>
                            </div>
                        </div>
                        <div>
                            <div>0</div>
                            <div>
                                <img src={require("../../../asstes/imagea/my3.png")}></img>
                                <span>优惠</span>
                            </div>
                        </div>
                        <div>
                            <div>0</div>
                            <div>
                                <img src={require("../../../asstes/imagea/my4.png")}></img>
                                <span>积分</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bgcl'></div>
                <div className='content'>
                    <div className='border'>
                        <div>
                            <img src={require("../../../asstes/imagea/my5.png")}></img>
                            <span>我的积分</span>
                        </div>
                        <div>></div>
                    </div>
                    <div className='border'>
                        <div>
                            <img src={require("../../../asstes/imagea/my6.png")}></img>
                            <span>我的订阅</span>
                        </div>
                        <div>></div>
                    </div>
                    <div className='border'>
                        <div>
                            <img src={require("../../../asstes/imagea/my7.png")}></img>
                            <span>微聊联系人</span>
                        </div>
                        <div>></div>
                    </div>
                </div>
                <div className='bgcl'></div>
                <div className='content'>
                    <div className='border'>
                        <div>
                            <img src={require("../../../asstes/imagea/my8.png")}></img>
                            <span>房贷计算器</span>
                        </div>
                        <div>></div>
                    </div>
                    <div className='border'>
                        <div>
                            <img src={require("../../../asstes/imagea/my9.png")}></img>
                            <span>我的房子</span>
                        </div>
                        <div>></div>
                    </div>
                </div>
                <div className='bgcl'></div>
                <div className='content'>
                    <div className='border'>
                        <div>
                            <img src={require("../../../asstes/imagea/my10.png")}></img>
                            <span>我的看房记录</span>
                        </div>
                        <div>></div>
                    </div>
                    <div className='border'>
                        <div>
                            <img src={require("../../../asstes/imagea/my11.png")}></img>
                            <span>我的问答</span>
                        </div>
                        <div>></div>
                    </div>
                </div>
                <div className='bgcl'></div>
                <div className='content'>
                    <div className='border'>
                        <div>
                            <img src={require("../../../asstes/imagea/my12.png")}></img>
                            <span>设置</span>
                        </div>
                        <div>></div>
                    </div>
                    <div className='border'>
                        <div>
                            <span>意见反馈</span>
                        </div>
                        <div>></div>
                    </div>
                </div>
            </div>
        )
    }
}
