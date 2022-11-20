import React from 'react';
import { View, TextInput } from 'react-native';

const UselessTextInput = (props) => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={1000}
    />
  );
}

const MultipleLineTextInput = () => {
    const [value, onChangeText] = React.useState('活动详情， 活动注意事项 and etc');
  
    // If you type something in the text box that is a color, the background will change to that
    // color.
    return (
      <View
        style={{
          backgroundColor: value,
          borderBottomColor: '#000000',
          borderBottomWidth: 1,
        }}>
        <UselessTextInput
          multiline
          numberOfLines={4}
          onChangeText={text => onChangeText(text)}
          placeholder='活动详情， 活动注意事项 and etc'
          value={value}
          style={{padding: 10}}
        />
      </View>
    );
  }
  
  export default MultipleLineTextInput;