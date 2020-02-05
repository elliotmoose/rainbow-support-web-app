import ReactDOM from 'react-dom';
import React from 'react';
import App from 'components/App';

let login = () => {
    var myRainbowLogin = "john.doe@sutdesc9.com";       // Replace by your login
    var myRainbowPassword = "Sutdesc9!"; // Replace by your password

    // The SDK for Web is ready to be used, so you can sign in
    rainbowSDK.connection.signin(myRainbowLogin, myRainbowPassword)
    .then(function(account) {
        console.log("logged in");
          // Successfully signed to Rainbow and the SDK is started completely. Rainbow data can be retrieved.
        //   console.log(rainbowSDK.contacts.getAll());
        //   console.log(Object.keys(rainbowSDK.contacts));
        //   rainbowSDK.contacts.getContactByLoginEmail("kyzelliot@gmail.com").then((contact)=> {
        //       console.log(contact);
        //   });
        rainbowSDK.contacts.searchById("5e397540e9f1273063694b12")
        .then((contact)=> {
            console.log("Calling...");
            rainbowSDK.webRTC.callInAudio(contact);
        })
        .catch((err)=>{console.log(err)});


    })
    .catch(function(err) {
        console.log(err);
          // An error occurs (e.g. bad credentials). Application could be informed that sign in has failed          
    });
}
document.addEventListener('DOMContentLoaded', () => {

    // do your setup here
    console.log("[DEMO] :: Starter-Kit of the Rainbow SDK for Web with React started!");
  
    var applicationID = "9d1acbc0475611ea819a43cb4a9dae9b", 
        applicationSecret = "b55bLCAQxqrca0zi9V1VQDG4m9QTEXnXyQbQG7nQehrEaH9M576hwqgHdPtcNLt2";

    /* Bootstrap the SDK */
    angular.bootstrap(document, ["sdk"]).get("rainbowSDK");

    /* Callback for handling the event 'RAINBOW_ONREADY' */
    var onReady = function onReady() {
        console.log("[DEMO] :: On SDK Ready !");
        // do something when the SDK is ready
        ReactDOM.render(<App />, document.querySelector('#app'));
        login();
    };

    /* Callback for handling the event 'RAINBOW_ONCONNECTIONSTATECHANGED' */
    var onLoaded = function onLoaded() {
        console.log("[DEMO] :: On SDK Loaded !");

        rainbowSDK.initialize(applicationID, applicationSecret).then(function() {
            
            console.log("[DEMO] :: Rainbow SDK is initialized!");            
            // let contact = rainbowSDK.contacts.getContactByJID("5e397540e9f1273063694b12");
            // rainbowSDK.contacts.searchByJid("5e397540e9f1273063694b12").then((contact)=>{
            //     console.log(contact);
            // });


            
            // rainbowSDK.conversations.openConversationForContact(contact);
            // rainbowSDK.send
        }).catch(function(err) {
            console.log("[DEMO] :: Something went wrong with the SDK...", err);
        });
    };

    /* Listen to the SDK event RAINBOW_ONREADY */
    $(document).on(rainbowSDK.RAINBOW_ONREADY, onReady);

    /* Listen to the SDK event RAINBOW_ONLOADED */
    $(document).on(rainbowSDK.RAINBOW_ONLOADED, onLoaded);

    /* Load the SDK */
    rainbowSDK.load();


  
});
