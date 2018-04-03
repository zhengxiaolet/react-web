/**
 * Created by rong on 2018/3/23.
 */
import React, {PureComponent} from "react";

export default class extends PureComponent {
    render() {
        return (
            <div className={`width1200 iframeColor`}>
                <h3>一、系统说明</h3>
                <p className={`details`}>1、邮件系统旨在提供开放、高效、稳定的邮件收发服务；</p>
                <p className={`details`}>2、邮件系统提供了良好的接口规范与使用说明，请结合文档对接；</p>
                <p className={`details`}>3、非加密对接只允许内网对接，加密对接同时允许内外网对接；</p>
                <p className={`details`}>4、邮件需要发送附件时，需上传到申请到的附件服务器且只有先上传附件后才能成功发送</p>
                <h3>二、适用对象</h3>
                <p className={`details`}>1、在客户端引用邮件系统的页面；</p>
                <p className={`details`}>2、使用邮件系统jar包的系统；</p>
                <p className={`details`}>3、需要使用加密接口对接的，需要遵循《大数据事业部-加密对接规范-1.3》。</p>
                <h3>三、名词解释</h3>
                <p className={`details`}>无</p>
                <h3>四、对接流程图</h3>
                <p className={`details`}>不含附件版:</p>
                <img src="assets/images/yjjk1.png"  alt=""/>
                <p className={`details`}>含附件版:</p>
                <img src="assets/images/yjjk2.png" alt=""/>
                <h3>五、对接规范</h3>
                <h3>交互说明</h3>
                <p className={`details`}>1、服务端接口对接均采用HTTP+POST+JSON方式；</p>
                <p className={`details`}>2、PC页面对接采用HTTP+JSONP方式；</p>
                <p className={`details`}>3、连接均使用HTTP短连接；</p>
                <p className={`details`}>4、所有接口对接均需向我平台申请appid与appkey，并通过我方接口授权方可使用。</p>
                <h3>请求报文格式规范</h3>
                    <pre>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
                        `{
              "head":{
                    "appid":"xxxxx",  //APPID，数据平台提供
                    "appkey":"xxxxxxx", //APPKEY，数据平台提供
                    "transDate":"20170629", //交易日期，yyyyMMdd
                    "transTime":"125500", //交易时间，HHmmss
                    "transCode":"xxxxxx", //交易编码，数据平台提供
                    "openId":””,//用户ID, 可空
                    "serialNo:" ",//第三方平台交易流水号，唯一, 可空
                    "bussInfo: " "//业务信息描述, 可控
              },
              ………………………
              ……………………..  //交易数据json，格式根据接口不通而不通,参照各自接口文档
           }`
                    }
                    </pre>
                <h3>应答报文格式规范</h3>
                    <pre>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
                        `{
                  "head": {
                      "server": "999999", //服务端编码
                      "transId":"2017031013232446532", //交易序号,数据平台生成
                      "appid":"JK-JGJ", //APPID，数据平台提供
                      "sign":"4400f2184843e4c25817e7515ddf17a5", //签名（对接方无需处理）
                      "transDate":"20170710", //交易日期，yyyyMMdd
                      "transTime":"112000", //交易时间，HHmmss
                      "transCode":"JGJ012" //交易编码
                  },
                  "resultCode": "10",//通讯级返回码，10成功，其他失败；代表交易调用成功
                  "resultMsg": "交易成功",//返回消息
                  "t": {
                        "resultCode": "10",//交易级返回码，10成功，其他失败；代表业务成功
                        "resultMsg": "交易成功" //返回消息
                        ……
                        ……
                        ……//交易数据json，格式根据接口不通而不通,参照各自接口文档
                  }
              }`
                    }
                    </pre>
                <h3>测试信息</h3>
                <table>
                    <tbody><tr>
                        <th>测试地址</th>
                        <td>http://10.1.21.1:8016/tianrong-open-mail/</td>
                    </tr>
                    <tr>
                        <th>appId</th>
                        <td>SJPT-PC</td>
                    </tr>
                    <tr>
                        <th>appKey</th>
                        <td>u4y8qxg18v</td>
                    </tr>
                    <tr>
                        <th>sigkey</th>
                        <td>ZLDKRI4HWDYEGHFZVX8DRL8HFOOIT0</td>
                    </tr>
                    <tr>
                        <th>seckey</th>
                        <td>ATXBWY55RVRJNLA86I9GA3H0VM0C1X</td>
                    </tr>
                    </tbody>
                </table>
                <p className={`notice`}>注意：所有接口均提供明文接口地址与加密接口地址，
                    明文接口地址只在测试期间开放，投产后则关闭授权，禁止使用。加密接口的开发请查阅《大数据事业部-加密对接规范-1.2》</p>
            </div>
        )
    }
}