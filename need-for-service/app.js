// File: chapter5/need-for-service/app.js
angular.module('notesApp', [])

    .controller('MainCtrl', [function() {

        console.log("Entering MainCtrl");

        var self = this;

        self.tab = 'first';

        self.open = function(tab) {
            self.tab = tab;
        };

    }])

    .controller('SubCtrl', [function() {

        console.log("Entering SubCtrl");

        var self = this;

        self.list = [

            {id: 1, label: 'Item 0'},
            {id: 2, label: 'Item 1'}

        ];

        self.add = function() {

            console.log("Entering add()");

            self.list.push({

                id: self.list.length + 1,

                label: 'Item ' + self.list.length

            });

        };

    }]);
