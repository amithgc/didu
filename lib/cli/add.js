/**
 * Module to handle the creation of a new task.
 * Exports a function that takes command line arguments and a tasks instance,
 * then creates a new task with the concatenated command line arguments as its description.
 */
module.exports = function(argv, tasks) {
    // Joins the command line arguments with spaces and creates a new task with that description
    return tasks.create(argv.commands.join(' '));
};
