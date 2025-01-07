import { LoginManager, AccessToken, LoginResult } from "react-native-fbsdk-next";
const permissions = ["public_profile"]
export const loginWithFacebook = async () => {
    LoginManager.logInWithPermissions(permissions).then(
        function(result:LoginResult) {
            if (!result){
                console.log("error");
            }


          if (result.isCancelled) {
            console.log("Login cancelled");
          } else if (result.grantedPermissions) {
            console.log(
              "Login success with permissions: " +
                result.grantedPermissions.toString()
            );
          }
        },
        function(error) {
          console.log("Login fail with error: " + error);
        }
      ); 
};


import { Settings } from 'react-native-fbsdk-next';

Settings.setAppID('APP ID');
Settings.initializeSDK();
