/**
 * Created by Administrator on 2018/3/24.
 */
export default {
    component: require('./index').default,
    childRoutes: [
        {
            path: '/componentCenter/message',
            getComponent(state, cb){
                require.ensure([], require => cb(null, require('./message/').default))
            }
        }
    ]
}