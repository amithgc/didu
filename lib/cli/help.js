const color = require('eyehurt');

/**
 * Module for displaying help information for the Didu application.
 */
module.exports = function(argv, tasks) {
    console.log(color('Didu - Your CLI Task Manager', 'blue'));
    console.log();
    console.log(color('Usage:', 'green'));
    console.log();
    console.log('    didu add <task>          ' + color('Creates a new task', 'green'));
    console.log('    didu                     ' + color('Lists all pending tasks', 'yellow'));
    console.log('    didu ls                  ' + color('Lists all pending tasks, Changes the status once selected', 'yellow'));
    console.log('    didu ls all              ' + color('Lists all tasks, Changes the status once selected', 'yellow'));
    console.log('    didu ls done             ' + color('Lists all completed tasks, Changes the status once selected', 'yellow'));
    console.log('    didu ls pending          ' + color('Lists all pending tasks, Changes the status once selected', 'yellow'));
    console.log('    didu pretty              ' + color('Displays all tasks', 'yellow'));
    console.log('    didu pretty all          ' + color('Displays all tasks', 'yellow'));
    console.log('    didu pretty done         ' + color('Displays all done tasks', 'yellow'));
    console.log('    didu pretty pending      ' + color('Displays all pending tasks', 'yellow'));
    console.log('    didu rm                  ' + color('Lists all tasks for removal', 'red'));
    console.log('    didu rm all              ' + color('Lists all tasks for removal', 'red'));
    console.log('    didu rm done             ' + color('Lists all completed tasks for removal', 'red'));
    console.log('    didu rm pending          ' + color('Lists all pending tasks for removal', 'red'));
    console.log('    didu clear               ' + color('Deletes all done tasks', 'red'));
    console.log('    didu clear all           ' + color('Deletes all tasks', 'red'));
    console.log('    didu clear done          ' + color('Deletes all done tasks', 'red'));
    console.log('    didu clear pending       ' + color('Deletes all pending tasks', 'red'));
    console.log('    didu help                ' + color('Displays this help information', 'yellow'));
    console.log();
};
