/**
 * Created by rong on 2018/3/23.
 */
import React, {PureComponent} from "react";

export default class extends PureComponent {
    render() {
        return (
            <div className={`width1200 iframeColor`}>
                <h3>批量邮件发送结果查询接口</h3>
                <h4>接口信息</h4>
                <table>
                    <tbody><tr>
                        <th>接口接口地址</th>
                        <td>/email/queryBatchResult</td>
                    </tr>
                    <tr>
                        <th>密文接口地址</th>
                        <td>/email/sec/queryBatchResult</td>
                    </tr>
                    <tr>
                        <th>交易编码</th>
                        <td>明文：MI0029加密：MIS029</td>
                    </tr>
                    <tr>
                        <th>接口说明</th>
                        <td>报文说明：
                            暂无</td>
                    </tr>
                    </tbody>
                </table>
                <h3>请求报文试例</h3>
                     <pre>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
                         `{
                "head":{
                    "transId": "2017072509155196236",//交易序号，必填
                    "transCode":"xxxxxx",//交易编码，必填
                    "transDate":"20170725",//交易日期，yyyyMMdd，必填
                    "transTime":"091550",//交易时间，HHmmss，必填
                    "appid":" xxxxxx ",//APPID，交换平台提供，必填
                    "appkey":"xxxxxx",//APPKEY，交换平台提供，必填
                },
                "batchId": "" //批次ID，必填
            }`
                     }
                    </pre>
                <h3>应答报文试例</h3>
                     <pre>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
                         `{
                "head": {
                    "transId": "2017072509155196236",//交易序号
                    "appid": "xxxxxx ",//交换平台提供
                    "transDate": "20170725",//交易日期，yyyyMMdd
                    "transTime": "091550",//交易时间，HHmmss
                    "transCode": "xxxxxx" //交易编码
                },
                "resultCode": "10",
                "resultMsg": "交易成功",
                "t": {
                    "resultCode": "10",
                    "resultMsg": "交易成功",
                    "successMailTotal": 10,//发送成功总数
                    "batchStatus":"0", //批次状态，0全部未发送1部分成功2全部成功3全部失败4部分待重发5全部待重发6全部发送中-1未知
                    "mailTotal":10 //邮件总数
                }
            }`
                     }
                    </pre>
            </div>
        )
    }
}