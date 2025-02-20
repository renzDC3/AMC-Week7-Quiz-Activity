import React, { useState } from 'react';
import { View, Switch, StyleSheet, Text, Image } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <SafeAreaProvider>
      
      <SafeAreaView style={[styles.container, { backgroundColor: isEnabled ? 'yellow' : 'text' }]}>


        {isEnabled && (
         
          <Image
            style={styles.logo}
            source={{ uri: 'https://static.vecteezy.com/system/resources/previews/018/874/651/non_2x/light-bulb-icon-transparent-background-png.png' }}
          />
          
        )}
         {isEnabled && (
        <Text>On</Text>
          
        )}
         {isEnabled && (
        <View style={{backgroundColor: 'black'}}></View>

        )}




        {!isEnabled && (
          <Image
            style={styles.logo}
            source={{ uri: 'https://static.vecteezy.com/system/resources/previews/019/923/733/non_2x/light-bulb-outline-transparent-black-and-white-icon-free-png.png' }}
          />
          
        )}
        {!isEnabled && (
        <Text>Off</Text>
          
        )}
        
        
      




        <Switch
          trackColor={{ false: '#gray', true: '#gray' }}
          thumbColor={isEnabled ? 'white' : 'white'}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text style={styles.title}>AMC</Text>
        <Text style={styles.title}>Light Bulb</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  logo: {
    width: 126,
    height: 138,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
