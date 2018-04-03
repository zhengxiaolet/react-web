/**
 * Created by rong on 2018/3/21.
 */
import React, {PureComponent} from 'react'
import { connect } from 'react-redux';
import { Menu, Icon, Layout, Badge, Popover } from 'antd';
import * as cache from "utils/cache";
import styles from './FlexNav.scss';


export default class extends PureComponent {
    state = {
        num:'1'
    };
    componentDidMount() {

    };
    //锚点
    scrollToAnchor = (anchorName) => {
        if (anchorName) {
            // 找到锚点
            console.log(anchorName)
            let anchorElement = document.getElementById(anchorName);
            console.log(anchorElement)
            // 如果对应id的锚点存在，就跳转到锚点
            if(anchorElement) {
                anchorElement.scrollIntoView();
            }
        }
    };
    //导航状态
    styleState = (e) => {
        this.setState({
            num:e
        })
    };
    render() {
        const {anchor1,anchor2,anchor3,anchor4,text1,text2,text3,text4} = this.props;
        return (
            <div className={`${styles.flexNav}`}>
                <div className={`flex-wrp flex-between width1200` }>
                    <a href={anchor1} onClick={()=>{this.styleState('1');this.scrollToAnchor(anchor1)}} className={this.state.num == '1' ? `${styles.tabs} ${styles.pitchOn}` : `${styles.tabs}`}>{text1}</a>
                    <a href={anchor2} onClick={()=>this.styleState('2')} className={this.state.num == '2' ? `${styles.tabs} ${styles.pitchOn}` : `${styles.tabs}`}>{text2}</a>
                    <a href={anchor3} onClick={()=>this.styleState('3')} className={this.state.num == '3' ? `${styles.tabs} ${styles.pitchOn}` : `${styles.tabs}`}>{text3}</a>
                    <a href={anchor4} onClick={()=>this.styleState('4')} className={this.state.num == '4' ? `${styles.tabs} ${styles.pitchOn}` : `${styles.tabs}`}>{text4}</a>
                </div>
            </div>
        )
    }
}

