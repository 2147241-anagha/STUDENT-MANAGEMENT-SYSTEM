angular.module("student1",[])
.filter("myfilter",function()
{
    return function(input,option)
    {
        if(isNaN(option)||(option==""))
        {
            return input;
        }
        else {
        return input.substring(0,option).toUpperCase();
    }}
})

.controller("studentctrl",function($scope)
{
    var student=[
        {USN:"A101",name:'Paul',department:'Computer Science',program:"BCA",phone:9876543210,email:'paul123@christuniversity.in'},
        {USN:"A102",name:'Sayesha',department:'Humanities',program:"Psychology",phone:9876543210,email:'sayesha123@christuniversity.in'},
        {USN:"A103",name:'Melvin',department:'Art and Architecture',program:"BArch",phone:9876543210,email:'melvin123@christuniversity.in'},
        {USN:"A104",name:'Edward',department:'Computer Science',program:"MCA",phone:9876543210,email:'edward123@christuniversity.in'},
        {USN:"A105",name:'Neha',department:'Mathematics',program:"Bsc",phone:9876543210,email:'neha123@christuniversity.in'},
        {USN:"A106",name:'Patrick',department:'Biology',program:"Bsc",phone:9876543210,email:'patrick123@christuniversity.in'}
    ];
    $scope.student=student;
    $scope.rowlimit=6;

});
myapp.controller("studentctrl",function($scope,$http)
    {
        $http.get('https://github.com/2147241-anagha/STUDENT-MANAGEMENT-SYSTEM/blob/ca98adafbbcea259c91d06403ddc468e46cb4fdd/stu.js')
        //$http.get('stu.json')
        .success(function(response)
        {
            $scope.stu=response;
        });
    });