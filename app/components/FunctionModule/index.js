import React from 'react';
import { Anchor } from 'antd';
const { Link } = Anchor;
import styles from './style.scss';
import DataShow from 'components/DataShow'
import Footer from 'components/Footer';

class ComponentCenter extends React.Component {
    state = {

    }

    componentWillMount() {
        console.log(this.props.infoDatas)
    }

    render() {
        const {title,Introduction,bannerImg,data1,data2,data3,data4} = this.props.infoDatas
        return (
            <div className={styles.ComponentCenter}>
                <div className={styles.headBox}>
                    <div className={`flex-wrp flex-between ${styles.main}`}>
                        <div className={styles.leftBox}>
                            <div className={styles.titles}>{title}</div>
                            <div className={styles.content}>{Introduction}</div>
                        </div>
                        <div className={styles.rightBox}>
                            <img className="w100" src={bannerImg}/>
                        </div>
                    </div>
                </div>
                <div className={styles.flexNav}>
                    <Anchor className="width1200">
                        <Link href="#main1" title="产品特性"/>
                        <Link href="#main2" title="产品功能"/>
                        <Link href="#main3" title="应用场景"/>
                        <Link href="#main4" title="帮助文档"/>
                    </Anchor>
                </div>

                <div className={`width1200 ${styles.contentBox}`}>
                    <div id="main1">
                        <DataShow title="产品特性" list={data1} showType='2'/>
                    </div>
                    <div id="main2">
                        <DataShow title="产品功能" list={data2} showType='2'/>
                    </div>
                    <div id="main3">
                        <DataShow title="应用场景" list={data3} showType='2'/>
                    </div>
                    <div id="main4">
                        <DataShow title="帮助文档" hrefData={data4} showType='3'/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ComponentCenter;
