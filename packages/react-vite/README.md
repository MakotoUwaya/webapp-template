# React + TypeScript + MUI

A Vite template for React, TypeScript and the latest major version of MUI.

## Highlights

- React w/ TypeScript
- Takes 8-10 seconds to build prod bundle at 198kb
- v5 ( latest ) version of Material UI, `@mui/material`
- Enables the `@emotion/babel-plugin` to work with MUI (see [features](https://github.com/emotion-js/emotion/tree/main/packages/babel-plugin#features))
- Dark mode toggle
- Aliased imports

## Getting Started

- Install dependencies using `npm run bootstrap`
- Start the server with `npm run dev`

## MUI

To learn more about the newest ways to use MUI, checkout [the docs](https://mui.com/getting-started/usage/).

### What's Included

- Custom theming
- Using that theme from within a `styled` component
- Dark mode toggle with React Context
- Aliased imports with `@/` mapping to the `src/`
- Rollup bundle analyzer
  - To use, run `npm run analyze`

## Database

- Using Firestore in Firebase
- Create new Firebase project for yours
  - Add web app
  - Enabled Firestore
- Set setting params into `.env` files
- Add Firestore data by yourself
  - Reference `Data structure`

### Firebase init

- Add `.firebaserc` file by yourself
  ```json
  {
    "projects": {
      "default": "your-project"
    }
  }
  ```

### Emulator

- Can use Firebase Emulator
- Start emulator with emulator mode apps

  ```sh
  # Start emulator(Other terminals)
  npm run emulators:start

  # serve apps with emulator mode
  npm run dev:emulator
  ```

### Data structure

- When using emulator, add data yourself

```json
{
  "app": [
    {
      "info": {
        "title": "Vite"
      }
    }
  ]
}
```

## Deploy

- Set GitLab secret
  - key: `FIREBASE_ENV_SETTINGS_BASE64`
  - value: {create command}
  ```sh
  # create command
  cat .env.local | base64 -w 0
  ```

## Create develop environment

- For Windows 10 User
  - https://snyt45.com/posts/20210806/wsl2-multiple-linux-distribution/
- Even if Mac user, easily create development environment using Dockerfile

### Require

- Windows 10
- Docker
- WSL2

### Usage

1. Create docker image
   Set current directory 'packages/react-vite/' repository
   ```sh
   docker build -t react-vite/dev:latest .
   ```
1. Run docker image
   ```sh
   docker run --name vite_demo -it -w /usr/src/app -p 3000:3000 react-vite/dev:latest /bin/bash
   ```
   Get ContainerID
   ```sh
   dockerContainerID=$(docker ps -a | grep -i react-vite/dev:latest | awk '{print $1}')
   ```
   Copy .env.local file for localhost debug
   ```sh
   docker cp ./.env.local $dockerContainerID:/usr/src/app
   ```
1. Export docker image
   Only if not exists 'temp' directory
   ```sh
   mkdir /mnt/c/temp
   ```
   ```sh
   docker export $dockerContainerID > /mnt/c/temp/react-vite.tar
   ```
1. Import WSL image
   Windows 10 powershell
   ```sh
   wsl --import react-vite $Env:LOCALAPPDATA\Packages\react-vite C:\temp\react-vite.tar
   ```
   ```sh
   wsl -l
   ```
1. Run WSL image
   ```sh
   wsl -d react-vite
   ```
1. TODO: Add user and initial setup

   ```sh
   adduser {your_user_name}
   mv /usr/src/app /home/{your_user_name}/app/
   cd /home/{your_user_name}
   chown -hR {your_user_name}:{your_user_name} app/
   ```

   ```
   vim .bashrc

   # Add Volta conf
   export VOLTA_HOME="$HOME/.volta"
   export PATH="$VOLTA_HOME/bin:$PATH"
   ```

   ```sh
   # Install Volta for user
   curl https://get.volta.sh | bash
   volta install node
   ```

   ```
   vim /etc/wsl.conf

   # Add conf
   [user]
   default={your_user_name}
   ```

   ```sh
   wsl -t react-vite
   ```

   Set terminal setting

   ```json
   {
     "guid": "{image_guid}",
     "hidden": false,
     "name": "react-vite",
     "source": "Windows.Terminal.Wsl",
     "startingDirectory": "//wsl$/react-vite/home/{your_user_name}"
   }
   ```

### Disable WSL image

```sh
wsl --unregister react-vite
```
