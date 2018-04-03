/**
 * Created by rong on 2018/3/23.
 */
import React, {PureComponent} from "react";

export default class extends PureComponent {
    render() {
        return (
            <div className={`width1200 iframeColor`}>
                <h3>单笔邮件发送结果查询接口</h3>
                <h4>接口信息</h4>
                <table>
                    <tbody><tr>
                        <th>明文接口地址</th>
                        <td>/email/querySingleResult</td>
                    </tr>
                    <tr>
                        <th>加密接口地址</th>
                        <td>/email/sec/sendSingle</td>
                    </tr>
                    <tr>
                        <th>交易编码</th>
                        <td>明文：MI0028加密：MIS028</td>
                    </tr>
                    <tr>
                        <th>接口说明</th>
                        <td>报文说明：暂无</td>
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
                "mailId": "" //单笔邮件ID，必填
           }`
                     }
                    </pre>
                <h3>应答报文试例</h3>
                     <pre>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
                         `{
                "head":{
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
                    "sendStatus": "0" //邮件发送状态(0待发送1发送中2发送成功3状态报告成功4发送失败5待重发)
                    "sendStatusDesc": "" //邮件发送状态描述
                }
            }`
                     }
                    </pre>
            </div>
        )
    }
}