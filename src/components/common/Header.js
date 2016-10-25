// Import libraries for making component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
//Props is when passing data from parent to child
//functional component does not have state
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
        <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    elevation: 20,
    position: 'relative'
  },
  textStyle: {
      fontSize: 20
  }
};

// Make the component available to other parts of the app

export { Header };
