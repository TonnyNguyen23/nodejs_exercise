const express = require('express');
// const authRoute = require('./auth.route');
// const userRoute = require('./user.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');
// const classRoute = require('./class.route');
// const studentRoute = require('./student.route');
const peopleRoute = require('./people.route');
const professionalRoute = require('./professional.route');
const workRoute = require('./work.route');
const companyRoute = require('./company.route');

const router = express.Router();

const defaultRoutes = [
  // {
  //   path: '/auth',
  //   route: authRoute,
  // },
  // {
  //   path: '/student',
  //   route: studentRoute,
  // },
  // {
  //   path: '/class',
  //   route: classRoute,
  // },
  {
    path: '/people',
    route: peopleRoute,
  },
  {
    path: '/professional',
    route: professionalRoute,
  },
  {
    path: '/work',
    route: workRoute,
  },
  {
    path: '/company',
    route: companyRoute,
  },
  
  // {
  //   path: '/users',
  //   route: userRoute,
  // },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
