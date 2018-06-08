var app = angular.module( 'app' );



app.controller( 'MainController', [ '$scope', '$http', function ( $scope, $http ) {

    var self = this;

    self.items = $http.get( '../../docs.json' )
        .then( function ( res ) {
            self.items = res.data;
        } );

} ] );
