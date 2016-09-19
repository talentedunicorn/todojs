var todojs = (function() {
  var tasks = [];

  // cache DOM
  var $el = $('#taskModule');
  var $addTaskInput = $el.find('#taskInput');
  var $addTaskButton = $el.find('#addTaskButton');
  var $taskList = $el.find('#taskList');
  var taskTemplate = $taskList.find('#taskTemplate').html();

  // Render
  _render();

  // Bind events
  _bindEvents();

  function _render() {
    $taskList.html(Mustache.render(taskTemplate, {tasks: tasks}));
  }

  function _bindEvents() {
    $addTaskButton.on('click', _submitTask);
    $addTaskInput.on('keypress', _submitTask);
    $taskList.delegate('.icon', 'click', toggleStatus);
  }

  function _resetInputField() {
    $addTaskInput.val('');
  }

  function _submitTask(e) {
    if (e.type == 'click' | e.which == 13) {
      var taskText = $addTaskInput.val();
      addTask(taskText);
    }
  }

  function addTask(taskText) {
    if (taskText.trim().length > 0) {
      tasks.push(taskText);
      _render();
    }
    _resetInputField();
  }

  function toggleStatus(e) {
    $(e.target).parents('.task').toggleClass('done');
  }


  return {
    addTask: addTask,
  };
})();
