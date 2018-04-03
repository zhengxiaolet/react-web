/**
 * Created by rong on 2018/3/23.
 */

import React, {PureComponent} from "react";

export default class extends PureComponent {
    render() {
        return (
            <div className={`width1200 iframeColor`}>
                <h3>批量邮件发送接口</h3>
                <h4>接口信息</h4>
                <table>
                    <tbody><tr>
                        <th>接口接口地址</th>
                        <td>/email/sendBatch</td>
                    </tr>
                    <tr>
                        <th>密文接口地址</th>
                        <td>/email/sec/sendBatch</td>
                    </tr>
                    <tr>
                        <th>交易编码</th>
                        <td>明文：MI0027加密：MIS027</td>
                    </tr>
                    <tr>
                        <th>接口说明</th>
                        <td>报文说明：
                            1:发送时间不为空时判定为定时邮件，空则判定为实时邮件
                            2:可填写多个值的字段，值之间需要用|分隔
                            3：收件人邮箱，只允许单邮箱接受</td>
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
                    "appkey":"xxxxxx"//APPKEY，交换平台提供，必填
                },
                "organCode":"86", //机构编码，默认86，选填
                "bussTypeCode":"3", //业务类型编码，选填
                "bussKeyName":"4", //业务类型关键字名称，选填
                "bussKeyNo":"5", //业务类型关键字编码，选填
                "items":[
                {
                "email":"", //收件人邮箱，只允许单邮箱接收，必填
                "ccEmail": "",//抄送联系人, 多个参数用竖线分隔，选填
                "sendTime":"", //发送时间，格式yyyy-MM-dd HH:mm:ss，选填
                "content":"", //邮件内容，结合模板并使用|分隔值，必填
                "templateCode": "",//模板编码，必填
                "fileName": ""//附件, 多个参数用竖线分隔，选填
                }
                ]
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
                    "transCode": " xxxxxx" //交易编码
                },
                "resultCode": "10",
                "resultMsg": "交易成功",
                "t": {
                    "resultCode": "10",
                    "resultMsg": "交易成功",
                    "batchId": "" //批次ID,必返
                }
            }`
                     }
                    </pre>
            </div>
        )
    }
}