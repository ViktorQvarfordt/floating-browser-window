# Floating Browser Window

A simple Electron app that allows you to open a browser window that is frame-less and has a shortcut to toggle visibility.

## Setup

```
npm install
npm run build
```

## Usage

Basic usage:

```
open dist/mac-arm64/Floating\ Browser\ Window.app -n --args 'https://chatgpt.com/'
```

Customize the shortcut:

```
open dist/mac-arm64/Floating\ Browser\ Window.app -n -args 'https://chatgpt.com/' 'Alt+U'
```

(`-n` opens a new instance of the application even if one is already running.)