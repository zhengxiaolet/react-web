/**
 * Created by Administrator on 2018/3/24.
 */
import React, {PureComponent} from "react";

export default class extends PureComponent {
    render() {
        return (
            <div className={`width1200 iframeColor`}>
                <h3>申请Token</h3>
                <h4>接口信息</h4>
                <table>
                    <tbody>
                    <tr>
                        <th>密文接口地址</th>
                        <td>/token/sec/getAppToken</td>
                    </tr>
                    <tr>
                        <th>密文交易编码</th>
                        <td>C00020</td>
                    </tr>
                    <tr>
                        <th>请求方式</th>
                        <td>POST+JSON</td>
                    </tr>
                    <tr>
                        <th>交易说明</th>
                        <td>第三方APP需要访问收银台页面,必须先申请token,并且保证30分钟调用一次接口,刷新token。否则将失效。</td>
                    </tr>
                    </tbody>
                </table>
                <h3>请求报文试例</h3>
                     <pre>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
                         `{
                "head":{
                    "appid":"JK-CASHIER-FRONT",
                    "sign":"4400f2184843e4c25817e7515ddf17a5",
                    "transDate":"20170310",
                    "transTime":"132325",
                    "transCode":" C00020",
                    "appkey":"XOM8ZaGa8k",
                    "openId":"123"
                },
                "backUrl":"http://www.baidu.com",//收银台页面回退地址，必填
                "tokenType":"1"//Token类型，必填，(可选值:1访问申请)
            }`
                     }
                    </pre>
                <h3>应答报文试例</h3>
                     <pre>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
                         `{
                "head": {
                    "transId": "2017101014103535819",
                    "appid": "JK-CASHIER-FRONT",
                    "server": "999999",
                    "transDate": "20171010",
                    "transTime": "141047",
                    "transCode": "C00018",
                    "version": "NORMAL-1.0"
                },
                "resultCode": "10",
                "resultMsg": "交易成功",
                "t": {
                    "resultCode": "10",
                    "resultMsg": "交易成功",
                    "token": "1333494099c449178fb8"   //token串
                }
            }`
                     }
                    </pre>
            </div>
        )
    }
}
