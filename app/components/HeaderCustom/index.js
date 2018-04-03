
import React, {PureComponent} from 'react'
import { connect } from 'react-redux';
import { Menu, Icon, Layout, Badge, Popover } from 'antd';
import screenfull from 'screenfull';
import * as cache from "utils/cache";
import SiderCustom from 'components/SiderCustom/';
import avater from 'assets/images/b1.jpg';
const { Header } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;



export default class extends PureComponent {
    state = {
        user: '',
        visible: false,
    };
    componentDidMount() {
        this.setState({
            user:cache.get('userInfo')
        })
    };
    screenFull = () => {
        if (screenfull.enabled) {
            screenfull.request();
        }
    };
    menuClick = e => {
        e.key === 'logout' && this.logout();
    };
    logout = () => {
        cache.get('userInfo',false)
        this.props.router.push('/login')
    };
    popoverHide = () => {
        this.setState({
            visible: false,
        });
    };
    handleVisibleChange = (visible) => {
        this.setState({ visible });
    };
    render() {
        return (
            <Header style={{ background: '#fff', padding: 0, height: 65 }} className="custom-theme" >
                {
                    this.props.gstates.isMobile ? (
                        <Popover 
                            content={<SiderCustom path={this.props.path} popoverHide={this.popoverHide} />} 
                            trigger="click" 
                            placement="bottomLeft" 
                            visible={this.state.visible} 
                            onVisibleChange={this.handleVisibleChange}>
                                <Icon type="bars" className="trigger custom-trigger" />
                        </Popover>
                    ) : (
                        <Icon
                            className="trigger custom-trigger"
                            type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.props.toggle}
                        />
                    )
                }
                <Menu
                    mode="horizontal"
                    style={{ lineHeight: '64px', float: 'right' }}
                    onClick={this.menuClick}
                >
                    <Menu.Item key="full" onClick={this.screenFull} >
                        <Icon type="arrows-alt" onClick={this.screenFull} />
                    </Menu.Item>
                    <Menu.Item key="1">
                        <Badge count={25} overflowCount={10} style={{marginLeft: 10}}>
                            <Icon type="notification" />
                        </Badge>
                    </Menu.Item>
                    <SubMenu title={<span className="avatar"><img src={avater} alt="头像" /><i className="on bottom b-white" /></span>}>
                        <MenuItemGroup title="用户中心">
                            <Menu.Item key="setting:1">你好 - {this.state.user.userName}</Menu.Item>
                            <Menu.Item key="setting:2">个人信息</Menu.Item>
                            <Menu.Item key="logout"><span onClick={this.logout}>退出登录</span></Menu.Item>
                        </MenuItemGroup>
                        <MenuItemGroup title="设置中心">
                            <Menu.Item key="setting:3">个人设置</Menu.Item>
                            <Menu.Item key="setting:4">系统设置</Menu.Item>
                        </MenuItemGroup>
                    </SubMenu>
                </Menu>
                <style>{`
                    .ant-menu-submenu-horizontal > .ant-menu {
                        width: 120px;
                        left: -40px;
                    }
                `}</style>
            </Header>
        )
    }
}

