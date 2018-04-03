
import React from 'react';
import { Anchor } from 'antd';

class Checkstand extends React.Component {
    state = {

    }

    componentDidMount() {
        // var form = document.getElementById("submit")
        // form.click();
    }
    render() {
       /* var datas = {
            "header": {
                "sysTime": 1522050842446,
                "icode": "PDT80006",
                "iserial": "1522050846133-adbh51050acf58098912794fc55ea11a9fec4",
                "istatus": "1",
                "imsg": "申请支付成功"
            },"data": {
                "shopId": "100000",
                "shopUid": "2018013014113367187",
                "pgType2": "23",
                "shopNonce": "{"
                random ":"
                529054 ","
                email ":"
                123123123321 @qq.com "}",
                "successUrl": "http://localhost:3000/mobile/index.html#/product/pay",
                "noticeUrl": "http://172.29.0.112:8080/order/json/OrderStatusChange",
                "clientSysCode": "1002",
                "pgType1": "11",
                "pgType3": "1",
                "busiOrderAmt": "198",
                "busiOrderId": "2018032615485654429",
                "busiSeqId": "2018032615485654429",
                "busiOrderTime": 1522049853466,
                "busiOrderDesc": "爱多保-安心综合意外险",
                "shopVer": "1.0.0.0",
                "token": "DF76314F87D1FCE5E9C7CF0BD9F5ED41",
                "shopSign": "E90CDCF8D250230C067E89AA1840A652",
                "formUrl": "https://ck.juai100.com/accounting/web/unifiedorder"
            }
        }*/



        //{"header":{"sysTime":1522050842446,"icode":"PDT80006","iserial":"1522050846133-adbh51050acf58098912794fc55ea11a9fec4","istatus":"1","imsg":"申请支付成功"},"data":{"shopId":"100000","shopUid":"2018013014113367187","pgType2":"23","shopNonce":"%7B%22random%22%3A%22529054%22%2C%22email%22%3A%22123123123321%40qq.com%22%7D","successUrl":"http://localhost:3000/mobile/index.html#/product/pay","noticeUrl":"http://172.29.0.112:8080/order/json/OrderStatusChange","clientSysCode":"1002","pgType1":"11","pgType3":"1","busiOrderAmt":"198","busiOrderId":"2018032615485654429","busiSeqId":"2018032615485654429","busiOrderTime":1522049853466,"busiOrderDesc":"爱多保-安心综合意外险","shopVer":"1.0.0.0","token":"DF76314F87D1FCE5E9C7CF0BD9F5ED41","shopSign":"E90CDCF8D250230C067E89AA1840A652","formUrl":"https://ck.juai100.com/accounting/web/unifiedorder"}}



        return (
            <div className="formHidden">
                <form method="post" id="payForm" action="https://ck.juai100.com/accounting/web/unifiedorder">
                    <input type="hidden" name="clientSysCode" value="1002"/><br/>
                    <input type="hidden" name="transCode" value=""/><br/>
                    <input type="hidden" name="shopId" value="100000"/><br/>
                    <input type="hidden" name="shopUid" value="2018013014113367187"/><br/>
                    <input type="hidden" name="regCode" value=""/><br/>
                    <input type="hidden" name="regId" value=""/><br/>
                    <input type="hidden" name="certiType" value=""/><br/>
                    <input type="hidden" name="certiName" value=""/><br/>
                    <input type="hidden" name="certiCode" value=""/><br/>
                    <input type="hidden" name="wxOpenId" value=""/><br/>
                    <input type="hidden" name="unionId" value=""/><br/>
                    <input type="hidden" name="busiOrderId" value="2018032615485654429"/><br/>
                    <input type="hidden" name="busiSeqId" value="2018032615485654429"/><br/>
                    <input type="hidden" name="busiOrderTime" value="1522049853466"/><br/>
                    <input type="hidden" name="busiOrderDesc" value="爱多保-安心综合意外险"/><br/>
                    <input type="hidden" name="busiOrderAmt" value="198"/><br/>
                    <input type="hidden" name="noticeUrl" value="http://172.29.0.112:8080/order/json/OrderStatusChange"/><br/>
                    <input type="hidden" name="successUrl" value="http://localhost:3000/mobile/index.html#/product/pay"/><br/>
                    <input type="hidden" name="pgType1" value="11"/><br/>
                    <input type="hidden" name="pgType2" value="23"/><br/>
                    <input type="hidden" name="pgType3" value="1"/><br/>
                    <input type="hidden" name="shopSign" value="E90CDCF8D250230C067E89AA1840A652"/><br/>
                    <input type="hidden" name="shopNonce" value="%7B%22random%22%3A%22529054%22%2C%22email%22%3A%22123123123321%40qq.com%22%7D"/><br/>
                    <input type="hidden" name="shopVer" value="1.0.0.0"/><br/>
                    <input type="hidden" name="token" value="DF76314F87D1FCE5E9C7CF0BD9F5ED41"/><br/>
                    <input type="submit" value="Submit" id="submit"/>
                </form>
            </div>
        )
    }
}

export default Checkstand;
