React Starter Kit
=================

To get started:
---------------

Ensure you have Node v4 or above installed. Using NVM is the best method.  
Run the following command to install your dependencies:

    npm install

Development:
------------

To develop with hot module replacement enabled, run the following command and navigate to [http://localhost:8000](http://localhost:8000) in your browser.

    npm start

To output static assets into /www and watch for changes, run the following command:

    webpack --watch


-
WORK IN PROGRESS
-

Android sdk stuff - MAC
install andriod sdk's from

http://developer.android.com/sdk/installing/index.html?pkg=tools

then http://developer.android.com/sdk/installing/adding-packages.html

and save in this location:

`/usr/local/Cellar/android-sdk/`

-

or with homebrew `brew install android-sdk`

then set your path: add into your .bashrc/.bash_profile

`export ANDROID_HOME=/usr/local/opt/android-sdk`


and install the 'Google Repository', 'google play services' 'android support repository' in extras


To get started:
---------------

git clone ...

Ensure you have Node v4 or above installed.

    $ npm install
    $ npm start

Navigate to http://localhost:8000 in your browser.  
Hot reloading is enabled.

or

webpack --watch // need to create a build process for this

cordova platform add ios
cordova platform add android
cordova platform add browser //optional


then you can run the application with cordova also

     cordova run browser
     cordova emulate ios
     cordova emulate android
