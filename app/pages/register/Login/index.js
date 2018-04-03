import React, {PureComponent} from "react";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { connect } from 'react-redux';
import {globalMessage} from 'utils'
import Particles from 'react-particles-js';
const FormItem = Form.Item;

@connect(({gstates})=> {
    return {gstates}
})

@Form.create()

export default class extends PureComponent {

    state = {
        loading: false,
        name: '',
        pwd: '',
    }
    handleNameBlur = (e) => {
        const value = e.target.value;
        this.setState({
            name: value
        });
    };
    handlePwdBlur = (e) => {
        const value = e.target.value;
        this.setState({
            pwd: value
        });
    };
    handleSubmit = (e) => {
        // this.props.router.push('/app/home');
        e.preventDefault();
        const {name,pwd}=this.state;
        if (name == "") {
            globalMessage("请输入用户名", "warning")
        } else if (pwd == "") {
            globalMessage("请输入密码", "warning")
        } else {
            globalMessage("登录成功", "success")
        }
        //this.props.form.validateFields((err, values) => {
        //
        //});
    };

    componentWillMount() {

    }

    componentWillReceiveProps(nextProps) {
        const { spinState } = nextProps.gstates;
        const { loading } = this.state;
        if (spinState != null && loading == true) {
            this.setState({loading: false})
        }
        // return false
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
                    <div className="login-form">
                        <div className="login-logo">
                            <span>登录</span>
                        </div>
                        <Form onSubmit={this.handleSubmit}>
                            <FormItem>
                                <Input placeholder="用户名" style={{fontSize:"13px"}}
                                       onChange={this.handleNameBlur}/>
                            </FormItem>
                            <FormItem>
                                <Input type="password" placeholder="密码" style={{fontSize:"13px"}}
                                       onChange={this.handlePwdBlur}/>
                                <Checkbox style={{fontSize:"12px"}}>记住我</Checkbox>
                                <a className="login-form-forgot" href="#/register/ResetPwdOne"
                                   style={{float: 'right',fontSize:"12px"}}>忘记密码</a>
                            </FormItem>
                            <FormItem>
                                <Input placeholder="验证码" style={{width:'70%'}} onChange={this.handleCodeBlur}/>
                                <img />

                            </FormItem>
                            <FormItem>
                                <Button loading={this.state.loading} type="primary" htmlType="submit"
                                        className="login-form-button" style={{width: '100%',borderRadius:"32px"}}>
                                    登录
                                </Button>
                            </FormItem>
                        </Form>

                        <div style={{"textAlign":"center"}}>
                            <a href="#/register/Register" style={{"textDecoration":"underline"}}>还未注册？去注册</a>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}


