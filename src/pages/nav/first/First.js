import React, { Component } from 'react'
import { SearchBar, Carousel } from 'antd-mobile';
import './first.scss'
import { guesslike } from '../../../api/apis'
export default class First extends Component {
    state = {
        data: ['banner1', 'banner2', 'banner3', 'banner4'],
        guesslist: [],
        imgHeight: 176,
    }
    render() {
        var { guesslist } = this.state
        return (
            <div className="first-box">
                <div className='header'>
                    <div>
                        <span>重庆市</span>
                        <span onClick={this.city} className='san'></span>
                    </div>
                    <div>
                        <SearchBar placeholder="挑好房，上源码房产APP" />
                    </div>
                    <div>
                        <img src={require('../../../asstes/imagea/index1.png')}></img>
                    </div>
                </div>
                <div>
                    <Carousel
                        autoplay
                        infinite
                    >
                        {this.state.data.map(val => (
                            <a
                                key={val}
                                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                                <img
                                    src={require("../../../asstes/imagea/" + val + ".jpg")}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>
                </div>
                <div className='center'>
                    <div className='centera'>
                        <div>
                            <div>
                                <div>
                                    <img src={require('../../../asstes/imagea/indexc1.png')}></img>
                                </div>
                                <span>新房</span>
                            </div>
                            <div>
                                <div>
                                    <img src={require('../../../asstes/imagea/indexc2.png')}></img>
                                </div>
                                <span>二手房</span>
                            </div>
                            <div>
                                <div>
                                    <img src={require('../../../asstes/imagea/indexc3.png')}></img>
                                </div>
                                <span>租房</span>
                            </div>
                            <div>
                                <div>
                                    <img src={require('../../../asstes/imagea/indexc4.png')}></img>
                                </div>
                                <span>商铺写字楼</span>
                            </div>
                        </div>
                    </div>
                    <div className='centera'>
                        <div>
                            <div>
                                <div>
                                    <img src={require('../../../asstes/imagea/indexc5.png')}></img>
                                </div>
                                <span>卖房</span>
                            </div>
                            <div>
                                <div>
                                    <img src={require('../../../asstes/imagea/indexc6.png')}></img>
                                </div>
                                <span>海外房产</span>
                            </div>
                            <div>
                                <div>
                                    <img src={require('../../../asstes/imagea/indexc7.png')}></img>
                                </div>
                                <span>小区房产</span>
                            </div>
                            <div>
                                <div>
                                    <img src={require('../../../asstes/imagea/indexc8.png')}></img>
                                </div>
                                <span>问答</span>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='bgcl'></div>
                <div className='footer'>
                    <div className='title'>
                        <h2>房产全百科</h2>
                        <span>专业的买房攻略</span>
                    </div>
                    <div className='cotent'>
                        <div>
                            <p><img src={require('../../../asstes/imagea/indexf1.png')}></img></p>
                            <span>我要贷款</span>
                        </div>
                        <div>
                            <p><img src={require('../../../asstes/imagea/indexf2.png')}></img></p>
                            <span>房贷计算</span>
                        </div>
                        <div>
                            <p><img src={require('../../../asstes/imagea/indexf3.png')}></img></p>
                            <span>知识</span>
                        </div>
                        <div>
                            <p><img src={require('../../../asstes/imagea/indexf4.png')}></img></p>
                            <span>扫一扫</span>
                        </div>
                    </div>
                </div>
                <div className='bgcl'></div>
                <div className='guess'>
                    <h2>猜你喜欢</h2>
                    {guesslist.map((val, i) => (
                        <div className='guesslist' key={i}>
                            <div>
                                <img src={"http://129.211.169.131:33833"+val.imgs}></img>
                            </div>
                            <div>
                                <h3>{val.name}</h3>
                                <div>{val.area} {val.range}</div>
                                <span>{val.type} {val.point}平</span>
                            </div>
                            <div>{val.price}/平</div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
    componentDidMount() {
        guesslike().then(res => {
            this.setState({
                guesslist: res.data
            })

        })
    }
    city=()=>{
        window.location.hash="#/city"
    }
}
