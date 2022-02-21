angular.module('myapp',['ngRoute'])
.config(function($routeProvider)
{
    $routeProvider.when('/index1',
    {
        templateUrl:'christ/index1.html',
        controller:'indexctrl'}).when('/index1/:first/:last',
        {
            templateUrl:'christ/index1.html',
            controller:'indexctrl'
    }).when('/gateways',
    {
        templateUrl:'christ/gateways.html',
        controller:'gatewaysctrl'
    }).when('/feedback',
    {
        templateUrl:'christ/feedback.html',
        controller:'feedbackctrl'
    })
})
.controller('myctrl',function()
{

})
.controller("indexctrl",function($scope,$routeParams)
{
    $scope.message="Student"
    if($routeParams.first&&$routeParams.last)
    {
        $scope.person={
            first:$routeParams.first,
            last:$routeParams.last
        };
    }
})
.controller("gatewaysctrl",function($scope,$http)
{
     $http.get('https://raw.githubusercontent.com/2147241-anagha/STUDENT-MANAGEMENT-SYSTEM/main/student.json')
    .success(function(response)
    {
        $scope.gateways=response.gateways; 
    });

})


.controller("indexctrl",function($scope,$http)
{
    // $http.get('indexinfo.json')
    // .success(function(response)
    // {
    //     $scope.houseinformation=response.record;
    // });
    $http.get('https://raw.githubusercontent.com/2147241-anagha/STUDENT-MANAGEMENT-SYSTEM/main/student.json')
    .success(function(response)
    {
        $scope.student=response.student; 
    });
})
// .controller.filter("myfilter",function($scope)
// {
//     return function(input)
//     {
//        return input.substring(0,1).toUpperCase()+input.substring(1,undefined).toLowerCase();
//     }
// })
// .controller.filter("filtercity",function(){

//     return function(input)
//     {    
//     input = input.split(',');
//     for (var i = 0; i < input.length; i++) {
//     input[i] = input[i].charAt(0).toUpperCase() + input[i].slice(1);
//     }
//    input = input.join(" ");
//    return(input);
// }

// });