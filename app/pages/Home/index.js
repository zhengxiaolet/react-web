/**
 * Created by Administrator on 2018/3/20.
 */
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {IMGADDRESS} from '../../utils/config';
import styles from './style.scss';
import Particles from 'react-particles-js';
import HeaderMenu from 'components/HeaderMenu';
import Footer from 'components/Footer';
import {hashHistory} from 'react-router'
export default class extends PureComponent {

    goNext = (str)=> {
        hashHistory.push(str)
    };
    link= ()=>{
        window.location.href = 'http://test.jklife.com:8888/jakfptht180323/#/';
    };
    render() {
        return (
            <div className={styles.wrap}>
                <Particles
                    params={{
                        particles: {
                            "number": {
                              "value": 80,
                              "density": {
                                "enable": true,
                                "value_area": 800
                              }
                            },
                            "color": {
                              "value": "#fff"
                            },
                            line_linked: {
                                "color": "#fb405f"
                            }
                        },
                        "interactivity": {
                                "detect_on": "canvas",
                                "events": {
                                  "onhover": {
                                    "enable": true,
                                    "mode": "grab"
                                  },
                                  "onclick": {
                                    "enable": true,
                                    "mode": "push"
                                  },
                                  "resize": true
                                },
                                "modes": {
                                  "grab": {
                                    "distance": 140,
                                    "line_linked": {
                                      "opacity": 1
                                    }
                                  },
                                  "bubble": {
                                    "distance": 400,
                                    "size": 40,
                                    "duration": 2,
                                    "opacity": 8,
                                    "speed": 3
                                  },
                                  "repulse": {
                                    "distance": 200,
                                    "duration": 0.4
                                  },
                                  "push": {
                                    "particles_nb": 4
                                  },
                                  "remove": {
                                    "particles_nb": 2
                                  }
                                }
                            }
                    }}
                    style={{
                        position:"fixed",
                        background: '#15022d',
                        //background: 'url("../../../assets/images/content.jpg") center no-repeat',
                        top:'0',
                        left:'0',
                        width: '100%'
                    }}
                />
                <HeaderMenu hasLogo pageName='home'/>
                <div className={styles.bannerWrap}>
                    <div className={styles.banner}>
                        <div className={styles.bannerFont}>
                            <h2>保险云推广合作</h2>
                            <p>全面开放推广合作，让保险创造财富</p>
                            <span onClick={()=>this.goNext('/CloudPromotion')}>查看详情</span>
                        </div>
                    </div>
                </div>
                <div className={styles.contentWrap}>
                    <div className={styles.generalize}>
                        <h3>保险推广合作</h3>
                        <div className={styles.zcrz}>
                            <p>01注册认证</p>
                            <span>最快一天内企业认证</span>
                        </div>
                        <div className={styles.bxcp}>
                            <p>02接入保险产品</p>
                            <span>一个链接轻松接入您的客户端</span>
                        </div>
                        <div className={styles.tgf}>
                            <p>03获得推广费</p>
                            <span>客户购买后立即产生推广费</span>
                        </div>
                        <div className={styles.moreJoin}>
                            <a className={styles.more}>了解更多</a>
                            <a className={styles.join} onClick={this.link}>免费加入</a>
                        </div>
                    </div>
                    <div className={styles.advantageWrap}>
                        <h3>我们的优势</h3>
                        <div className={styles.advantage}>
                            <div className={styles.science}>
                                <img src={require("assets/images/science.png")} alt=""/>
                                <p className={styles.fontTitle}>精坚的<span>技术</span>能力</p>
                                <p className={styles.fontCon}>专业的技术团队提供专业、安全、稳定的技术服务。无需专门建立一个支付团队也可搭建专属的账户系统和商户系统。</p>
                            </div>
                            <div className={styles.product}>
                                <img src={require("assets/images/product.png")} alt=""/>
                                <p className={styles.fontTitle}>优秀的<span>产品</span>设计</p>
                                <p className={styles.fontCon}>
                                    系统经由沉浸行业多年的专业人士进行设计，充分考虑了各种现实问题，简便了传统的繁琐管理。系统支持多角色、子账户管理，各种渠道数据汇总呈现，带给您快捷方便的体验。</p>

                            </div>
                            <div className={styles.service}>
                                <img src={require("assets/images/service.png")} alt=""/>
                                <p className={styles.fontTitle}>周到的专业<span>服务</span></p>
                                <p className={styles.fontCon}>系统接入方便快捷，1个工程师1个工作日即可。设有专业服务人员，7*24小时解答您的疑惑困难。</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.dockingWrap}>
                        <h3>对接方式</h3>
                        <div className={styles.docking}>
                            <div className={styles.dockingCon}>
                                <h4>H5</h4>
                                <img className={styles.img}   src={require("assets/images/h5.png")} alt=""/>
                                <p className={styles.pCon}>无需开发</p>
                                <p className={styles.pCon}>一个链接轻松接入</p>
                                <a href="" className={styles.aHref}>体验一下</a>
                            </div>
                            <div className={styles.dockingCon}>
                                <h4>计划书</h4>
                                <img className={styles.img}  src={require("assets/images/jhs.png")} alt=""/>
                                <p className={styles.pCon}>无需开发</p>
                                <p className={styles.pCon}>一个链接轻松接入</p>
                                <a href="" className={styles.aHref}>体验一下</a>
                            </div>
                            <div className={styles.dockingCon}>
                                <h4>API</h4>
                                <img className={styles.img}  src={require("assets/images/api.png")} alt=""/>
                                <p className={styles.pCon}>轻量开发</p>
                                <p className={styles.pCon}>需要具备一定备开发能力</p>
                                <a className={styles.aHref} onClick={()=>this.goNext('/DocumentCenter')}>体验一下</a>
                            </div>
                            <div className={styles.dockingCurrent}>
                                <h4>支付体验</h4>
                                <img className={styles.img} src={require("assets/images/h5.png")} alt=""/>
                                <p className={styles.pCon}>无需开发</p>
                                <p className={styles.pCon}>一个链接轻松接入</p>
                                <a href="" className={styles.aHref}>体验一下</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.jionOurWrap}>
                        <div className={styles.jionOur}>
                            <p className={styles.jionOurArr} onClick={this.link}>立即加入我们<span></span></p>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        )
    }
}



