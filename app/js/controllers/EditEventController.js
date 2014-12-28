/**
 * Created by luis_blanco on 12/27/2014.
 */
'use strict'

eventsApp.controller('EditEventController',
    function EditEventController($scope) {
        $scope.saveEvent = function (event, newEventForm) {
            console.log(newEventForm);
            if (newEventForm.$valid) {
                window.alert('event ' + event.name + ' saved!');
            }
        };

        $scope.cancelEdit = function () {
            window.location = "EventDetails.html";
        };
    }
);