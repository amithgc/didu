# Didu (Did U?) - Your Simple Yet Powerful Todo CLI [![npm version](https://badge.fury.io/js/didu.svg)](https://badge.fury.io/js/didu)
<h1 align="center">
	<img width="100%" src="media/didu_logo.png" alt="DIDU">
</h1>

Welcome to **Didu**, a sleek, user-friendly, and powerful command-line interface (CLI) application for managing your daily tasks with ease. Designed for simplicity and efficiency, Didu allows you to add, manage, and search tasks in a flash, using intuitive commands and fuzzy search capabilities.

<h1 align="center">
<img width="100%" src="https://raw.githubusercontent.com/amithgc/didu/main/media/demo-video.webp?raw=true">
</h1>

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

## Usage

```
  Usage:

    didu add <task>          Creates a new task
    didu                     Lists all pending tasks
    didu ls                  Lists all pending tasks, Changes the status once selected
    didu ls all              Lists all tasks, Changes the status once selected
    didu ls done             Lists all completed tasks, Changes the status once selected
    didu ls pending          Lists all pending tasks, Changes the status once selected
    didu v                   Displays all tasks
    didu v all               Displays all tasks
    didu v done              Displays all done tasks
    didu v pending           Displays all pending tasks
    didu rm                  Lists all tasks for removal
    didu rm all              Lists all tasks for removal
    didu rm done             Lists all completed tasks for removal
    didu rm pending          Lists all pending tasks for removal
    didu clear               Deletes all done tasks
    didu clear all           Deletes all tasks
    didu clear done          Deletes all done tasks
    didu clear pending       Deletes all pending tasks
    didu help                Displays this help information

  ```

## Fuzzy Search

Enhance your task searching experience with the integrated fuzzy search feature. Simply type your command, and **Didu** will present a list of tasks. You can then type to filter and find the exact task you're looking for.


## Contribute

Contributions are always welcome! Feel free to fork the repository and submit your contributions via pull requests.

## License

Didu is released under the MIT License.

Happy Task Managing with **Didu**!, Here is the [blog post](https://blog.amithgc.com/post/didu-simple-task-management-cli-application/) explaining everything!!