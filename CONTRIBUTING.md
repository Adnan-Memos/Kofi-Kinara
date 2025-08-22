# Contributing to Kofi Kinara

First off, thank you for considering contributing to Kofi Kinara! It's people like you that make the open source community such a great place. We welcome any and all contributions, from bug reports to new features.

## Where to Start

Not sure where to start? Here are a few ways you can contribute:

*   **Check out our Notion page:** We use Notion to track our issues and features. You can find our Notion page [here](https://www.notion.so/your-notion-page). (Please replace this with your actual Notion page URL).
*   **Contribute code:** If you want to contribute code, please see the "Code Contributions" section below.

## Our Workflow

We use a `main` and `production` branch workflow.

*   **`main`:** This is the development branch. All new features and bug fixes should be based on this branch. All pull requests should be made to this branch.
*   **`production`:** This is the release branch. It contains the code that is deployed to production. Only the project owner can merge changes into this branch.

## Code Contributions

### Setting Up Your Development Environment

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Adnan-Memos/Kofi-Kinara.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd Kofi-Kinara
    ```
3.  **Install the dependencies:**
    ```bash
    npm install
    ```
4.  **Set up your environment variables:** This project requires certain environment variables to be set up to run correctly. You will need to create a `.env` file in the root of the project and add the required environment variables. You can determine which variables are needed by looking at the source code.

### Making Your Changes

1.  **Create a new branch from `main`:**
    ```bash
    git checkout main
    git pull origin main
    git checkout -b <branch-name>
    ```
    Please follow the branch naming convention described below.

2.  **Make your changes:** Make your changes to the code and make sure to test them.

### Commit Message Format

We use the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification for our commit messages. This allows us to automatically generate changelogs and release notes.

A commit message should be structured as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer]
```

**Example:**

```
feat: add user authentication

This commit adds the ability for users to sign up and log in to the application.

Fixes #123
```

*   **`<type>`:** One of `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`.
*   **`<description>`:** A short, imperative-tense description of the change.
*   **`[optional body]`:** A longer, more detailed description of the change.
*   **`[optional footer]`:** Any additional information, such as issue numbers or breaking changes.

4.  **Push your changes:**
    ```bash
    git push origin <branch-name>
    ```

5.  **Create a pull request to `main`:** Go to the [pull requests page](https://github.com/Adnan-Memos/Kofi-Kinara/pulls) of the repository and click the "New pull request" button. Make sure the base branch is `main`.

### Branch Naming Convention

We use the following branch naming convention:

`<type>/<notion-task-id>`

*   **`<type>`:** One of `feat`, `fix`, `docs`, `style`, `refactor`, `test`.
*   **`<notion-task-id>`:** The ID of the task in Notion.

For example: `feat/4a5f6b7c`


## Code of Conduct

We have a [Code of Conduct](CODE_OF_CONDUCT.md) that we expect all contributors to follow. Please make sure you have read it before contributing.

## License

By contributing to Kofi Kinara, you agree that your contributions will be licensed under the [Apache 2.0 + Commons Clause](./LICENSE) license.