import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import firebase from '../database/firebase';

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = { 
      uid: ''
    }
  }

  signOut = () => {
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('Login')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }  

  render() {
    // Récupération sécurisée du nom d'utilisateur (évite une erreur au chargement)
    const currentUser = firebase.auth().currentUser;
    const displayName = currentUser ? currentUser.displayName : '';

    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>
          Hello, {displayName}
        </Text>

        <Button
          color="#3740FE"
          title=" Logout"
          icon={
            <Icon
              name="log-out"
              size={15}
              color="white"
            />
          }
          onPress={() => this.signOut()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 35,
    backgroundColor: '#fff'
  },
  textStyle: {
    fontSize: 15,
    marginBottom: 20
  }
});