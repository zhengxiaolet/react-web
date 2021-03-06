/**
 * Created by Administrator on 2018/3/24.
 */

import React, {PureComponent} from "react";
import { Form, Icon, Input, Button, Checkbox, Anchor } from 'antd';
import { connect } from 'react-redux';
import HeaderMenu from 'components/HeaderMenu';
import Footer from 'components/Footer';
import FlexNav  from 'components/FlexNav';
import styles from '../style.scss';

const FormItem = Form.Item;
@connect(({gstates})=>{
    return {gstates}
})

@Form.create()

export default class extends PureComponent {

    state = {
        num:'1',
        navTop:false,
    };
    componentWillMount() {

    }
    componentDidMount() {
        this.$tab = this.refs.tab;
        this.offsetTop = 0;
        setTimeout(function(){
            if(this.$tab){
                this.offsetTop = this.$tab.offsetTop;
                window.addEventListener('scroll',this.handleScroll);
            }
        }.bind(this),1000)
    };
    componentWillReceiveProps(nextProps) {
        window.removeEventListener('scroll', this.handleScroll);
    };
    //导航状态
    styleState = (e) => {
        this.setState({
            num:e
        })
    };
    handleScroll = (e) => {
        let sTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop; //滚动条滚动距离
        if(!this.state.navTop && sTop >= this.offsetTop){ // 滚动距离大于等于元素距离
            this.setState({
                navTop: true
            })
        }
        if(sTop < this.offsetTop){
            this.setState({
                navTop:false
            })
        }
    };
    render() {
        return (
            <div  className={`fullHeight ${styles.APIcontent}`}>
                <HeaderMenu pageName="/API"/>
                <div className={styles.headBox} >
                    <div className={`flex-wrp flex-between ${styles.main}`}>
                        <div className={styles.leftBox}>
                            <div className={styles.titles}>监控平台</div>
                            <div className={styles.content}>监控平台可向多应用提供监控预警服务，主要解决交易闭环问题，范围涉及为实时交易监控、异步交易监控、批处理交易监和自定义监控。 横向打通短信、邮件、微信和工作流系统，通过多系统集成完成交易闭环的跟踪和处理。</div>
                        </div>
                        <div className={styles.rightBox}>
                            <img className="w100" src={require("assets/images/ComponentCenter_banner.png")} />
                        </div>
                    </div>
                </div>
                <div ref="tab" className={this.state.navTop == true ? `${styles.flexNav} ${styles.flexStyle}` : `${styles.flexNav}`}>
                    <div className={`flex-wrp width1200` } >
                        <p onClick={()=>this.styleState('1')} className={this.state.num == '1' ? `${styles.tabs} ${styles.pitchOn}` : `${styles.tabs}`}>系统介绍</p>
                        <p onClick={()=>this.styleState('2')} className={this.state.num == '2' ? `${styles.tabs} ${styles.pitchOn}` : `${styles.tabs}`}>预警上报</p>
                        <p onClick={()=>this.styleState('3')} className={this.state.num == '3' ? `${styles.tabs} ${styles.pitchOn}` : `${styles.tabs}`}>客户端上报</p>
                    </div>
                </div>
                {this.state.num == '1' &&
                <iframe className={`flex-wrp flex-between width1200 marginBottom` } src="#/monitoringPlatformSystem" frameBorder="0" height="4197px" scrolling="no"></iframe>
                }
                {this.state.num == '2' &&
                <iframe className={`flex-wrp flex-between width1200 marginBottom` } src="#/yjsbjk" frameBorder="0" height="905px" scrolling="no"></iframe>
                }
                {this.state.num == '3' &&
                <iframe className={`flex-wrp flex-between width1200 marginBottom` } src="#/khdsbjk" frameBorder="0" height="229px" scrolling="no"></iframe>
                }
                <Footer/>
            </div>
        );
    }
}


