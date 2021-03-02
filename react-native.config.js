module.exports = {
    dependencies: {
        'react-native-firebase': {
            platforms: {
                // disable only on Android as we require some conditional setup
                android: null,
            },
        },
        'react-native-camera': {
            platforms: {
                // disable only on iOS as we require some conditional setup
                ios: null,
            },
        },
        'react-native-code-push': {
            platforms: {
                // disable only on Android as we require some conditional setup
                android: null,
            },
        },
        'react-native-splash-screen': {
            platforms: {
                android: null,
                ios: null,
            },
        },
        'react-native-video': {
            platforms: {
              android: {
                sourceDir: '../node_modules/react-native-video/android-exoplayer',
              },
            },
        },
    },
};
