/**
 * Created by user on 2018/3/26.
 */
/**
 * Created by Administrator on 2018/3/24.
 */
import React, {PureComponent} from "react";

export default class extends PureComponent {
    render() {
        return (
            <div className={`width1200 iframeColor`}>
                <h3>程序调用开启接口</h3>
                <h4>接口信息</h4>
                <table>
                    <tbody>
                    <tr>
                        <th>明文接口地址</th>
                        <td>/workflow/programStart</td>
                    </tr>
                    <tr>
                        <th>明文接口编码</th>
                        <td>W00059</td>
                    </tr>
                    <tr>
                        <th>加密接口地址</th>
                        <td>无</td>
                    </tr>
                    <tr>
                        <th>加密接口编码</th>
                        <td>无</td>
                    </tr>
                    <tr>
                        <th>接口说明</th>
                        <td>根据urlCode获取要共享的页面地址</td>
                    </tr>
                    </tbody>
                </table>
                <h3>请求报文试例</h3>
                     <pre>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
                         `{
    "head":{
        "appid":"ACTIVITI ",
        "sign":"4400f2184843e4c25817e7515ddf17a5",
        "transDate":"20170310",
        "transTime":"132325",
        "transCode":"W00059",
        "appkey":"6d7Dqdw5Cf"
    },
    "workflowId":"LeaveBill:6:12524",
    "formParameter":"{'id',1,'title','请假单'，'reason'，'倒休'}" ,
"notifiedUserIds":"",
"startUserId":"1",
    "applyIds":"1,2,3,4"
    "businessKey":""
    "transCode":"",
    "callBackUrl":""
}`
                     }
                    </pre>
                <h3>应答报文试例</h3>
                     <pre>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
                         `{
                 "head": {
        "transId": "2017100917282982707",
        "appid": "ACTIVITI ",
        "server": "999999",
        "sign": "d46ec403e1377f9b966c1ed66799ae29",
        "transDate": "20171009",
        "transTime": "173228",
        "transCode": "W00012",
        "version": "NORMAL-1.0"
    },
    "resultCode": "10",
    "resultMsg": "交易成功",
    "t": {
        "resultCode": "10",
        "resultMsg": "交易成功",
        "nodeName":"",//当前任务
        "procInstId": "250001",//单号
        "currentUser": "系统管理员",
        "finishTime": "2017-10-09 17:32:28",
        "duration": "true"
    }
            }`
                     }
                    </pre>
            </div>
        )
    }
}
