import { Image, StyleSheet, Platform, Text, View, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

// -----
import React from 'react';

// import './assets/fonts/fonts.css';

// import CreateRecipe from './Components/CreateRecipe.jsx';
// import ButtonAppBar from './Components/Navigation';
// import { applicationContext } from './hooks/applicationContext';
// import useApplicationData from './hooks/customHook';
// import HomePage from './Components/HomePage.jsx';
// import SignInSide from './Components/Login.jsx';
// import ViewRecipe from './Components/ViewRecipe.jsx';
// import ChatBubble from './Components/ChatBubble.jsx';
// import ChatModal from './Components/ChatModal.jsx';
// import PrivateRoute from './Components/PrivateRoute.jsx';

// -----

export default function HomeScreen() {
  return (
  // <applicationContext.Provider value={{state, dispatch}}>
    <View>
      <Text style={styles.white}>Testing</Text>
      <Button
        onPress={() => {
          console.log('You tapped the button!');
        }}
        title="Press Me"
      />
      {/* <ButtonAppBar />
      <ChatBubble /> */}
      {/* {state.chatModalOpen && <ChatModal />} */}
      <View>
        {/* <Route path='/' exact component={HomePage}/>
        <Route path='/login' component={SignInSide} />
        <PrivateRoute path="/create-recipe" component={CreateRecipe} auth={state.isLoggedIn} />
        <PrivateRoute path="/view-recipe" component={ViewRecipe} auth={state.isLoggedIn} /> */}
      </View>
    </View>
  // </applicationContext.Provider>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  white: {
    color: 'white'
  }
});
