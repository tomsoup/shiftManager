// Import libraries for making component
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

//onPress is passed down from albumDetail (the parent)
const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    //onPress is expected in the TouchableOpacity, unlike the button in AlbumDetail
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}> {children} </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
  }
};

//Can use es6 to condense the following statement
// export { Button: Button };
export { Button };
