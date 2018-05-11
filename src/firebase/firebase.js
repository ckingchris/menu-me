import * as firebase from 'firebase';

// production
const prodConfig = {
    apiKey: 'AIzaSyDTLTjGCjYtsSqcA5NIh6qNUq-kR94gqoE',
    authDomain: 'menu-me-production.firebaseapp.com',
    databaseURL: 'https://menu-me-production.firebaseio.com',
    projectId: 'menu-me-production',
    storageBucket: 'menu-me-production.appspot.com',
    messagingSenderId: '174669551407'
};

// development
const devConfig = {
    apiKey: 'AIzaSyDkXKQTy8z6eTUavQ0RZCp2Tl93VQ9GQi4',
    authDomain: 'menu-me-app.firebaseapp.com',
    databaseURL: 'https://menu-me-app.firebaseio.com',
    projectId: 'menu-me-app',
    storageBucket: 'menu-me-app.appspot.com',
    messagingSenderId: '703580424027'
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
    auth,
};