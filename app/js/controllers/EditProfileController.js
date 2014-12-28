/**
 * Created by luis_blanco on 12/28/2014.
 */

'use strict';

eventsApp.controller('EditProfileController',
    function EditProfileController($scope, gravatarUrlBuilder) {
        $scope.user = {
            emailAddress: ""
        };

        $scope.getGravatarUrl = function(email) {
            console.log("email: " + email);
            if (email && email !== undefined) {
                return gravatarUrlBuilder.buildGravatarUrl(email);
            }
        };

    }
);