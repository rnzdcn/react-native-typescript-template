# Expo App Setup (TypeScript)

This guide outlines the steps to set up a new Expo app with TypeScript.

## Prerequisites
- Ensure you have [Node.js](https://nodejs.org/) installed.

## Steps

### 1. Initialize a TypeScript Expo App
Create a new Expo app with a TypeScript template:

```bash
pnpx create-expo-app@latest --template blank-typescript
````

### 2. Run the Expo App
Create a new Expo app with a TypeScript template:

```bash
pnpm run start --android
```

### 3. Set Up Android Device for Development
To run the app on a physical Android device:
* Enable Developer Options on your Android device.
* Enable USB Debugging within Developer Options.

### 4. Verify Device Connectivity
To make sure your Android device is connected properly:

```bash
adb devices
```

