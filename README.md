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


<br/>

Development inc Cordova:
------------
Mac:

 - Have latest version of xCode
 - install andriod sdk's from:
 	- http://developer.android.com/sdk/installing/index.html?pkg=tools or `brew install android-sdk`,
 	- Make sure its saved in this location: `/usr/local/Cellar/android-sdk/` (homebrew will automatically save here).
 	- then set your path: add into your .bashrc/.bash_profile `export ANDROID_HOME=/usr/local/opt/android-sdk`
 	- look at http://developer.android.com/sdk/installing/adding-packages.html and also install the `Google Repository`, `google play services` and `android support repository` in extras.

Now:
------------
Run 

     webpack #build local assets

     cordova platform add ios
     cordova platform add android
     cordova platform add browser //optional


then you can run the application with cordova also to emulate android on mac you have to create 
andriod virtual device by running `/usr/local/Cellar/android-sdk/24.4.1_1/bin/android avd` 
follow https://cordova.apache.org/docs/en/4.0.0/guide/platforms/android/

     cordova run browser
     cordova emulate ios
     cordova emulate android
