/**
 * Created by user on 2018/3/26.
 */
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
                <p className={`details`}>1.工作流平台选用Activiti 作为技术支持，Activiti项目是一项新的基于Apache许可的开源BPM平台，从基础开始构建，旨在提供支持新的BPMN 2.0标准。</p>
                <p className={`details`}>2.提供开放、高效、稳定的数据集中服务；</p>
                <h3>二、适用对象</h3>
                <p className={`details`}>需要在客户端引用工作流平台的页面。</p>
                <h3>三、名词解释</h3>
                <p className={`details`}>无</p>
                <h3>四、对接流程图</h3>
                <img src={require("assets/images/workFlow.png")}  alt=""/>
            </div>
        )
    }
}