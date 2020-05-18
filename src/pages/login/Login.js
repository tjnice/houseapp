import React, { Component } from 'react'
import './login.scss'
import tsIcon from '../../asstes/imagea/1-1.png'
import tsIcon1 from '../../asstes/imagea/2-2.png'
import tsIcon2 from '../../asstes/imagea/3-3.png'
import tsIcon3 from '../../asstes/imagea/4-4.png'
import { InputItem, Button, WhiteSpace } from 'antd-mobile';
import { Link } from 'react-router-dom';
import { login } from '../../api/apis'
export default class Login extends Component {
    state = {
        acc: '', //账号
        pwd: '', // 密码
        error: 'none',
    }
    render() {
        var { acc, pwd, error } = this.state
        return (
            <div id='box'>
                <p><img className='imgs' src={tsIcon} alt="" /></p>
                <p><img className='imgs' src={tsIcon1} alt="" /></p>
                <div>
                    <InputItem clear value={acc} onChange={this.accChange} type="text" placeholder="请输入手机号"><img src={tsIcon2} alt="" /></InputItem>
                </div>
                <div>
                    <InputItem clear value={pwd} onChange={this.pwdChange} type="password" placeholder="请输入密码"><img src={tsIcon3} alt="" /></InputItem>
                </div>
                <p style={{ display: error, color: "#f00" }}>账号或密码错误</p>
                <WhiteSpace size="sm" />
                <Button onClick={this.click}>登录</Button>
                <p className='text'>
                    <span><Link to='/reg'>手机快速注册</Link></span>
                    <span>忘记密码?</span>
                </p>
            </div>
        );
    }

    click = () => {
        if (this.isclick) return
        this.isclick = true
        setTimeout(() => {
            this.isclick = false
        }, 2000)
        login(this.state.acc, this.state.pwd)
            .then(res => {
                console.log(res);
                if (res.status === 200) {
                    if (res.data === 'ok') {
                        this.props.history.push('/')
                    } else {
                        this.setState({
                            error: 'block'
                        })
                    }
                }
            })
    }
    accChange=(val)=> {
        this.setState({
            acc: val
        })
    }
    pwdChange=(val)=> {
        this.setState({
            pwd: val
        })
    }

}
