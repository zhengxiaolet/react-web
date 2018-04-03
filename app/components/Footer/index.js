/**
 * Created by LMG on 2018/3/21.
 */
import React, {PureComponent} from 'react'
import styles from './style.scss'


export default class extends PureComponent {
    state = {
        jsonData:[
            {
                List:[
                    "产品",
                    "批量收款",
                    "单笔收款",
                    "单笔付款",
                    "姓名认证",
                    "银行卡认证",
                    "卡BIN查询",
                    "收银台",
                    "系统管理"
                ]
            }
        ]
    };

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    render() {
        const {jsonData} = this.props;
        return (
            <div className={styles.commonFooter}>
                <div className={`flex-wrp flex-flow-row flex-align-center ${styles.content}`}>
                    <li className={styles.subContent}>
                        <ul className={styles.subContentUl}>
                            <li className={styles.subContentLiT}>产品</li>
                            <li className={styles.subContentLi}>批量收款</li>
                            <li className={styles.subContentLi}>单笔收款</li>
                            <li className={styles.subContentLi}>单笔付款</li>
                            <li className={styles.subContentLi}>姓名认证</li>
                            <li className={styles.subContentLi}>银行卡认证</li>
                            <li className={styles.subContentLi}>卡BIN查询</li>
                            <li className={styles.subContentLi}>收银台</li>
                            <li className={styles.subContentLi}>系统管理</li>
                        </ul>
                    </li>
                    <li className={styles.subContent}>
                        <ul className={styles.subContentUl}>
                            <li className={styles.subContentLiT}>开发者</li>
                            <li className={styles.subContentLi}>API文档</li>
                            <li className={styles.subContentLi}>SDK下载</li>
                        </ul>
                    </li>
                    <li className={styles.subContent}>
                        <ul className={styles.subContentUl}>
                            <li className={styles.subContentLiT}>帮助</li>
                            <li className={styles.subContentLi}>帮助中心</li>
                        </ul>
                    </li>
                    <li className={styles.subContent}>
                        <ul className={styles.subContentUl}>
                            <li className={styles.subContentLiT}>公司</li>
                            <li className={styles.subContentLi}>关于我们</li>
                            <li className={styles.subContentLi}>联系我们</li>
                        </ul>
                    </li>
                    <li className={styles.subContent}>
                        <ul className={styles.subContentUl}>
                            <li className={styles.subContentLiT}>咨询方式</li>
                            <li className={styles.subContentLi}>400-121-5688</li>
                            <li className={styles.subContentLi}>09:00——19:00（全年无休）</li>
                        </ul>
                    </li>
                </div>

            </div>


        )
    }
}