"use strict";
var app_component_1 = require("./app.component");
var login_component_1 = require("./login/login.component");
exports.DEMO_APP_ROUTES = [
    { path: '', component: app_component_1.Home },
    { path: 'login', component: login_component_1.LoginDialog },
    { path: 'register', component: login_component_1.RegisterDialog },
];
//# sourceMappingURL=routes.js.map