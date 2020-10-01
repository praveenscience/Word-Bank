# Word Bank

> *Your daily dose of Word Bites. Share your daily knowledge!*

## Introduction

## Setting up Locally

### Requirements

### Installation

### Running

## Contribution Guidelines
<hr>
When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

### Steps required for contributing in open source projects:

1. [Fork](https://github.com/praveenscience/Word-Bank) the project and star the.
2. Clone the project.
   ```bash
   git clone https://<your-github-username>@github.com/<your-github-username>/word-bank
   ```
3. Enter the project directory.
   ```bash
   cd client
   ```
4. Open directory, you wish to open.
   ```bash
   Start .
   ```
5. Changes to be done and save it.
6. Create a new branch before adding the file.
   ```bash
   git checkout -b <Enter branch name>
   ```
7. Go to branch if you are not in your branch.
   ```bash
   git checkout <Your branch name>
   ```
8. Add the file.
   ```bash
   git add <File-Name>
   ```
9. See the status.
   ```bash
   git s
   ```
10. Do commit with appropriate message to show what have been changed.
    ```bash
    git commit -m "<Type exactly what did you change>"
     ```

11. Push the file to the remote.
    ```bash
    git push -u origin <Your branch name>
    Counting objects: 34, done.
    Delta compression using up to 2 threads.
    Compressing objects: 100% (21/21), done.
    Writing objects: 100% (28/28), 6.87 KiB, done.
    Total 28 (delta 13), reused 12 (delta 7)
    To git@github.com:AbhiVikrant/word-bank.git
    * [new branch]      5-contribution-update -> 5-contribution-update
     ```

#### After making the push to origin, you need to be done pull request.

### Steps require for doing pull request:
1. Go to https://github.com/<your GitHub name>/word-bank
2. Check that your new branch is there.
3. Check that your latest change to your file let it be Readme.md is in it.
4. You can make more changes locally, and continue committing them, and pushing them to GitHub. When you’ve made all the changes that you’d like  to accept though, it’s time to send a pull request.
5. Click on create a new pull request.
6. Now, Yoi have created the pull request. And if project's owner like the changes and after reviewing, he/she will merge them.

### ****Important:****  make sure that you send it from your new branch (not from your master) the way you did before.

> ### Lists of some other commands that help you while contributing to open source projects:
- Check all the log.
  ```bash
   git log
   ```
- Show local branch.
  ```bash
   git branch
   ```
- Switch between local branches.
  ```bash
   git checkout
   ```
- Switch back to master branch.
   ```bash
   git checkout master
   ```
- Change the last commit.
   ```bash
   git commit --amend
   ```
- Change the last commit with updated message.
  ```bash
   git commit --amend -m "<Type Updated message>"
   ```
- Update local version of repo from remote version.
  ```bash
   git pull
   ```
### Steps require for working with remote and update the local:
1. Use command as:
    ```bash
   git checkout master
   ```
2. Use git pull.
     ```bash
   git pull
   Already up to date.
   ```
3. Use command for adding remote upstream.
    ```bash
   git remote add upstream https://<UserName@>github.com/praveenscience/word-bank.git
   ```
4. Use command as
 ```bash
   git remote -v
   Already up to date.
   ```
5. Use command to update changes according to origin or master.
 ```bash
   git pull upstream master
   Already up to date.
   ```
### Happy Coding
### Happy to contribute opensource