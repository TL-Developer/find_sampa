angular.module('find-sampa')

.directive('modalPopupImagem', [function(){

  return {
    transclude: true,
    restrict: 'AE',
    templateUrl: 'partials/client/includes/modal-popup.html'
  };

}])

.directive("fileread", [function () {
    return {
        scope: {
            fileread: "="
        },
        link: function (scope, element, attributes) {
            element.bind("change", function (changeEvent) {
                var reader = new FileReader();
                reader.onload = function (loadEvent) {
                    scope.$apply(function () {
                        //scope.fileread = loadEvent.target.result;
                        scope.fileread = {
                          image: changeEvent.target.files[0].name,
                          imageBase64: loadEvent.srcElement.result
                        }
                    });
                }
                reader.readAsDataURL(changeEvent.target.files[0]);
            });
        }
    }
}]);
