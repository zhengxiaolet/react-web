/**
 * Created by Administrator on 2018/3/24.
 */
import React, {PureComponent} from "react";

export default class extends PureComponent {
    render() {
        return (
            <div className={`width1200 iframeColor`}>
                <h3>客户端上报接口</h3>
                <h4>接口信息</h4>
                <table>
                    <tbody><tr>
                        <th>方法名称</th>
                        <td>MonitorClient. openWanning</td>
                    </tr>
                    <tr>
                        <th>方法参数</th>
                        <td>String url请求地址
                            OpenReqVO reqVO 请求类</td>
                    </tr>
                    <tr>
                        <th>方法说明</th>
                        <td>客户端上报方法</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}