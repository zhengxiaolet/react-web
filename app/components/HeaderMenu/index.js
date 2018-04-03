/**
 * Created by LMG on 2018/3/21.
 */
import React, {PureComponent} from 'react'
import { Menu, Icon } from 'antd';
import styles from './style.scss'
import Link from 'components/Link'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


export default class extends PureComponent {

    state = {
        userData: {},
        jsonData:[
            {
                pathName:'/home',
                pageName:'home',
                pageNameDesc:'首页'

            },
            {
                pathName:'/cloudPromotion',
                pageName:'cloudPromotion',
                pageNameDesc:'云推广'

            },
            {
                pathName:'/',
                pageName:'',
                pageNameDesc:'数据组件'

            },
            {
                pathName:'/componentCenter',
                pageName:'componentCenter',
                pageNameDesc:'功能组件'

            },
            {
                pathName:'/documentCenter',
                pageName:'documentCenter',
                pageNameDesc:'开发者中心'

            }
        ]
    };

    componentDidMount() {
        let userData = localStorage.getItem('userData');
        this.setState({userData:userData})
    }

    componentWillReceiveProps(nextProps) {

    }

    link= ()=>{
        window.location.href = 'http://test.jklife.com:8888/jakfptht180323/#/';
    };

    clearStorage= ()=>{
        localStorage.setItem('userData','');
    };

    render() {
        const {hasLogo,pageName} = this.props;//页面头部有logo传参hasLogo,否则不传
        const {userData,jsonData} = this.state;
        return (
            <div className={pageName=='home'||pageName=='cloudPromotion'?'':styles.footer}>
                <div className={`flex-wrp flex-flow-row flex-align-center ${(pageName=='home'||pageName=='cloudPromotion')?styles.headerBg:styles.headerBgS}`}>
                    {
                        hasLogo &&
                        <div className={`flex-wrp flex-flow-row flex-align-center ${styles.leftAreaHome}`}>
                            <div className={styles.lefIconHome}></div>
                            <span className={styles.logoName}>开放平台</span>
                        </div>
                    }
                    {
                        !hasLogo &&
                        <div className={`flex-wrp flex-flow-row flex-align-center ${styles.leftAreaHome}`}>
                            <span className={styles.logoName}>九安数据开放平台</span>
                        </div>
                    }

                    <ul className={`flex-wrp flex-flow-row flex-align-center ${styles.menu}`}>
                        {
                            jsonData && jsonData.map((el,i)=>{
                                return(
                                    <Link key={i} href={{pathname: el.pathName}} style={{color:'#fff',underline:'none'}}>
                                        <li className={pageName==el.pageName?styles.menuItemS:styles.menuItem}>{el.pageNameDesc}</li>
                                    </Link>
                                )
                            })
                        }
                    </ul>
                    <ul className={`flex-wrp flex-flow-row flex-align-center ${styles.menuRight}`}>
                        <li className={styles.menuItemL}>{userData?'控制台':''}</li>
                        <li className={styles.menuItemR}>
                            <ul className={`flex-wrp flex-flow-row flex-align-center ${hasLogo?styles.login:styles.loginN}`}>
                                {/*<li className={hasLogo?styles.loginL:styles.loginR}>注册</li>*/}
                                {
                                    userData &&
                                    <li className={styles.loginR} onClick={this.clearStorage}>注销</li>

                                }
                                {
                                    !userData &&

                                    <li className={styles.loginR} onClick={this.link}>登录</li>

                                }
                            </ul>
                        </li>

                    </ul>

                </div>
            </div>



        )
    }
}