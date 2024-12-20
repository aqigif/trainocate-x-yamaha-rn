This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.



## Trainocate
# Day 1
```
- what is react native 
- running react native
    - expo go (qr)
    - emulator
    - cable to hp
    - wifi
- basic component : 
    - image
    - text
    - view
    - scrollview
    - textinput
    - stylesheet
- handling touches
    - button
    - touchableOpacity
    - touchableWithoutFeedback
    - touchableHighlight
    - pressable
- extra component
    - activityIndicator
    - modal
- react API
    - useState
    - useEffect
    - custom hooks
    - custom component
    - props
- js fundamental
    - string, number, boolean, array, object
    - ternary operator / conditional statement
- navigation: react-navigation 
```

# Day 2
```
- Debugging with j
- Typescript fixing
- Folder And Code Structure
- Redux
- Pokemon App
  - List
  - Add
  - Delete
```


# Day 3
```
- Redux Thunk
- React Native Installation
  - change Gradlew version from 8.10.2 to 8.11.1 android/gradle/wrapper/gradle-wrapper.properties
  - set newArchEnabled false in android/gradle.properties
  - gradlew clean
  ```
  cd android
  ./gradlew clean or .\gradlew clean
  ```
  - android studio
  - choco (sometimes work either only powershell or cmd)
- Build APK
```


# Day 4
```
- Interaction with hardware
  - Camera
- Permission Handler
- API
  - Fetch
  - Axios
- Storage
  - AsyncStorage
```


step Integration API with redux https://github.com/aqigif/trainocate-x-yamaha-rn/commit/a2ec1d33ca0ab107ff14da5fea41735c89201031
```

  1. action types
  2. add/update services
  3. add actions by using action types and services
  4. update reducer to handle new action types
  5. implement in View
     - dispatch => for actions
     - selector => for get reducer
```



- Obfuscate native android : https://developer.android.com/build/shrink-code
- Obfuscate RN Js : https://github.com/AustinZuniga/react-native-obfuscator