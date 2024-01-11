const assert = require('assert');

/**
 * Task class representing a task with an id, description, status, and modification date.
 */
function Task(id, desc, status, modified) {
    // Assertions to ensure that id and description are provided
    assert(id, 'Please enter an id');
    assert(desc, 'Please enter a task description');

    this.id = +id; // Converting id to a number
    this.desc = desc;
    this.status = status || 'pending';
    this.modified = modified || new Date();
}

/**
 * Static method to create an array of Task instances from an array of attributes.
 */
Task.create = function(arr) {
    return arr.map(attrs => new Task(attrs.id, attrs.desc, attrs.status, attrs.modified));
};

Task.prototype = {

    /**
     * Getter for id, returns the numerical id.
     */
    get id() {
        return this._id;
    },

    /**
     * Setter for id, converts the id to a number and validates it.
     */
    set id(id) {
        this._id = +id;
        assert(!Number.isNaN(this._id), 'ID must be a number');
    },

    /**
     * Marks the task as pending and updates the modification date.
     */
    undo: function() {
        this.status = 'pending';
        this.modified = new Date();
    },

    /**
     * Marks the task as completed and updates the modification date.
     */
    complete: function() {
        this.status = 'done';
        this.modified = new Date();
    },

    /**
     * Returns a JSON representation of the task.
     */
    toJSON: function() {
        return {
            id: this.id,
            desc: this.desc,
            status: this.status,
            modified: this.modified,
        };
    },
};

module.exports = Task;
