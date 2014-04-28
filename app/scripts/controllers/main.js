'use strict';

angular.module('ToDo')
  .controller('todoCtrl', function ($scope) {
    $scope.todos = [];

    $scope.addTodo = function() {
    	$scope.todos.push({'title':$scope.newTodo, 'done':false})
    	$scope.newTodo = ''
    }
    $scope.clearCompleted = function() {
    	$scope.todos = $scope.todos.filter(function(item){
    		return !item.done
    	})
    }
    $scope.checkAll = function () {
        if ($scope.doneAll) {
            $scope.doneAll = false;
        } else {
            $scope.doneAll = true;
        }
        angular.forEach($scope.todos, function (todo) {
            todo.done = $scope.doneAll;
        });
    }

  });
