// Copyright 2014 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Service for the 'embed exploration' modal.
 *
 * @author sll@google.com (Sean Lip)
 */

oppia.factory('embedExplorationButtonService', ['$modal', function($modal) {
  var embedExplorationButtonService = {
    showModal: function(explorationId) {
      $modal.open({
        templateUrl: 'modals/embedExploration',
        backdrop: true,
        resolve: {
          explorationId: function() {
            return explorationId;
          }
        },
        controller: ['$scope', '$modalInstance', '$window', 'explorationId',
          function($scope, $modalInstance, $window, explorationId) {
            $scope.explorationId = explorationId;
            $scope.serverName = $window.location.protocol + '//' + $window.location.host;

            $scope.close = function() {
              $modalInstance.dismiss('close');
            };
          }
        ]
      });
    }
  };

  return embedExplorationButtonService;
}]);
