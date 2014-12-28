/**
 * Created by luis_blanco on 12/28/2014.
 */

eventsApp.factory('eventData', function ($resource) {
        return {
            getEvent: function () {
                return $resource('data/event/:id', {id: '@id'}).get({id: 1});
            }
        }
    }
);

//eventsApp.factory('eventData', function ($http, $log, $q) {
//        return {
//            getEvent: function (/**successcb*/) {
//                var deferred = $q.defer();
//
//                $http({method: 'GET', url: 'data/event/1.json'})
//                    .success(function (data, status, headers, config) {
//                        //$log.info(data, status, headers(), config);
//                        //successcb(data);
//                        deferred.resolve(data);
//                    })
//                    .error(function (data, status, headers, config) {
//                        //$log.warn(data, status, headers(), config);
//                        deferred.reject(status);
//                    });
//
//                return deferred.promise;
//            }
//        }
//    }
//);

//eventsApp.factory('eventData', function() {
//        return {
//            event: {
//                name: 'Angular Boot Camp',
//                date: '12/26/2014',
//                time: '16:38 pm',
//                location: {
//                    address: 'Google Headquarters',
//                    city: 'Mountain View',
//                    province: 'CA'
//                },
//                imageUrl: 'img/AngularJS-large.png',
//                sessions: [
//                    {
//                        name: 'Directives Masterclass',
//                        creatorName: 'Bob Smith',
//                        duration: 1,
//                        level: 'Advanced',
//                        abstract: 'In this session you will learn the ins and outs of directives!',
//                        upVoteCount: 0
//                    },
//                    {
//                        name: 'Scopes for fun and profit',
//                        creatorName: 'John Doe',
//                        duration: 2,
//                        level: 'Introductory',
//                        abstract: 'This session will take a look at scopes. Learn what they do, how they do it, and how to get them to do it for you!',
//                        upVoteCount: 0
//                    },
//                    {
//                        name: 'Well Behaved Controllers',
//                        creatorName: 'Jane Doe',
//                        duration: 4,
//                        level: 'Intermediate',
//                        abstract: 'Controllers are the beginning of everything Angular does. Learn how to craft controllers that will win the respect of your friends and neighbors.',
//                        upVoteCount: 0
//                    }
//                ]
//            }
//        }
//    }
//);
