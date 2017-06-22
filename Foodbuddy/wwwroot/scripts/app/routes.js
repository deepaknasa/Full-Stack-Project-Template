"use strict";
var app_component_1 = require("./app-component");
var index_1 = require("./stats/index");
var index_2 = require("./login/index");
exports.APP_ROUTES = [
    { path: '', component: app_component_1.HomeComponent },
    { path: 'stats', component: index_1.StatisticsComponent },
    { path: 'login', component: index_2.LoginComponent },
    { path: 'logout', component: index_2.LogoutComponent },
    { path: 'register', component: index_2.RegisterComponent },
];
//# sourceMappingURL=routes.js.map