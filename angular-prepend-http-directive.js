(function(angular){
    'use strict';

    angular
        .module("prependHttpDirective", [])
        .directive('prependHttp', prependHttp);

    function prependHttp(){
        return {
            restrict: 'A',
            link: link
        };

        function link(scope, element, attrs) {
            element.bind('keypress', prependHttp);
        }


        function prependHttp(event){
            if(this.value.length==0)
                this.value = "http://";
        }
    }

})(angular);