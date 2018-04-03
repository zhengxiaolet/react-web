/**
 * Created by user on 2018/3/21.
 */
/**
 * Created by user on 2018/3/21.
 */
/**
 * Created by user on 2018/3/21.
 */

import React, {PureComponent} from "react";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { connect } from 'react-redux';
import {globalMessage} from 'utils'
import {Link,hashHistory} from 'react-router'

export default class extends PureComponent {

    state = {

    }
    link=()=>{
        hashHistory.push("/register/ResetPwdthird")
    }
    componentWillMount() {

    }
    componentWillReceiveProps(nextProps) {
    }

    render() {
        return (
            <div className="containerLogin">
                <div className={`width1200 loginTop`}>开发平台—填写验证码</div>
                <div className='resetPwdOne'>
                    <div className='title'>验证身份</div>
                    <div className='explain'>
                        <p>验证码已发送到 11111221@163.com邮件，请尽快登录你的邮箱获取。</p>
                        <p> 如果没有收到，请检查垃圾邮件</p>
                        <p> 如果还是没有收到，请返回重新填写邮箱</p>
                    </div>
                    <div className='content'>
                        <div className='row1'>
                            <span>邮箱验证码:</span>
                            <Input type="text"/>
                        </div>
                        <div className='row3'>
                            <Button onClick={this.link}>验证</Button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}


