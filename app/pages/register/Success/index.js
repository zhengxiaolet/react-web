/**
 * Created by user on 2018/3/22.
 */
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
        hashHistory.push("/register/Login")
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
                    <div className='explain'>
                        <p>密码重置成功，3s后转入登录页面</p>
                    </div>
                    <Button  onClick={this.link}>立即登录</Button>
                </div>
                <div className='resetPwdOne'>
                    <div className='title'>注册</div>
                    <div className='explain'>
                        <p>恭喜您，注册已完成！</p>
                        <p> 30秒后自动登录</p>
                    </div>
                    <Button  onClick={this.link}>立即登录</Button>
                </div>
            </div>

        );
    }
}


