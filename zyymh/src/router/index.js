import Vue from 'vue'
import Router from 'vue-router'
import Index from  '../components/Index'
import MainContent from '../components/index/MainContent'
import Shouye from '../components/mainContent/Shouye'
import NewList from '../components/mainContent/NewList'
import NoticeList from '../components/mainContent/NoticeList'
import PoliciesMain from '../components/mainContent/PoliciesMain'
import OfficeList from "../components/mainContent/OfficeList";
import FamousHospital from "../components/mainContent/FamousHospital";
import ResourceCount from "../components/mainContent/ResourceCount";
import CulturalResources from "../components/mainContent/CulturalResources";
import KnowledgeSelectAll from "../components/mainContent/KnowledgeSelectAll";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect: '/mainContent',
      children:[
        {
          path: '/mainContent',
          name: 'MainContent',
          component: MainContent,
          children:[
            {
              path: '/',
              component: Shouye
            },
            {
              path: '/news/list',
              component: NewList
            },
            {
              path: '/notice/list',
              component: NoticeList
            },
            {
              path: '/policies/policiesMain',
              component: PoliciesMain
            },
            {
              path: '/office/list',
              component: OfficeList
            },
            {
              path: '/medical/famousHospital',
              component: FamousHospital
            },
            {
              path: '/resource/count',
              component: ResourceCount
            },
            {
              path: '/cultural/resources',
              component: CulturalResources
            },
            {
              path: '/knowledge/selectAll',
              component: KnowledgeSelectAll
            },
          ]
        }
      ]
    }
  ]
})
