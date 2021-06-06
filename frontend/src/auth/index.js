let redirection = {
  configureRedirection: (router, store) => {
    router.beforeEach((to, from, next) => {
      const publicPages = ['/login', '/register', '/404', '/500'];
      const authRequired = !publicPages.includes(to.path);
      const loggedIn = localStorage.getItem('currentUserLoggedIn');
    
      if (authRequired && !loggedIn) {
        return next('/login');
      }
      
      next();
    });
  },
};

export default redirection;
