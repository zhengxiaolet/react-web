/**
 * Created by user on 2018/3/21.
 */
export default {
    component: require('./index').default,
    childRoutes: [{
        path: 'register/Login', //登录
        getComponent(state, cb) {
            require.ensure([], require => cb(null, require('./Login').default))
        }
    },{
        path: 'register/Register', //注册
        getComponent(state, cb) {
            require.ensure([], require => cb(null, require('./Register').default))
        }
    }, {
        path: 'register/ResetPwdOne', //重置密码——输入邮箱
        getComponent(state, cb) {
            require.ensure([], require => cb(null, require('./ResetPwdOne').default))
        }
    }, {
        path: 'register/ResetPwdTwo', //重置密码——输入验证码
        getComponent(state, cb) {
            require.ensure([], require => cb(null, require('./ResetPwdTwo').default))
        }
    }, {
        path: 'register/ResetPwdThird', //重置密码——输入新密码
        getComponent(state, cb) {
            require.ensure([], require => cb(null, require('./ResetPwdThird').default))
        }
    }, {
        path: 'register/Success', //重置密码、注册——成功
        getComponent(state, cb) {
            require.ensure([], require => cb(null, require('./Success').default))
        }
    }]
}