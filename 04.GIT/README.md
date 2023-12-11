# Git and Github

1. Install Git from the [official website](https://git-scm.com/downloads).
1. `git --version` command should return the Git version that is installed on your computer.
1. Type this in terminal with your credentials.

   ```bash
   git config --global user.name "Shehzad Iqbal"

   git config --global user.email "shehzaddiqbal@gmail.com"
   ```

1. If you don't have already Sign up for an account at [github.com](https://github.com/signup).
1. Create a new repo on github.com simply by clicking the `New` button and giving it a unique name.
1. Keep your repos public.
1. Copy http link below green `Code` button

   ```bash
   git clone <link>
   ```

1. This command will generate a hidden `.git` folder in your project, where Git stores all internal tracking data for the current repository. We don't need to look and change in .git. **All files next to `.git` folder will be pushed!**
1. Navigate in the Folder with

   ```bash
   cd folderName
   ```

1. Open VS Code with `code .` command and Create a files name `index.html`.
1. and then add files in your project.

   ```bash
   git add .
   ```

   ```bash
   git commit -m "my message"
   ```

   ```bash
   git push
   ```

1. Add your digital creations to the repository – your code, documents, images, or anything you create!

## Important

1. Repository is just a folder in Git.
1. Always make a repo before starting to code.
1. Keep committing code after finishing ever feature.
1. Never close your computer without pushing code to Github.
1. Keep you commit messages relevant to your feature.

## [Learning Git Repo by Shehzad](https://github.com/shehza-d/teaching-git)

## [Complete Git Course (Basic to Advance)](https://www.youtube.com/playlist?list=PLKueo-cldy_HjRnPUL4G3pWHS7FREAizF)

<!-- ## Points
- initialize mean setting-up the ground before starting something.
- cli vs gui
- repo
- working directory
- [Multiple Backups](https://git-scm.com/about/distributed) -->
