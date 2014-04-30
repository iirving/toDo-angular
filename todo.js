function TodoCtrl ($scope) {


$scope.todos = [{text: 'learn AngularJS', done:false},
                {text: 'Build an App', done:false }
            ];


$scope.getTotalTodos = function () {
  return $scope.todos.length;
}



$scope.addTodo = function () {
  $scope.todos.push({text:$scope.formTodoText, done:false});
  $scope.formTodoText = '';
};

}
