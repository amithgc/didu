const color = require('eyehurt');
const cTable = require('console.table');
const moment = require('moment');

/**
 * Module to handle task listing and to display them in a pretty and colorful way.
 * Allows users to toggle task status between 'pending' and 'done'.
 * Uses moment.js to format date into a human-readable format.
 *
 * @param {Object} argv - Arguments passed from the command line.
 * @param {Object} tasks - Task handler object.
 * @param {Object} opts - Optional parameters.
 */
module.exports = function(argv, tasks, opts) {
    // Determine which task status to list, defaulting to 'pending'
    let command = argv.commands.length > 0 ? argv.commands[0] : 'all';
    let tasksList = tasks.list(command);

    // Styling the tasks list for pretty and colorful output using eyehurt and console.table
    const styledTasks = tasksList.map(task => {
        return {
            ID: color(task._id.toString(), 'yellow'),
            Description: color(task.desc, 'cyan'),
            Status: task.status === 'pending' ? color(task.status, 'red') : color(task.status, 'green'),
            Modified: color(moment(task.modified).format('MMMM Do YYYY, h:mm:ss a'), 'magenta')
        };
    });

    // Displaying the styled tasks in a table format
    console.table(styledTasks);
};
