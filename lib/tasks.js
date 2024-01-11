const Task = require('./task');
const color = require('eyehurt');

/**
 * Tasks class to manage task operations like listing, creating, checking, and removing tasks.
 */
function Tasks(database) {
    this.database = database;
}

Tasks.prototype = {
    /**
     * Lists tasks based on their status.
     */
    list: function (status) {
        return this.items
            .filter(task => status === 'all' || task.status === status)
            .sort((a, b) => a.id - b.id);
    },

    /**
     * Creates a new task with the given description.
     */
    create: function (desc) {
        const task = new Task(this.nextId(), desc);
        this.items.push(task);
        this.save();
        this.logTaskDetails("Task Saved", task);
        return task;
    },

    /**
     * Toggles the status of a task between 'pending' and 'done'.
     */
    check: function (id) {
        const task = this.find(id);
        task.status === 'pending' ? task.complete() : task.undo();
        this.save();
        this.logTaskDetails("Task marked as " + task.status, task);
        return task;
    },

    /**
     * Removes a task by its ID.
     */
    rm: function (id) {
        const task = this.find(id);
        this.items.splice(this.items.indexOf(task), 1);
        this.save();
        this.logTaskDetails("Task Deleted", task);
        return task;
    },

    /**
     * Generates the next unique ID for a new task.
     */
    nextId: function () {
        return Math.max(0, ...this.items.map(task => task.id)) + 1;
    },

    /**
     * Saves the current state of tasks to the database.
     */
    save: function () {
        this.database.write(this.items);
    },

    /**
     * Finds a task by its ID.
     */
    find: function (id) {
        const task = this.items.find(task => task.id === Number(id));
        if (!task) {
            throw new Error('Cannot find a task item with id "' + id + '"');
        }
        return task;
    },

    clear: function(status) {
        if (!status) return this.save([]);

        this.save(this.items.filter(function(task) {
            return status !== task.status;
        }));
    },

    /**
     * Getter for items, initializes items from the database if not already loaded.
     */
    get items() {
        if (!this._items) this._items = Task.create(this.database.read());
        return this._items;
    },

    /**
     * Logs task details in a structured format.
     */
    logTaskDetails: function (message, task) {
        console.log();
        console.log(color(message, 'blue'));
        console.log(color(" ID: ", 'yellow') + task.id);
        console.log(color(" Description: ", 'yellow') + color(task.desc, 'green'));
        console.log(color(" Status: ", 'yellow') + color(task.status, 'red'));
        console.log();
    }
};

module.exports = Tasks;
