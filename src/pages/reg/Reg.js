import React, { Component } from 'react'
import './reg.scss'

import { InputItem, WhiteSpace, Checkbox, Button } from 'antd-mobile';
import { Link } from 'react-router-dom'
import { reg } from '../../api/apis'
import { infonum } from '../../api/apis'
const CheckboxItem = Checkbox.CheckboxItem;

export default class Reg extends Component {
    state = {
        acc: '', //账号
        pwd: '', // 密码
        error: 'none',
        error1: 'none',
        error2: 'none',
        error3: 'none',
        error4: 'none',
        show: '',
        info:'',
        ture:false
    }
    render() {
        var { acc, pwd, error, error1, error2,error3, error4, show,info ,ture} = this.state
        return (
            <div id='box1'>
                <div><InputItem clear value={acc} onChange={this.accChange} type="text" placeholder="请输入手机号"></InputItem></div>
                <p style={{ display: error1, color: "#f00" }}>用户名不能为空</p>
                <div><InputItem clear value={pwd} onChange={this.pwdChange} type="password" placeholder="请输入密码"></InputItem></div>
                <p style={{ display: error2, color: "#f00" }}>密码不能为空</p>
                <div className='span'><InputItem clear value={info} onChange={this.infoChange} type="text" placeholder="输入验证码"></InputItem>
                {
                    this.state.show
                        ?
                        <span className='spante'>{show}</span>
                        :
                        <span className='spante' onClick={this.info}>获取验证码</span>
                }
                </div>
              
                <p style={{ display: error3, color: "#f00" }}>验证码不对</p>
                <div>
                    <CheckboxItem checked={ture} onChange={this.tureChange}>我已同意<span>《用户隐私》及《隐私权政策》</span></CheckboxItem>
                </div>
                <p style={{ display: error4, color: "#f00" }}>请勾选我已同意</p>
                <WhiteSpace size="ms" />
                <p style={{ display: error, color: "#f00" }}>人品问题</p>
                <Button onClick={this.click.bind(this)}>注册</Button>
                <p className='text'>
                    <span><Link to='/login'>已有账号</Link></span>
                </p>
            </div>
        )
    }
    click() {

        reg(this.state.acc, this.state.pwd)
            .then(res => {
                if (this.state.acc == '') {
                    this.setState({
                        error1: 'block'
                    })
                    return
                }
                if (this.state.pwd == '') {
                    this.setState({
                        error2: 'block'
                    })
                    return
                }
                if (this.state.info == '') {
                    this.setState({
                        error3: 'block'
                    })
                    return
                }
                if (this.state.info != this.state.show) {
                    this.setState({
                        error3: 'block'
                    })
                    return
                }
                if (this.state.ture != true) {
                    this.setState({
                        error4: 'block'
                    })
                    return
                }
                if (res.status === 200) {
                    if (res.data === 'ok') {
                        this.props.history.push('/login')
                    } else {
                        this.setState({
                            error: 'block'
                        })
                    }
                }
            })
    }
    accChange = (val) => {
        this.setState({
            acc: val
        })
    }
    pwdChange = (val) => {
        this.setState({
            pwd: val
        })
    }
    infoChange=(val)=>{
        this.setState({
            info: val
        })
    }
    tureChange=(val)=>{
        this.setState({
            ture:true
        })
    }
    info = () => {
        if (this.isclick) return
        this.isclick = true
        setTimeout(() => {
            this.isclick = false
        }, 2000)
        infonum()
            .then(res => {
                this.setState({
                    show: res.data
                })
            })
    }

}
