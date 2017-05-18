"use strict";
var app_component_1 = require("./app.component");
var index_1 = require("./login/index");
exports.DEMO_APP_ROUTES = [
    { path: '', component: app_component_1.Home },
    { path: 'login', component: index_1.LoginComponent },
    { path: 'register', component: index_1.RegisterDialog },
];
//# sourceMappingURL=routes.js.map