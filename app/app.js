angular.module('app', [
        'ui.router'
    ])
    .config(function ($stateProvider, $urlRouterProvider) {
        /**
         *  this will need to be changed to reflect what I'm doing. To start I will
         *  have one menu and one main content area, which will toggle between
         *  Start Match (can switch to current match)
         *  Attack Table
         *  Settings
         */
            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: 'app/views/home.html'
                });
            $stateProvider
                .state('attack-table', {
                    url: '/attack-table',
                    templateUrl: 'app/views/attack-table.html'
                });
        $stateProvider
            .state('settings', {
                url: '/settings',
                templateUrl: 'app/views/settings.html'
            });


                //.state('home.attack-table', {
                //    url: '/attack-table',
                //    templateUrl: 'app/views/attack-table.html'
                //})
                //.state('home.settings', {
                //    url: '/settings',
                //    templateUrl: 'app/views/settings.html'
                //});
                //.state('settings.profile', {
                //    url: '/profile',
                //    templateUrl: 'app/views/profile.html'
                //});
                //.state('settings.account', {
                //    url: '/account',
                //    templateUrl: 'app/views/account.html'
                //});
            $urlRouterProvider.otherwise('/home')

        }
    )
    .controller('character_info', function () {
        var character_info = this;

        character_info.characters = [
            {
                id: 0,
                name: 'Vegeta',
                race: 'Saiyan',
                alignment: 'Villain',
                level1: [0, 250, 500, 1000, 2000, 3000, 4000, 5000, 6000, 8000, 10000],
                level2: [0, 500, 1000, 2000, 3000, 4000, 5000, 10000, 15000, 20000, 25000],
                level3: [0, 500, 1000, 5000, 10000, 25000, 50000, 75000, 100000, 125000, 150000],
                level4: [0, 1000, 10000, 100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000]
            },
            {
                id: 1,
                name: 'Goku',
                race: 'Saiyan',
                alignment: 'Hero',
                level1: [0, 500, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9001],
                level2: [0, 500, 1000, 5000, 9000, 13000, 17000, 21000, 25000, 29000, 33000],
                level3: [0, 50000, 100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000],
                level4: [0, 100000, 200000, 400000, 600000, 800000, 1000000, 1200000, 1350000, 1500000, 1650000]
            },
            {
                id: 2,
                name: 'Gohan',
                race: 'Saiyan, Namekian',
                alignment: 'Hero',
                level1: [0, 200, 400, 600, 800, 1000, 1500, 2000, 2500, 3000, 3500],
                level2: [0, 1000, 2000, 4000, 6000, 8000, 10000, 12000, 14000, 16000, 18000],
                level3: [0, 750, 7500, 75000, 100000, 150000, 200000, 250000, 300000, 350000, 400000],
                level4: [0, 500, 5000, 50000, 125000, 200000, 225000, 300000, 375000, 450000, 525000]
            },
            {
                id: 3,
                name: 'Krillin',
                race: 'Human',
                alignment: 'Hero',
                level1: [0, 400, 800, 1200, 1600, 2000, 2400, 2800, 3200, 3600, 4000],
                level2: [0, 3000, 5000, 7000, 9000, 11000, 13000, 15000, 17000, 19000, 21000],
                level3: [0, 1000, 5000, 10000, 25000, 50000, 75000, 150000, 225000, 300000, 375000],
                level4: [0, 1000, 10000, 25000, 50000, 75000, 100000, 200000, 300000, 400000, 500000]
            },
            {
                id: 4,
                name: 'Frieza',
                race: 'Human',
                alignment: 'Villain',
                level1: [0, 450, 900, 4500, 9000, 19000, 34000, 49000, 64000, 79000, 94000],
                level2: [0, 900, 9000, 19000, 39000, 59000, 79000, 99000, 199000, 399000, 599000],
                level3: [0, 1000, 5000, 10000, 25000, 50000, 100000, 200000, 400000, 700000, 1000000],
                level4: [0, 25000, 50000, 100000, 200000, 400000, 600000, 800000, 1000000, 1200000, 1400000]
            },
            {
                id: 5,
                name: 'Piccolo',
                race: 'Namekian',
                alignment: 'Hero',
                level1: [0, 900, 1100, 1300, 1700, 2200, 3500, 4500, 5500, 7000, 8500],
                level2: [0, 500, 1000, 2000, 5000, 8000, 11000, 14000, 17000, 20000, 23000],
                level3: [0, 1000, 10000, 50000, 100000, 150000, 200000, 300000, 400000, 500000, 600000],
                level4: [0, 5000, 50000, 100000, 150000, 250000, 350000, 450000, 550000, 650000, 750000]
            }
        ]


    })
    .controller('player_info', function () {
        var player = this;

        player.defaults = {id: 0, name: 'Default Player Name', character: 'Goku'};




        console.log( 'you can see this?' );

        var rest_url = 'http://skyrises.hjstaging.com/wp-json/meetup/awp';

        //var rest_data = $http.get( rest_url );

        //var rest_data = jQuery.ajax({
        //    dataType: "json",
        //    url: rest_url,
        //    data: data,
        //    success: success
        //});

        //console.log( rest_data );


    })
    .controller('anger', function () {
        var anger = this;

        /**
         *  Set Anger Buttons
         *  This may change based on the main personality and mastery
         *  I need to find a way to assign a class based on angular?
         */
        anger.buttons = [1,2,3,4,5];

        anger.selected = 0;

        anger.select= function(index) {
            console.log( 'select worked ' + index );
            anger.selected = index;
        };








    })
    //.controller('Mastery', function Mastery(defaults) {
    //
    //})
;
