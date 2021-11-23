export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavItem',
        name: 'Dashboard',
        to: '/dashboard',
        icon: 'cil-speedometer',
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Purchase Order',
        to: '/purchase',
        icon: 'cil-asterisk',
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['Customer Management']
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Customer Management',
        route: '/customers/all',
        icon: 'cil-group',
        items: [
          {
            name: 'Add new Customer',
            to: '/customers/add-new',
          },
          {
            name: 'All customers',
            to: '/customers/all'
          },
        ]
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['Components']
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Icons',
        route: '/icons',
        icon: 'cil-star',
        items: [
          {
            name: 'CoreUI Icons',
            to: '/icons/coreui-icons',
            badge: {
              color: 'info',
              text: 'NEW'
            }
          },
          {
            name: 'Brands',
            to: '/icons/brands'
          },
        ]
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Widgets',
        to: '/widgets',
        icon: 'cil-calculator',
      },
      {
        _name: 'CSidebarNavDivider',
        _class: 'm-2'
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['Extras']
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Pages',
        route: '/pages',
        icon: 'cil-star',
        items: [
          {
            name: 'Register',
            to: '/register'
          },
        ]
      },
    ]
  }
]