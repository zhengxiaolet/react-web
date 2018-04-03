/**
 * Created by Administrator on 2018/3/24.
 */
import React, {PureComponent} from "react";

export default class extends PureComponent {
    render() {
        return (
            <div className={`width1200 iframeColor`}>
                <h3>预警上报接口</h3>
                <h4>接口信息</h4>
                <table>
                    <tbody><tr>
                        <th>接口接口地址</th>
                        <td>/open/sec/wanning</td>
                    </tr>
                    <tr>
                        <th>交易编码</th>
                        <td>M00013</td>
                    </tr>
                    <tr>
                        <th>接口说明</th>
                        <td>预警信息上报</td>
                    </tr>
                    </tbody>
                </table>
                <h3>请求报文试例</h3>
                     <pre>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
                         `{
                "head":{
                    "transId": "2017071110101106810",//交易序号
                    "transCode":"xxxxxx",//交易编码，必填
                    "transDate":"20170711",//交易日期，yyyyMMdd，必填
                    "transTime":"101041",//交易时间，HHmmss，必填
                    "appid":" xxxxxx ",//APPID，交换平台提供，必填
                    "appkey":"xxxxxx",//APPKEY，交换平台提供，必填
                    },
                "monitorCode": "" //监控点编码，必填,
                "warnningTitle": "" //预警标题，必填,
                "warnningContent": "" //预警信息内容，必填
            }`
                     }
                    </pre>
                <h3>应答报文试例</h3>
                     <pre>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
                         `{
                "head": {
                    "transId":"2017031013232446532", //交易序号
                    "appid":"xxxxxx", //APPID，交换平台提供
                    "transDate":"20170724", //交易日期，yyyyMMdd
                    "transTime":"162325", //交易时间，HHmmss
                    "transCode":" xxxxxx", //交易编码
                },
                "resultCode": "10",
                "resultMsg": "交易成功",
                "t": {
                    "resultCode": "10",
                    "resultMsg": "交易成功",
                    "traceId": "12312312341213" //预警轨迹ID
                }
            }`
                     }
                    </pre>
            </div>
        )
    }
}