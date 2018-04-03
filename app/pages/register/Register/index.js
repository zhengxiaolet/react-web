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
import {Link} from 'react-router'
const FormItem = Form.Item;

export default class extends PureComponent {

    state = {
        loading:false,

    }
    Checkbox=(e)=>{
        console.log(`${e.target.checked}`);
    }
    componentWillMount() {

    }
    componentWillReceiveProps(nextProps) {
    }

    render() {
        return (
            <div className="w100">
                <img className="loginBanner" src="assets/images/login_banner.png" alt=""/>

                <div className="width1200 loginCon">
                    <div className="loginTop">
                        <img src="assets/images/logo_ja.png" alt=""/>

                        <div className="span1">开放平台</div>
                        <div className="span2"></div>
                        <div className="span3">返回首页</div>
                    </div>
                    <div className="login-form" style={{"heigth":"500px"}}>
                        <div className="login-logo">
                            <span>注册</span>
                        </div>
                        <Form onSubmit={this.handleSubmit}>
                            <FormItem>
                                <Input placeholder="邮箱地址" style={{fontSize:"13px"}}
                                       onChange={this.handleNameBlur}/>
                            </FormItem>
                            <FormItem>
                                <Input placeholder="验证码" style={{width:'70%'}} onChange={this.handleCodeBlur}/>
                                <img />
                            </FormItem>
                            <FormItem>
                                <Input placeholder="登录密码" style={{fontSize:"13px"}}
                                       onChange={this.handleNameBlur}/>
                            </FormItem>
                            <FormItem>
                                <Input placeholder="确认密码" style={{fontSize:"13px"}}
                                       onChange={this.handleNameBlur}/>
                            </FormItem>
                            <FormItem>
                                <Checkbox style={{fontSize:"12px"}}>我已阅读并同意《平台注册服务协议》</Checkbox>
                            </FormItem>
                            <FormItem>
                                <Button loading={this.state.loading} type="primary" htmlType="submit"
                                        className="login-form-button" style={{width: '100%',borderRadius:"32px"}}>
                                    注册
                                </Button>
                            </FormItem>
                        </Form>
                    </div>
                </div>
            </div>

        );
    }
}
