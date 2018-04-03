/**
 * Created by Administrator on 2018/3/24.
 */
import React, {PureComponent} from "react";

export default class extends PureComponent {
    render() {
        return (
            <div className={`width1200 iframeColor`}>
                <h3>一、系统说明</h3>
                <p className={`details`}>1、监控平台在架构蓝图上定义为业务组件，采用开放平台架构，可向多应用提供监控预警服务；</p>
                <p className={`details`}>2、监控平台主要解决交易闭环问题，范围涉及为实时交易监控、异步交易监控、批处理交易监和自定义监控；</p>
                <p className={`details`}>3、监控平台通过设置拦截层提供JAR包组件方式提供服务，横向打通短信、邮件、微信和工作流系统；</p>
                <p className={`details`}>4、监控平台通过多系统集成完成交易闭环的跟踪和处理；</p>
                <h3>二、适用对象</h3>
                <p className={`details`}>1、在客户端接入监控平台的页面；</p>
                <p className={`details`}>2、使用邮件系统jar包的系统；</p>
                <p className={`details`}>3、需要使用加密接口对接的，需要遵循《大数据事业部-加密对接规范-1.3》；</p>
                <h3>三、名词解释</h3>
                <p className={`details`}>无</p>
                <h3>四、对接流程图</h3>
                <img src={require("assets/images/monitoringPlatformAPI.png")}  alt=""/>
                <h3>五、对接规范</h3>
                <h3>交互说明</h3>
                <p className={`details`}>1、服务端接口对接均采用HTTP+POST+JSON方式；</p>
                <p className={`details`}>2、PC页面对接采用HTTP+JSONP方式；</p>
                <p className={`details`}>3、连接均使用HTTP短连接；</p>
                <p className={`details`}>4、所有接口对接均需向我平台申请appid与appkey，并通过我方接口授权方可使用；</p>
                <h3>请求报文格式规范</h3>
                    <pre>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
                        `{
              "head":{
                    "appid":"xxxxx",  //APPID，开放平台提供
                    "appkey":"xxxxxxx", //APPKEY，开放平台提供
                    "transDate":"20170629", //交易日期，yyyyMMdd
                    "transTime":"125500", //交易时间，HHmmss
                    "transCode":"xxxxxx", //交易编码，开放平台提供
                    "openId":””,//用户ID, 可空
                    "serialNo:" ",//第三方平台交易流水号，唯一, 可空
                    "bussInfo: " "//业务信息描述, 可控
              },
              ………………………
              ……………………  //交易数据json，格式根据接口不通而不通,参照各自接口文档
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
                <p className={`notice`}>注意：所有接口均提供明文接口地址与加密接口地址，明文接口地址只在测试期间开放，投产后则关闭授权，禁止使用。加密接口的开发请查阅《大数据事业部-加密对接规范-1.3》</p>
            </div>
        )
    }
}