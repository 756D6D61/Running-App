import React, { Component } from 'react';
import { Container, Content, Button } from 'native-base';
import { StyleSheet, View, Text } from 'react-native';
import * as Font from 'expo-font'

export default class Previousscreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
          fontLoaded: false
        }
    }
      async componentDidMount() {
        await Font.loadAsync({
            test1: require('../assets/fonts/SourceCodePro-Medium.ttf'),
            test2: require('../assets/fonts/SourceCodePro-Light.ttf'),
        })
        this.setState({fontLoaded: true})
     }
     
  render() {
    if (!this.state.fontLoaded) {
        return <Text>False</Text>
      }
    return (
        <View style={styles.container}>
            <Content style={styles.orangeBox}></Content>
            <Content style={styles.sandBox}></Content>
            <Content style={styles.content}>
            <Text style={styles.title}>Routes</Text>
            <Button style={styles.button}>
                <Text>Run One</Text>
            </Button>
            <Button style={styles.button}>
                <Text>Run Two</Text>
            </Button>
            <Button style={styles.button}>
                <Text>Run Three</Text>
            </Button>
            <Button style={styles.button}>
                <Text>Run Four</Text>
            </Button>
            <Button style={styles.button}>
                <Text>Run Five</Text>
            </Button>
            <Button style={styles.button}>
                <Text>Run Six</Text>
            </Button>
            <Button style={styles.button}>
                <Text>Run Seven</Text>
            </Button>
            </Content>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FF4656',
        justifyContent: 'center',
        flex: 1,
    }, 
    content: {
        position: 'absolute',
        borderWidth: 1,
        borderColor: '#fff',
        top: -425,
        left:30,
        right: 30,
        borderRadius:  8,
        backgroundColor: 'transparent',
        height: 675,
        zIndex:-1
    },
    button: {
      top:50,
      left: 35,
      fontSize: 20, 
      textAlign: 'center', 
      color:'white', 
      fontWeight: 'bold',
      fontFamily: 'test1',
      backgroundColor: 'white',
      width: '85%',
      marginBottom: 20
  },
    orangeBox: {
        position: 'absolute',
        top: 270,
        left: 100,
        height: 625, 
        width: 600,
        backgroundColor: '#F1BA85',
        zIndex:0
    },
    sandBox: {
        position: 'absolute',
        top: -130,
        left: -70,
        height: 120, 
        width: 400,
        backgroundColor: '#F0DE84',
        zIndex:1
    },
    home: {
        fontSize: 20, 
        textAlign: 'center', 
        color:'white', 
        fontWeight: 'bold',
        fontFamily: 'test1'
        },
    title: {
        fontSize:70, 
        textAlign: 'left', 
        color:'white', 
        fontWeight: 'bold',
        fontFamily: 'test1',
        paddingTop: 70,
        zIndex: 1,
        left:5,
        top: 10
    }, 
    navText: {
        fontSize:30, 
        textAlign: 'left', 
        color:'white', 
        fontWeight: 'bold',
        fontFamily: 'test2',
        paddingTop: 40,
        paddingLeft: '50%',
        zIndex: 1,
    }
})
