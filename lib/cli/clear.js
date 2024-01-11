/**
 * Module to handle the deletion of all tasks.
 */
module.exports = function(argv, tasks) {
    let command = argv.commands.length > 0 ? argv.commands[0] : 'done';
    let tasksList = tasks.list(command);

    console.log('Are you sure? (y/n)');
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', function(str) {
        process.stdin.pause();
        if ('y' === str.trim()) {
            for (let task of tasksList) {
                tasks.rm(task._id);
            }
        } else {
            console.error('Aborting...');
            process.exit(1);
        }
    });
};
