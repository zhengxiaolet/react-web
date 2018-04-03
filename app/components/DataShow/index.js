import React, {PureComponent} from 'react'
import { Layout, Menu, Icon } from 'antd';
import Link from 'components/Link'
import p from 'assets/images/s.gif';
import styles from './style.scss';


export default class extends PureComponent {

    state = {

    };
    componentDidMount() {

    }

    render() {
        // list循环的数组   title 标题    showType 展示类型  1: 横向展示 2:竖向展示
        let {list,title,showType} = this.props;
        return (
            <div>
                <div className={styles.mainBoxTitle}>{title}</div>

                {showType == '1' &&
                <div className={styles.DataShow1}>
                    <div className={`width1200 ${styles.listBox}`}>
                        {list.map((el, i)=>
                        <Link href={{pathname: el.linkUrl}} key={i}>
                            <div className={styles.lists} >
                                <img src={el.icons} />
                                <div className={styles.title}>{el.titles}</div>
                                <div className={styles.contents}>{el.content}</div>
                            </div>
                        </Link>
                        )}
                    </div>
                </div>
                }
                {showType == '2' &&
                <div className={styles.DataShow2}>
                    <div className={`width1200 flex-wrp flex-cell ${styles.listBox}`}>
                        {list.map((el, i)=>
                        <div className={`width1200 flex-wrp flex-align-center  ${styles.lists}`}  key={i}>
                            <img src={el.icons} />
                            <div className={styles.title}>{el.titles}</div>
                            <div className={styles.contents}>{el.content}</div>
                        </div>
                        )}
                    </div>
                </div>
                }
                {showType == '3' &&
                    <div className={styles.DataShow3}>
                        <a className={styles.hrefs} href={this.props.hrefData.hrefs}>{this.props.hrefData.text}</a>
                    </div>
                }
            </div>
        )
    }
}
