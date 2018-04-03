/**
 * Created by user on 2018/3/22.
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
        hashHistory.push("/register/Success")
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
                        <p>重新输入密码并确认即可完成密码重置</p>
                    </div>
                    <div className='content'>
                        <div className='row1'>
                            <span>密码:</span>
                            <Input type="text"/>
                        </div>
                        <div className='row2'>
                            <span>确认密码:</span>
                            <Input type="text"/>
                        </div>
                        <div className='row3'>
                            <Button onClick={this.link}>提交</Button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}


