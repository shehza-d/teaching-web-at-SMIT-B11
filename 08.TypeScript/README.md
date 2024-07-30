# Typescript

<p align="center">
<img width="100" height="100" src="https://skillicons.dev/icons?i=ts" />
</p>

## [Learn complete TS from Hitest](https://youtu.be/30LWjhZzg50?si=jnPXMbx3GGDmAHmz)

### [TS learning repo by Sufiyan](https://github.com/InnoSufiyan/TypeScript)

## Steps

1. Install NodeJs (lts version) from [here](https://nodejs.org/en/download/prebuilt-installer).

1. Run this on a new CMD (command prompt) to install typescript.

   ```bash
   npm install --global typescript
   ```

1. Create a file with `.ts` extension and write code in it.

1. Run this in root of your project director to create a tsconfig.json file.

   ```bash
   tsc --init
   ```

1. Run this command to compile the file.

   ```bash
   tsc
   ```

Other

- use tsc -w to watch for changes in the file.
- in a ts project we generally don't push the compiled js files to the repo.

- use `.gitignore` to ignore the js files.
- we will write code in `.ts` files and compile them to `.js` files.
- `.js` will be connected to index.html.
- pushing `.ts` files to the repo is a good practice.
