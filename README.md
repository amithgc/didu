# Didu (Did U?) - Your Simple Yet Powerful Todo CLI

Welcome to **Didu**, a sleek, user-friendly, and powerful command-line interface (CLI) application for managing your daily tasks with ease. Designed for simplicity and efficiency, Didu allows you to add, manage, and search tasks in a flash, using intuitive commands and fuzzy search capabilities.

## Features

- **Add Tasks Quickly:** Effortlessly add new tasks to your list.
- **Flexible Task Searching:** Use fuzzy search to find and update tasks.
- **Task Status Management:** Easily mark tasks as pending or done.
- **Delete Tasks:** Remove tasks that are no longer needed.
- **Intuitive Command Usage:** Simple commands for all operations.
- **Color-Coded Display:** Visually appealing and easy to read task statuses.

## Installation

Install **Didu** globally via npm:

```bash
npm install -g didu 
```


## Usage

**Didu** is designed to be straightforward and intuitive. Here are the basic commands:

### Adding a Task

To add a task, simply type:

bashCopy code

```bash
didu add this is a test task
```

### Listing and Searching Tasks

-   **List Pending Tasks:**

    ```bash
    didu ls
    didu ls pending
    ```

-   **List Completed Tasks:**

    ```bash
    didu ls done
    ```

-   **List All Tasks:**

    ```bash
    didu ls all
    ```


### Deleting Tasks
Use the below commands to list the tasks and search, One a task is selected, the task will be deleted.

```bash
    didu rm
    didu rm all
    didu rm pending
    didu rm done
```

## Fuzzy Search

Enhance your task searching experience with the integrated fuzzy search feature. Simply type your command, and **Didu** will present a list of tasks. You can then type to filter and find the exact task you're looking for.

## Contribute

Contributions are always welcome! Feel free to fork the repository and submit your contributions via pull requests.

## License

Didu is released under the MIT License.

Happy Task Managing with **Didu**!