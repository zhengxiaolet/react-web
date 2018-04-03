/**
 * Created by user on 2018/3/26.
 */
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
                <h3>获取下一节点信息</h3>
                <h4>接口信息</h4>
                <table>
                    <tbody>
                    <tr>
                        <th>明文接口地址</th>
                        <td>/workFlow/getNextTaskInfo</td>
                    </tr>
                    <tr>
                        <th>明文接口编码</th>
                        <td>W00045</td>
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
        "transCode":"W00045",
        "appkey":"6d7Dqdw5Cf"
    },
    "workflowId":"dataManager:1:337740",
    "instanceId":"",
    "taskId":"0",
    "type":"startEvent",
"formParameter":"'id':1,'title':'请假单','reason':'倒休'"
}`
                     }
                    </pre>
                <h3>应答报文试例</h3>
                     <pre>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
                         `{
       "head": {
    "transId": "2017091315155919871",
    "appid": "ACTIVITI ",
    "server": "999999",
    "sign": "20164b37263a58671be5cec43c70f20c",
    "transDate": "20170913",
    "transTime": "151603",
    "transCode": "W00045",
    "version": "NORMAL-1.0"
  },
  "resultCode": "10",
  "resultMsg": "交易成功",
  "t": {
    "resultCode": "10",
    "resultMsg": "交易成功",
    "workflowId": "dataManager:1:337740",//流程定义
    "instanceId": "",//流程实例
    "procStartMethod": "start"//流程开启方式,必填项 默认start
    "nextNodeKey"："",//当procStartMethod 为completed 时,有值
    "nodeInfos": [//节点信息
      {
        "nodeId": "applyId",//节点ID
        "nodeName": "申请人",//节点名称
        "type": "userTask",//节点类型
        "isMultiSelect": "0",//是否多选 0 否 1 多选(默认)
        "userInfos": [
          {
            "userId": "1",//用户ID
            "userName": "系统管理员"//用户名称
            "lineName":"无",//事业线
            "mcomName":"总公司"//机构名称
          }
        ]
      }
    ]
  }
            }`
                     }
                    </pre>
            </div>
        )
    }
}
