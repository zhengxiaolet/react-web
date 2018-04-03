
import React from 'react';
import styles from './style.scss';
import HeaderMenu from 'components/HeaderMenu';
import Footer from 'components/Footer';
import FunctionModule from 'components/FunctionModule';
import ComponentCenter_banner from 'assets/images/ComponentCenter_banner.png'

import icons1_1 from 'assets/images/commonIcon1.png'
import icons1_2 from 'assets/images/commonIcon2.png'
import icons1_3 from 'assets/images/commonIcon3.png'
import icons2_1 from 'assets/images/commonIcon1.png'
import icons2_2 from 'assets/images/commonIcon2.png'
import icons2_3 from 'assets/images/commonIcon3.png'
import icons2_4 from 'assets/images/commonIcon4.png'
import icons2_5 from 'assets/images/commonIcon5.png'
import icons3_1 from 'assets/images/commonIcon6.png'
import icons3_2 from 'assets/images/commonIcon7.png'
import icons3_3 from 'assets/images/commonIcon8.png'
import icons3_4 from 'assets/images/commonIcon9.png'
import icons3_5 from 'assets/images/commonIcon10.png'
import icons3_6 from 'assets/images/commonIcon11.png'

class ComponentCenter extends React.Component {
    state = {
        infoDatas:{
            title:'短信服务',
            Introduction:'支持快速发送短信验证码、短信通知等场景。三网合一专属通道，确保服务稳定性。',
            bannerImg: ComponentCenter_banner,
            data1:[
                {
                    icons: icons1_1,
                    titles:'快速稳定',
                    content:'快速直达，专属通道；大容量、高并发；99.9%到达率；电信级运维'
                },
                {
                    icons: icons1_2,
                    titles:'高并发处理',
                    content:'支持单队列并发读写访问，自由调整并发度，时间窗口内信息独享'
                },
                {
                    icons: icons1_3,
                    titles:'消息堆积处理',
                    content:'通过队列对用户任务请求压力实现削峰填谷，进而降低系统峰值压力'
                }

            ],
            data2:[
                {
                    icons: icons2_1,
                    titles:'短信通知',
                    content:'99%到达率，电信级运维保障，实时监控自动切换。大容量高并发支持。'
                },
                {
                    icons: icons2_2,
                    titles:'短信验证码',
                    content:'5秒可达，三网合一专属通道。变量灵活，支持带入变量，内容灵活，可支持各业务场景。'
                },

                {
                    icons: icons2_3,
                    titles:'推广短信',
                    content:'支持多种推广短信，提升企业产品曝光率。业务推广、新产品宣讲、会员关怀等短信发送。'
                },
                {
                    icons: icons2_4,
                    titles:'异步通知',
                    content:'后端服务处理完成任务时通知用户。减少用户Web前端和后端服务间大量不必要的轮询请求。'
                },
                {
                    icons: icons2_5,
                    titles:'数据统计',
                    content:'可查看请求量、发送成功量、失败量等统计数据；通过日期、手机号等维度，查看发送详情。'
                },
            ],
            data3:[
                {
                    icons: icons3_1,
                    titles:'短信通知',
                    content:'99%到达率，电信级运维保障，实时监控自动切换。大容量高并发支持。'
                },
                {
                    icons: icons3_2,
                    titles:'短信验证码',
                    content:'5秒可达，三网合一专属通道。变量灵活，支持带入变量，内容灵活，可支持各业务场景。'
                },

                {
                    icons: icons3_3,
                    titles:'推广短信',
                    content:'支持多种推广短信，提升企业产品曝光率。业务推广、新产品宣讲、会员关怀等短信发送。'
                },
                {
                    icons: icons3_4,
                    titles:'异步通知',
                    content:'后端服务处理完成任务时通知用户。减少用户Web前端和后端服务间大量不必要的轮询请求。'
                },
                {
                    icons: icons3_5,
                    titles:'数据统计',
                    content:'可查看请求量、发送成功量、失败量等统计数据；通过日期、手机号等维度，查看发送详情。'
                },
                {
                    icons: icons3_6,
                    titles:'数据统计',
                    content:'可查看请求量、发送成功量、失败量等统计数据；通过日期、手机号等维度，查看发送详情。'
                }
            ],
            data4:{
                hrefs:'http://www.baidu.com',
                text:'短信接口说明文档'
            }
        }

    }

    render() {
        return (
            <div className={styles.ComponentCenter}>
                <HeaderMenu hasLogo pageName='componentCenter'/>
                <FunctionModule infoDatas={this.state.infoDatas}/>
                <Footer/>
            </div>
        )
    }
}

export default ComponentCenter;
