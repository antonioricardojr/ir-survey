var app = angular.module( 'app' );

app.controller( 'MainController', [ '$scope', '$http', function ( $scope, $http ) {

    var self = this;

    self.idx = 0

    self.items = $http.get( '../../docs.json' )
        .then( function ( res ) {
            self.items = res.data;
            self.item_to_evaluate = self.items[ self.idx ]
            console.log( self.items )
        } );

    self.next = function ( ) {

        if ( self.idx < self.items.length - 1 ) {
            self.idx += 1
        } else {
            self.idx = 0
        }
        self.item_to_evaluate = self.items[ self.idx ]
    }

} ] );
