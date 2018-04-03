/**
 * Created by user on 2018/3/24.
 */
/**
 * Created by rong on 2018/3/23.
 */
import React, {PureComponent} from "react";

export default class extends PureComponent {
    render() {
        return (
            <div className={`width1200 iframeColor`} style={{overflow:'hidden'}}>
                <h3>一、系统说明</h3>
                <p className={`details`}>收银台系统为第三方系统提供统一高效的订单付款服务，银行卡鉴权，单笔实时支付。提供组件、简化APP、PC系统的开发成本。</p>
                <h3>二、适用对象</h3>
                <p className={`details`}>收银台系统开发人员、设计人员、需求人员、第三方系统的对接人员。</p>
                <h3>三、名词解释</h3>
                <p className={`details`}>无</p>
                <h3>四、对接流程图</h3>
                <img src={require("assets/images/syt.png")}  alt=""/>
            </div>
        )
    }
}