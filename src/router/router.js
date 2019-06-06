import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/views/layout'
import store from '@/store/store'

Vue.use(Router)
const array = [
  {
    name: '数组相关',
    path: '/array',
    redirect: '/array/array-destructuring',
    component: layout,
    children: [
      {
        name: '判断类型',
        path: '/array/instanceof',
        component: () => import('@/views/array/instanceof'),
        meta: {}
      },
      {
        name: '数组解构赋值',
        path: '/array/array-destructuring',
        component: () => import('@/views/array/destructuring'),
        meta: {}
      },
      {
        name: '数据处理',
        path: '/array/map',
        component: () => import('@/views/array/map'),
        meta: {}
      },
      {
        name: '数据过滤',
        path: '/array/filter',
        component: () => import('@/views/array/filter'),
        meta: {}
      },
      {
        name: '判断包含',
        path: '/array/includes',
        component: () => import('@/views/array/includes'),
        meta: {}
      },
      {
        name: '数组合并',
        path: '/array/concat',
        component: () => import('@/views/array/concat'),
        meta: {}
      },
    ]
  }
]
const object = [
  {
    name: '对象相关',
    path: '/object',
    redirect: '/object/object-destructuring',
    component: layout,
    children: [
      {
        name: '对象解构赋值',
        path: '/object/object-destructuring',
        component: () => import('@/views/object/destructuring'),
        meta: {}
      },
      {
        name: '对象循环',
        path: '/object/object-for',
        component: () => import('@/views/object/for'),
        meta: {}
      },
    ]
  }
]
const string = [
  {
    name: '字符串相关',
    path: '/string',
    redirect: '/string/indexof',
    component: layout,
    children: [
      {
        name: '字符判断',
        path: '/string/indexof',
        component: () => import('@/views/string/indexof'),
        meta: {}
      },
      {
        name: '字符打断',
        path: '/string/split',
        component: () => import('@/views/string/split'),
        meta: {}
      },
      {
        name: '模板字符串',
        path: '/string/template-literals',
        component: () => import('@/views/string/templateLiterals'),
        meta: {}
      },
    ]
  }
]
const date = [
  {
    name: '日期相关',
    path: '/string',
    redirect: '/string/indexof',
    component: layout,
    children: [
      {
        name: '日期处理',
        path: '/date/date',
        component: () => import('@/views/date/date'),
        meta: {}
      },
    ]
  }
]
const vue = [
  {
    name: 'Vue 相关',
    path: '/vue',
    redirect: '/vue/vue',
    component: layout,
    children: [
      {
        name: 'Vue',
        path: '/vue/vue',
        component: () => import('@/views/vue/vue'),
        meta: {}
      },
    ]
  }
]
const element = [
  {
    name: 'Element 相关',
    path: '/element',
    redirect: '/element/element',
    component: layout,
    children: [
      {
        name: 'Element',
        path: '/element/element',
        component: () => import('@/views/element/element'),
        meta: {}
      },
    ]
  }
]
const routes = [
  {
    path: '/',
    redirect: '/description',
    component: layout,
    children: [
      {
        name: '项目说明',
        path: '/description',
        component: () => import('@/views/description'),
        meta: {}
      },
    ]
  },
  ...array,
  ...object,
  ...string,
  ...date,
  ...vue,
  ...element,
]

store.commit('setMenu', routes)


export default new Router({
  routes,
})
