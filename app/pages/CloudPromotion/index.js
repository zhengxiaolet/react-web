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
import ytgBg01 from 'assets/images/ytgBg01.png'
import ytgBg02 from 'assets/images/ytgBg02.png'
import ytgBg03 from 'assets/images/ytgBg03.png'
export default class extends PureComponent {
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
                        top:'0',
                        left:'0',
                        width: '100%'
                    }}
                />
                <HeaderMenu hasLogo pageName="cloudPromotion"/>
                <div className={styles.bannerWrap}>
                    <div className={styles.banner}>
                        <div className={styles.bannerFont}>
                            <h2>保险云推广合作</h2>
                            <p>完整的保险产品线，高额的推广费</p>
                        </div>
                    </div>
                </div>


                <div className={styles.ct}>
                    <div className={styles.ctContent}>
                        <div className={styles.ctContentT}>
                            <p>完整的保险产品线，高额的推广费</p>
                            <p className={styles.ctContentTB}>
                                商户可根据自己的受众用户任意选择产品
                            </p>
                        </div>
                        <div className={`flex-wrp flex-flow-row flex-align-center ${styles.pi}`}>
                            <div className={styles.piSub}>
                                <img src={ytgBg01}/>
                                <div className={`flex-wrp flex-flow-row flex-align-center ${styles.piSubC}`}>
                                    <div className={styles.piSubCL}>
                                        <div>君康尊享金生年金保险</div>
                                        <div className={styles.piSubCLB}>
                                            尊享今生，金生尊享
                                        </div>
                                    </div>
                                    <div className={styles.piSubCR}>
                                        <span>89元</span>
                                        <span className={styles.piSubCRB}>
                                            起
                                        </span>
                                    </div>

                                </div>
                                <div className={styles.piSubBtn}>立即推广</div>
                            </div>
                            <div className={styles.piSubD}></div>
                            <div className={styles.piSub}>
                                <img src={ytgBg02}/>
                                <div className={`flex-wrp flex-flow-row flex-align-center ${styles.piSubC}`}>
                                    <div className={styles.piSubCL}>
                                        <div>君康尊享金生年金保险</div>
                                        <div className={styles.piSubCLB}>
                                            尊享今生，金生尊享
                                        </div>
                                    </div>
                                    <div className={styles.piSubCR}>
                                        <span>89元</span>
                                        <span className={styles.piSubCRB}>
                                            起
                                        </span>
                                    </div>

                                </div>
                                <div className={styles.piSubBtn}>立即推广</div>
                            </div>
                            <div className={styles.piSubD}></div>
                            <div className={styles.piSub}>
                                <img src={ytgBg03}/>
                                <div className={`flex-wrp flex-flow-row flex-align-center ${styles.piSubC}`}>
                                    <div className={styles.piSubCL}>
                                        <div>君康尊享金生年金保险</div>
                                        <div className={styles.piSubCLB}>
                                            尊享今生，金生尊享
                                        </div>
                                    </div>
                                    <div className={styles.piSubCR}>
                                        <span>89元</span>
                                        <span className={styles.piSubCRB}>
                                            起
                                        </span>
                                    </div>

                                </div>
                                <div className={styles.piSubBtn}>立即推广</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.ctBtn}>
                        查看更多
                    </div>
                </div>
                <div className={styles.cf}>
                    <div className={styles.ctContent}>
                        <div className={styles.ctContentT}>
                            <p>无需开发，即刻接入</p>
                            <p className={styles.ctContentTB}>
                                商户可根据自己的受众用户任意选择产品
                            </p>
                        </div>
                        <div className={`flex-wrp flex-flow-row flex-align-center ${styles.ii}`}>
                            <div className={styles.iiSub}>
                                <div className={styles.iiSubOne}>
                                    H5
                                </div>
                                <div className={styles.iiSubTwoA}>

                                </div>
                                <div className={styles.iiSubThr}>
                                    无需开发
                                </div>
                                <div className={styles.iiSubFou}>
                                    一个链接轻松接入
                                </div>
                                <div className={styles.iiSubFiv}>
                                    体验一下
                                </div>
                            </div>
                            <div className={styles.iiSubD}></div>
                            <div className={styles.iiSub}>
                                <div className={styles.iiSubOne}>
                                    计划书
                                </div>
                                <div className={styles.iiSubTwoB}>

                                </div>
                                <div className={styles.iiSubThr}>
                                    无需开发
                                </div>
                                <div className={styles.iiSubFou}>
                                    一个链接轻松接入
                                </div>
                                <div className={styles.iiSubFiv}>
                                    体验一下
                                </div>
                            </div>
                            <div className={styles.iiSubD}></div>
                            <div className={styles.iiSub}>
                                <div className={styles.iiSubOne}>
                                    API
                                </div>
                                <div className={styles.iiSubTwoC}>

                                </div>
                                <div className={styles.iiSubThr}>
                                    无需开发
                                </div>
                                <div className={styles.iiSubFou}>
                                    一个链接轻松接入
                                </div>
                                <div className={styles.iiSubFiv}>
                                    体验一下
                                </div>
                            </div>
                            <div className={styles.iiSubD}></div>
                            <div className={styles.iiSub}>
                                <div className={styles.iiSubOne}>
                                    支付体验
                                </div>
                                <div className={styles.iiSubTwoD}>

                                </div>
                                <div className={styles.iiSubThr}>
                                    无需开发
                                </div>
                                <div className={styles.iiSubFou}>
                                    一个链接轻松接入
                                </div>
                                <div className={styles.iiSubFiv}>
                                    体验一下
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                <div className={styles.contentWrap}>
                    <div className={styles.generalize}>
                        <h3>保险推广合作</h3>
                        <div className={styles.ytgBgSix}></div>
                        <div className={styles.ytgBgSixC}>
                            <div className={styles.ytgBgSixCL}>
                                <p className={styles.ytgBgSixCT}>01 注册认证</p>
                                <p className={styles.ytgBgSixCB}>最快1天内企业认证</p>
                            </div>
                            <div className={styles.ytgBgSixCC}>
                                <p className={styles.ytgBgSixCT}>02 接入保险产品</p>
                                <p className={styles.ytgBgSixCB}>一个链接轻松接入您的客户端</p>
                            </div>
                            <div className={styles.ytgBgSixCR}>
                                <p className={styles.ytgBgSixCT}>03 获得推广费</p>
                                <p className={styles.ytgBgSixCB}>客户购买后立即产生推广费</p>
                            </div>
                        </div>

                        <div  className={styles.moreJoin}>
                            <a  className={styles.join}>立即加入</a>
                        </div>
                    </div>
                </div>
                {/*<div className={styles.footerD}></div>*/}
                <div className={styles.cfooter}>
                    <Footer />

                </div>
            </div>

        )
    }
}



