function TodoCtrl ($scope) {
  $scope.TotalTodos = 4;

$scope.todos = [{text: 'learn AngularJS', done:false},
                {text: 'Build an App', done:false }
            ];

$scope.addTodo = function () {
  $scope.todos.push({text:$scope.formTodoText, done:false});
};

}
