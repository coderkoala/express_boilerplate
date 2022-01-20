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
        _name: 'CSidebarNavTitle',
        _children: ['Purchase Order Management']
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
        _children: ['Feedback Management']
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Feedback Management',
        icon: 'cil-envelope-letter',
        items: [
          {
            name: 'Add new Feedback',
            to: '/feedback/add-new',
          },
          {
            name: 'All Feedback',
            to: '/feedback/all'
          },
        ]
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['Task Management']
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Task Management',
        icon: 'cil-description',
        items: [
          {
            name: 'Task Management',
            to: '/task/add-new',
          },
          {
            name: 'All Feedback',
            to: '/task/all'
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