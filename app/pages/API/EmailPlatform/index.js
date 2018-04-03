/**
 * Created by rong on 2018/3/21.
 */

import React, {PureComponent} from "react";
import { Form, Icon, Input, Button, Checkbox,Tabs,Affix } from 'antd';
import { connect } from 'react-redux';
import HeaderMenu from 'components/HeaderMenu';
import Footer from 'components/Footer';
import FlexNav  from 'components/FlexNav';
import styles  from '../style.scss';


const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
@connect(({gstates})=>{
    return {gstates}
})

@Form.create()

export default class extends PureComponent {

    state = {
        num:'1',
        navTop:false,
        originalState:false,
    };
    componentWillMount() {

    }
    componentDidMount() {
        window.addEventListener('scroll',this.handleScroll);
        this.offsetTop = 0;
        setTimeout(function(){
            this.$tab = this.refs.tab;
            if(this.$tab){
                this.offsetTop = this.$tab.offsetTop;
            }
        }.bind(this),1000);

    };
    componentWillReceiveProps(nextProps) {
        window.removeEventListener('scroll', this.handleScroll);

    };
    componentDidUpdate() { // 组件更新结束之后执行，在初始化render时不执行
    }
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
            });
        }
        if(sTop < this.offsetTop){
            this.setState({
                navTop:false
            })
        }
    };
    flexState=()=>{
    };
    render() {
        return (
            <div  className={`fullHeight ${styles.APIcontent}`}>
                <HeaderMenu pageName="/API"/>
                <div className={styles.headBox} >
                    <div className={`flex-wrp flex-between ${styles.main}`}>
                        <div className={styles.leftBox}>
                            <div className={styles.titles}>邮件平台</div>
                            <div className={styles.content}>采用开放平台架构，可向多系统提供邮件发送服务，主要解决企业内各系统发送方式不统一、邮件模板分散、难以统计、权限无法控制的弊端。
                                范围涉及实时发送、批量发送、定时发送、结果查询；系统通过提供JAR包组件、标准对接规范的方式提供服务。</div>
                        </div>
                        <div className={styles.rightBox}>
                            <img className="w100" src={require("assets/images/ComponentCenter_banner.png")} />
                        </div>
                    </div>
                </div>
                <div ref="tab" className={this.state.navTop == true? `${styles.flexNav} ${styles.flexStyle}` : `${styles.flexNav}`}>
                    <div className={`flex-wrp width1200` } >
                        <p onClick={()=>this.styleState('1')} className={this.state.num == '1' ? `${styles.tabs} ${styles.pitchOn}` : `${styles.tabs}`}>系统介绍</p>
                        <p onClick={()=>this.styleState('2')} className={this.state.num == '2' ? `${styles.tabs} ${styles.pitchOn}` : `${styles.tabs}`}>单笔发送</p>
                        <p onClick={()=>this.styleState('3')} className={this.state.num == '3' ? `${styles.tabs} ${styles.pitchOn}` : `${styles.tabs}`}>单笔发送结果查询</p>
                        <p onClick={()=>this.styleState('4')} className={this.state.num == '4' ? `${styles.tabs} ${styles.pitchOn}` : `${styles.tabs}`}>批量发送</p>
                        <p onClick={()=>this.styleState('5')} className={this.state.num == '5' ? `${styles.tabs} ${styles.pitchOn}` : `${styles.tabs}`}>批量发送结果查询</p>
                    </div>
                </div>
                {this.state.num == '1' &&
                <iframe className={`flex-wrp flex-between width1200 marginBottom` } src="#/System" frameBorder="0" height="4197px" scrolling="no"></iframe>
                }
                {this.state.num == '2' &&
                <iframe className={`flex-wrp flex-between width1200 marginBottom` } src="#/Dbfsjk" frameBorder="0" height="1067px" scrolling="no"></iframe>
                }
                {this.state.num == '3' &&
                <iframe className={`flex-wrp flex-between width1200 marginBottom` } src="#/Dbfscx" frameBorder="0" height="923px" scrolling="no"></iframe>
                }
                {this.state.num == '4' &&
                <iframe className={`flex-wrp flex-between width1200 marginBottom` } src="#/Plfsjk" frameBorder="0" height="1139px" scrolling="no"></iframe>
                }
                {this.state.num == '5' &&
                <iframe className={`flex-wrp flex-between width1200 marginBottom` } src="#/Plfscx" frameBorder="0"  height="941px" scrolling="no"></iframe>
                }
                <Footer/>
            </div>
        );
    }
}


