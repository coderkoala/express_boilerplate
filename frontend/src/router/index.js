import Vue from 'vue'
import Router from 'vue-router'

// Containers
const TheContainer = () => import('@/containers/TheContainer')

// Views
const Dashboard = () => import('@/views/Dashboard')

const Widgets = () => import('@/views/widgets/Widgets')

// Views - Icons
const CoreUIIcons = () => import('@/views/icons/CoreUIIcons')
const Brands = () => import('@/views/icons/Brands')

// Views - Pages
const Page404 = () => import('@/views/pages/Page404')
const Page500 = () => import('@/views/pages/Page500')
const Login = () => import('@/views/pages/Login')
const Register = () => import('@/views/pages/Register')

// Users
const Users = () => import('@/views/users/Users')
const User = () => import('@/views/users/User')

// Purchase Order Views
const PurchaseOrder = ()=> import('@/views/poOrder/PoOrder');

// Customer Management Views
const CustomerAddNew = ()=> import('@/views/customerManagement/CustomerAddNew');

// FeedBack Management Views
const FeedBackManagement = ()=> import('@/views/feedBackManagement/FeedBackManagementNew');

// Task Management Views
const taskManagement = ()=> import('@/views/taskManagement/taskManagementNew');

Vue.use(Router)
 
let configureRoutes = () => {
  return [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: TheContainer,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'purchase',
          name: 'Purchase Order',
          component: PurchaseOrder
        },
        {
          path: 'customers',
          meta: {
            label: 'Customer Management'
          },
          component: {
            render(c) {
              return c('router-view')
            }
          },
          children: [
            {
              path: 'add-new',
              name: 'Customer Management',
              meta: {
                label: 'Add new Customer'
              },
              component: CustomerAddNew
            },
            {
              path: 'all',
              meta: {
                label: 'Customer Details'
              },
              name: 'Customer',
              component: Users
            },
          ]
        },
        {
          path: 'feedback',
          meta: {
            label: 'Customer Management'
          },
          component: {
            render(c) {
              return c('router-view')
            }
          },
          children: [
            {
              path: 'add-new',
              name: 'Feedback Management',
              meta: {
                label: 'Add a new customer feedback'
              },
              component: FeedBackManagement
            },
            {
              path: 'all',
              meta: {
                label: 'Feedback Details'
              },
              name: 'Feedback',
              component: Users
            },
          ]
        },
        {
          path: 'task',
          meta: {
            label: 'Customer Management'
          },
          component: {
            render(c) {
              return c('router-view')
            }
          },
          children: [
            {
              path: 'add-new',
              name: 'Task Management',
              meta: {
                label: 'Add a new task'
              },
              component: taskManagement
            },
            {
              path: 'all',
              meta: {
                label: 'Task Details'
              },
              name: 'task',
              component: Users
            },
          ]
        },
        {
          path: 'widgets',
          name: 'Widgets',
          component: Widgets
        },
        {
          path: 'users',
          meta: {
            label: 'Users'
          },
          component: {
            render(c) {
              return c('router-view')
            }
          },
          children: [
            {
              path: '',
              name: 'Users',
              component: Users
            },
            {
              path: ':id',
              meta: {
                label: 'User Details'
              },
              name: 'User',
              component: User
            }
          ]
        },
        {
          path: 'icons',
          redirect: '/icons/coreui-icons',
          name: 'CoreUI Icons',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'coreui-icons',
              name: 'Icons library',
              component: CoreUIIcons
            },
            {
              path: 'brands',
              name: 'Brands',
              component: Brands
            }
          ]
        },
      ],
      meta: {
        requiresAuth: true
      },
    },
    {
      path: '/404',
      name: 'Page404',
      component: Page404
    },
    {
      path: '/500',
      name: 'Page500',
      component: Page500
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
}

let router = new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configureRoutes()
})

export default router;