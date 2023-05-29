import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LoginButton, AccessToken} from 'react-native-fbsdk';
const App = () => {
  return (
    <View>
    <LoginButton
    publishPermissions={["publish_actions,email"]}
    onLoginFinished={
      (error, result) => {
        if (error) {
          alert("login has error: " + result.error);
        } else if (result.isCancelled) {
          alert("login is cancelled.");
          console.log("first")
        } else {
          
          AccessToken.getCurrentAccessToken(result).then(
            (data) => {
            
              console.log(data)
            }
          )
        }
      }
    }
    onLogoutFinished={() => alert("logout.")}/>  
    </View>
  )
}

export default App

const styles = StyleSheet.create({})