/**
 * Created by rong on 2018/3/23.
 */

import React, {PureComponent} from "react";

export default class extends PureComponent {
    render() {
        return (
            <div className={`width1200 iframeColor`}>
                <h3>单笔邮件发送接口</h3>
                <h4>接口信息</h4>
                <table>
                    <tbody><tr>
                        <th>明文接口地址</th>
                        <td>/email/sendSingle</td>
                    </tr>
                    <tr>
                        <th>加密接口地址</th>
                        <td>/email/sec/sendSingle</td>
                    </tr>
                    <tr>
                        <th>交易编码</th>
                        <td>明文：MI0032  加密：MIS032</td>
                    </tr>
                    <tr>
                        <th>接口说明</th>
                        <td>报文说明：
                            1:发送时间不为空时判定为定时邮件，空则判定为实时邮件
                            2:可填写多个值的字段，值之间需要用|分隔</td>
                    </tr>
                    </tbody>
                </table>
                <h3>请求报文试例</h3>
                    <pre>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
                        `{
                "head": {
                    "transCode": "xxxxxx",//交易编码，必填
                    "transDate": "20170206",//交易日期，yyyyMMdd，必填
                    "transTime": "101138",//交易时间，HHmmss，必填
                    "appid": "xxxxxx ",//APPID，交换平台提供，必填
                    "appkey": "xxxxxx",//APPKEY，交换平台提供，必填
                },
                "email":"",//邮箱，用竖线分隔，必填
                "ccEmail": "",//抄送联系人，用竖线分隔 ，选填
                "sendTime": "",//发送时间,格式yyyy-MM-dd HH:mm:ss ，选填
                "content": "", //邮件内容，结合模板并使用|分隔值，必填
                "templateCode": "",//模板编码，必填
                "organCode":"",//机构编码 ，默认86 ，选填
                "bussTypeCode":"",//业务类型编码(01新契约02保全03理赔04其他)，选填
                "bussKeyName":"", //业务关键字名称，选填
                "fileName":"",//附件，用|分隔，选填
                "bussKeyNo":"",//业务关键字，选填
                "sendType":""//发送类型，"1":逐个发送;"2":群体发送; ，必填
           }`
                    }
                    </pre>
                <h3>应答报文试例</h3>
                     <pre>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
                         `{
                "head": {
                    "transId": "2017072509155196236",//交易序号
                    "appid": " xxxxxx ",//交换平台提供
                    "transDate": "20170725",//交易日期，yyyyMMdd
                    "transTime": "091550",//交易时间，HHmmss
                    "transCode": " xxxxxx" //交易编码
                },
                "resultCode": "10",
                "resultMsg": "交易成功",
                "t": {
                   "resultCode": "10",
                   "resultMsg": "交易成功",
                   "mailId":""//邮件ID，群体发送成功时返回，逐个发送时不返回
                }
            }`
                     }
                    </pre>
            </div>
        )
    }
}