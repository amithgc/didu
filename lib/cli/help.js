const color = require('eyehurt');

/**
 * Module for displaying help information for the Didu application.
 */
module.exports = function(argv, tasks) {
    console.log(color('Didu - Your CLI Task Manager', 'blue'));
    console.log();
    console.log(color('Usage:', 'green'));
    console.log();
    console.log('    didu                     ' + color('Lists all pending tasks', 'yellow'));
    console.log('    didu help                ' + color('Displays this help information', 'yellow'));
    console.log('    didu add <task>          ' + color('Creates a new task', 'yellow'));
    console.log('    didu ls                  ' + color('Lists all pending tasks, Changes the status once selected', 'yellow'));
    console.log('    didu ls all              ' + color('Lists all tasks, Changes the status once selected', 'yellow'));
    console.log('    didu ls done             ' + color('Lists all completed tasks, Changes the status once selected', 'yellow'));
    console.log('    didu ls pending          ' + color('Lists all pending tasks, Changes the status once selected', 'yellow'));
    console.log('    didu rm                  ' + color('Lists all tasks for removal', 'yellow'));
    console.log('    didu rm all              ' + color('Lists all tasks for removal', 'yellow'));
    console.log('    didu rm done             ' + color('Lists all completed tasks for removal', 'yellow'));
    console.log('    didu rm pending          ' + color('Lists all pending tasks for removal', 'yellow'));
    console.log('    didu clear               ' + color('Destroys all todo items', 'yellow'));
    console.log();
};
