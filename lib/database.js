const fs = require('fs');

/**
 * Database class to handle reading and writing to a file.
 */
function Database(path) {
    this.path = path;
}

/**
 * Reads data from the file and returns it.
 * Returns an empty array if there's an error in reading or parsing the file.
 */
Database.prototype.read = function() {
    let ret = [];

    try {
        const contents = fs.readFileSync(this.path, 'utf8');
        ret = JSON.parse(contents);
    } catch(e) {
        // Error handling can be improved if needed
    }

    return ret;
};

/**
 * Writes data to the file.
 * Converts the data to a JSON string before writing.
 */
Database.prototype.write = function(data) {
    const json = JSON.stringify(data);
    fs.writeFileSync(this.path, json, 'utf8');
};

module.exports = Database;
