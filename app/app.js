/**
 * Created by Moataz on 12/25/16.
 */
var appModule = angular.module('appModule', ['ngComponentRouter']);
appModule.value('$routerRootComponent', 'app');


appModule.component('app', {
    template: '<header-component></header-component><ng-outlet></ng-outlet>',
    $routeConfig: [
        {path: '/', name: 'Home', component: 'homeComponent'},
        {path: '/about', component: 'aboutComponent', name: 'About'},
        {path: '/employees', component: 'employeesComponent', name: 'Employees'},
    ]
})
