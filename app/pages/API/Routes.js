/**
 * Created by Administrator on 2018/3/24.
 */
export default {
    component: require('./index').default,
    childRoutes: [
        {
            path: '/emailPlatform',
            getComponent(state, cb){
                require.ensure([], require => cb(null, require('./EmailPlatform/').default))
            }
        },{
            path: '/dbfscx', //单笔发�?�查�?
            getComponent(state, cb){
                require.ensure([], require => cb(null, require('./EmailPlatform/dbfscx').default))
            }
        },{
            path: '/dbfsjk',//单笔发�?�接�?
            getComponent(state, cb){
                require.ensure([], require => cb(null, require('./EmailPlatform/dbfsjk').default))
            }
        },{
            path: '/plfscx',//批量发�?�查�?
            getComponent(state, cb){
                require.ensure([], require => cb(null, require('./EmailPlatform/plfscx').default))
            }
        },{
            path: '/plfsjk',//批量发�?�接�?
            getComponent(state, cb){
                require.ensure([], require => cb(null, require('./EmailPlatform/plfsjk').default))
            }
        },{
            path: '/system',//邮件系统
            getComponent(state, cb){
                require.ensure([], require => cb(null, require('./EmailPlatform/system').default))
            }
        },
        {
            path: '/monitoringPlatform',//监控平台API
            getComponent(state, cb){
                require.ensure([], require => cb(null, require('./MonitoringPlatform/').default))
            }
        },
        {
            path: '/yjsbjk',//预警上报接口
            getComponent(state, cb){
                require.ensure([], require => cb(null, require('./MonitoringPlatform/yjsbjk').default))
            }
        },
        {
            path: '/monitoringPlatformSystem',//预警上报接口
            getComponent(state, cb){
                require.ensure([], require => cb(null, require('./MonitoringPlatform/system').default))
            }
        },
        {
            path: '/khdsbjk',//客户端上报接口
            getComponent(state, cb){
                require.ensure([], require => cb(null, require('./MonitoringPlatform/khdsbjk').default))
            }
        },
        {
            path: '/cashierPlatform',//收银台API
            getComponent(state, cb){
                require.ensure([], require => cb(null, require('./cashierPlatform/').default))
            }
        },
        {
            path: '/cashierPlatformSystem',//收银台系统
            getComponent(state, cb){
                require.ensure([], require => cb(null, require('./cashierPlatform/system').default))
            }
        }, {
            path: '/applyToken',//申请token
            getComponent(state, cb){
                require.ensure([], require => cb(null, require('./cashierPlatform/applyToken').default))
            }
        }, {
            path: '/xdd',//下订单
            getComponent(state, cb){
                require.ensure([], require => cb(null, require('./cashierPlatform/xdd').default))
            }
        },
        {
            path: '/workFlow/',//工作流API
            getComponent(state, cb){
                require.ensure([], require => cb(null, require('./WorkFlow/').default))
            }
        },
        {
            path: '/workFlowSystem',//收银台系统
            getComponent(state, cb){
                require.ensure([], require => cb(null, require('./WorkFlow/system').default))
            }
        },{
            path: '/ProgramCallOpen',//程序调用开启接口
            getComponent(state, cb){
                require.ensure([], require => cb(null, require('./WorkFlow/ProgramCallOpen').default))
            }
        },
        {
            path: '/getNextNodeMsg',//获取下一节点信息
            getComponent(state, cb){
                require.ensure([], require => cb(null, require('./WorkFlow/getNextNodeMsg').default))
            }
        }

    ]
}