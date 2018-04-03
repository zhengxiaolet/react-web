import React, {PureComponent} from "react";
import {connect} from "react-redux";
import Loading from 'components/Loading';

import "assets/scss/iconfont.scss";
import "assets/scss/antd.scss";
import "assets/scss/app.scss";
import 'assets/scss/index.scss';
import 'assets/scss/lib/animate.css';

@connect(({gstates})=>{
	return {gstates}
})
export default class extends PureComponent {

    // componentWillMount(){//在渲染前调用,在客户端也在服务端。
    // }

    // componentDidMount(){//在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异部操作阻塞UI)。
    // }

    componentWillReceiveProps(nextProps){ //在组件接收到一个新的prop时被调用。这个方法在初始化render时不会被调用。
        //当路由切换时
        if(this.props.location !== nextProps.location){
            window.scrollTo(0,0)
        }
    }

    // shouldComponentUpdate(newProps, newState){//返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。可以在你确认不需要更新组件时使用。
    // }

    // componentWillUpdate(nextProps, nextState){//在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。
    // }

    // componentDidUpdate(prevProps, prevState){//在组件完成更新后立即调用。在初始化时不会被调用。
    // }

    // componentWillUnmount(){//在组件从 DOM 中移除的时候立刻被调用。
    // }
    render() {
	    const {gstates, children} = this.props;
        return(
            <div className={'fullHeight'}>
                <Loading spinning={gstates.isLoading}/>
                {children}
            </div>
        )
    }
}
