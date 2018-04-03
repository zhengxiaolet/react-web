/**
 * Created by user on 2018/3/24.
 */
/**
 * Created by user on 2018/3/24.
 */

import React, {PureComponent} from "react";

export default class extends PureComponent {
    render() {
        return (
            <div className={`width1200 iframeColor`}>
                <h3>下订单</h3>
                <h4>接口信息</h4>
                <table>
                    <tbody>
                    <tr>
                        <th>密文接口地址</th>
                        <td>/order/sec/placeOrder</td>
                    </tr>
                    <tr>
                        <th>密文交易编码</th>
                        <td>C00021</td>
                    </tr>
                    <tr>
                        <th>请求方式</th>
                        <td>POST+JSON</td>
                    </tr>
                    <tr>
                        <th>交易说明</th>
                        <td>第三方app跳转进入收银台页面之前，必须先下订单，将订单数据落地进入收银台系统。收银台系统将返回独立唯一的收银台订单号。</td>
                    </tr>
                    </tbody>
                </table>
                <h3>请求报文试例</h3>
                     <pre>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
                         `{
                "head": {
                    "transId": "2017031013232446532",
                    "appid": "JK-CASHIER-FRONT",
                    "sign": "4400f2184843e4c25817e7515ddf17a5",
                    "transDate": "20170310",
                    "transTime": "132325",
                    "transCode": "C00021",
                    "appkey": "XOM8ZaGa8k"
                },
                "token": "2017032717500543538", //token
                "appOrderNo":"56451315512345751495", //app订单编号-必填
                "orderName":"剁手剁手剁手剁手", //订单名称-必填
                "orderDesc":"buybuybuy", //订单描述-必填
                "amt":"99.99", //金额-必填
                "bankCode":"BOC", //银行编码-非必填
                "bankCardNo":"94069803194705609324", //卡号-非必填
                "bankLinCode":"", //联行号-非必填
                "bankName":"中国银行", //银行名称-非必填
                "bankProv":"SH", //省-非必填
                "bankCity":"SH", //市-非必填
                "cardholderName":"罗布斯", //姓名-必填
                "certiType":"1", //证件类型 1,身份证-必填
                "certiNo":"340101198009217799", //身份证号-必填
                "mobile":"156999008877", //手机号-必填
                "orderType":"", //订单类型-必填
                "bussTypeCode":"A00001", //业务编码-必填
                "usingScenes":"2", //支付场景:1,公众号-2,app-必填
                "notifyUrl":"", //通知url-非必填
                "remark":"" //备注-非必填
            }`
                     }
                    </pre>
                <h3>应答报文试例</h3>
                     <pre>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
                         `{
                "head": {
                    "transId": "2017101009405901785",
                    "appid": "JK-CASHIER-FRONT",
                    "server": "999999",
                    "sign": "54bd2fdd0b9cc5de3c846efc23b36b57",
                    "transDate": "20171010",
                    "transTime": "094141",
                    "transCode": "C00021",
                    "version": "NORMAL-1.0"
                },
                "resultCode": "10",
                "resultMsg": "交易成功",
                "t": {
                    "resultCode": "10",
                    "resultMsg": "交易成功",
                    "cashierOrderNo": "2017101009413401891", //收银台 订单编号
                    "backUrl": ""//收银台回退地址
                }
            }`
                     }
                    </pre>
            </div>
        )
    }
}