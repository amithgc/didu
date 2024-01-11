const fzf = require('node-fzf');
const color = require('eyehurt');

/**
 * Module to handle task listing and interaction using fuzzy search.
 * Allows users to toggle task status between 'pending' and 'done'.
 */
module.exports = function(argv, tasks, opts) {
    // Determine which task status to list, defaulting to 'pending'
    let command = argv.commands.length > 0 ? argv.commands[0] : 'pending';
    let tasksList = tasks.list(command);

    // Status symbols for tasks, colored appropriately
    let status = {
        pending: color('✖', 'red'),
        done: color('✓', 'green'),
    };

    // Map tasks to a formatted string for display
    let filteredTasks = tasksList.map(task => ` ${task.id}. ${task.desc}`);

    // Configure fzf options
    let options = {
        mode: 'fuzzy',
        list: filteredTasks,
        prefill: '',
        prelinehook: function (index) { return '[ ' + status[tasksList[index].status] + ' ] - '; },
    };

    // Execute fuzzy search and handle the selected task
    fzf(options, (result) => {
        if (result.selected) {
            takeAction(result.selected.value);
        }
    });

    // Function to toggle the status of the selected task
    function takeAction(task) {
        var id = parseInt(task.split('.')[0].trim());
        tasks.check(id);
    }
};
