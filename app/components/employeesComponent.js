/**
 * Created by Moataz on 12/25/16.
 */

appModule.controller('employeesCTRL', function ($http,$scope) {
    $http.get('data/employee.json').then(function (response) {
       $scope.employees = response.data;
    })
})
appModule.component('employeesComponent', {
    templateUrl: 'app/templates/employees.html',
    controller: 'employeesCTRL',
    controllerAss: 'vm',
})
