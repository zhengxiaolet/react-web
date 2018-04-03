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
        hashHistory.push("/register/ResetPwdTwo")
    };
    componentWillMount() {

    }
    componentWillReceiveProps(nextProps) {
    }

    render() {
        return (
            <div className="containerLogin">
                <div className={`width1200 loginTop`}>开发平台-忘记密码</div>
                <div className='resetPwdOne'>
                    <div className='title'>重置密码</div>
                    <div className='explain'>
                        <p>我们将发送一封密码重置邮件到你的邮箱点击按钮即可重置密码</p>
                    </div>
                    <div className='content'>
                        <div className='row1'>
                            <span>登录邮箱:</span>
                            <Input type="text"/>
                        </div>
                        <div className='row2'>
                            <span>验证码:</span>
                            <img src="" alt=""/>
                        </div>
                        <div className='row3'>
                            <Button onClick={this.link}>发送邮件验证码</Button>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}


