'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData) {
        //$scope.snippet = '<span style="color: red">hi there</span>';
        //$scope.boolValue = true;
        //$scope.mystyle = {color: 'red'};
        //$scope.myclass = "blue";
        //$scope.buttonDisabled = true;
        $scope.sortorder = 'name';
        //$scope.event = eventData.event;
        //eventData.getEvent(function(event){
        //    $scope.event = event;
        //});

        $scope.event = eventData.getEvent();

        /*
        eventData.getEvent().then(
            function (event) {
                $scope.event = event;
            },
            function (statusCode) {
                console.log(statusCode);
            }
        );
        */

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        };
    }
);