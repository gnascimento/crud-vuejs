import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CadastroPessoa from '@/components/pessoa/CadastroPessoa'
import ListarPessoas from '@/components/pessoa/ListarPessoas'

var VueResource = require('vue-resource')

Vue.use(VueResource)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/CadastroPessoa',
      name: 'CadastroPessoa',
      component: CadastroPessoa
    },
    {
      path: '/ListarPessoas',
      name: 'ListarPessoas',
      component: ListarPessoas
    }
  ]
})
