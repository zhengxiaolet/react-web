
import React from 'react';
import { Anchor } from 'antd';
const { Link } = Anchor;
import styles from './style.scss';
import DataShow from 'components/DataShow'
import HeaderMenu from 'components/HeaderMenu';
import Footer from 'components/Footer';

import DocumentCenterBanner from 'assets/images/DocumentCenterBanner.png'

import icons1 from 'assets/images/DocumentCenterIcon1.png'
import icons2 from 'assets/images/DocumentCenterIcon2.png'
import icons3 from 'assets/images/DocumentCenterIcon3.png'

class DocumentCenter extends React.Component {
    state = {
        data1:[
            {
                icons: icons1,
                titles:'收银台',
                content:'快速直达，专属通道； 大容量、高并发； 99.9%到达率；电信级运维',
                linkUrl:'/cashierPlatform'
            },
            {
                icons: icons2,
                titles:'监控',
                content:'快速直达，专属通道； 大容量、高并发； 99.9%到达率；电信级运维',
                linkUrl:'/MonitoringPlatform'
            },
            {
                icons: icons3,
                titles:'邮件',
                content:'快速直达，专属通道； 大容量、高并发； 99.9%到达率；电信级运维',
                linkUrl:'/EmailPlatform'
            }

        ],
        data2:[
            {
                icons: icons1,
                titles:'报表',
                content:'快速直达，专属通道； 大容量、高并发； 99.9%到达率；电信级运维'
            },
            {
                icons: icons2,
                titles:'监控',
                content:'快速直达，专属通道； 大容量、高并发； 99.9%到达率；电信级运维'
            },
            {
                icons: icons3,
                titles:'邮件',
                content:'快速直达，专属通道； 大容量、高并发； 99.9%到达率；电信级运维'
            },
            {
                icons: icons3,
                titles:'邮件',
                content:'快速直达，专属通道； 大容量、高并发； 99.9%到达率；电信级运维'
            }

        ]
    }
    render() {
        return (
            <div className={styles.ComponentCenter}>
            <HeaderMenu hasLogo pageName='documentCenter'/>
                <div className={styles.headBox}>
                    <div className={`flex-wrp flex-between ${styles.main}`}>
                        <div className={styles.leftBox}>
                            <div className={styles.titles}>文档中心</div>
                            <div className={styles.content}>文档中心包含开放平台所以平台接入 业务说明，以及文档</div>
                        </div>
                        <div className={`flex-wrp flex-align-center ${styles.rightBox}`}>
                            <img className="w100" src={DocumentCenterBanner} />
                        </div>
                    </div>
                </div>
                <div className={styles.flexNav}>
                    <Anchor className="width1200">
                        <Link href="#main1" title="云推广" />
                        <Link href="#main2" title="功能组件" />
                        <Link href="#main3" title="数据组件" />
                    </Anchor>
                </div>

                <div className={`width1200 ${styles.contentBox}`}>
                    <div id="main1">
                        <DataShow title="云推广" list={this.state.data1}  showType='1'/>
                    </div>
                    <div id="main2">
                        <DataShow title="功能组件" list={this.state.data2}  showType='1'/>
                    </div>

                    <div id="main3">
                        <DataShow title="数据组件" list={this.state.data2}  showType='1'/>
                    </div>

                </div>
                <Footer/>
            </div>
        )
    }
}

export default DocumentCenter;
