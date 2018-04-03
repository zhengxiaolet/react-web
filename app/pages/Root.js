export default {
  path: '/',
  component: require('./Boot').default,
  indexRoute:{
      getComponent(state, cb){
        require.ensure([], require => cb(null, require('./Home/').default))
      }
  },
  childRoutes: [
    require('./register/Routes').default,
    require('./API/Routes').default,
    require('./ComponentCenter/Routes').default,
    {
      path: 'app',
      component: require('./App').default,
      childRoutes:[
      ]
    },{
      path: '/CloudPromotion',
      getComponent(state, cb){
        require.ensure([], require => cb(null, require('./CloudPromotion/').default))
      }
    },{
      path: '/Home',
      getComponent(state, cb){
        require.ensure([], require => cb(null, require('./Home/').default))
      }
    },
        {
      path: '/DocumentCenter',
      getComponent(state, cb){
        require.ensure([], require => cb(null, require('./DocumentCenter/').default))
      }
    },
    {
      path: '/Checkstand',
      getComponent(state, cb){
        require.ensure([], require => cb(null, require('./Checkstand/').default))
      }
    },
      {
          path: '*',
          getComponent(state, cb){
              require.ensure([], require => cb(null, require('./Home/').default))
          }
      }
  ]
}
