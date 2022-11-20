import { StyleSheet, Text, View, Button } from "react-native";
import { Router, Route, Link } from "./react-router";
import CreateActivity from "./pages/createActivity";
import { NavigationContainer } from '@react-navigation/native';
import Home from "./pages/home";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

const Stack = createNativeStackNavigator();

const About = () => <Text>About</Text>;

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Welcome' }}
      />
      <Stack.Screen name="creatActivity" component={CreateActivity} options={{
        title: '组织活动',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: 'red'
        }
      }} />
    </Stack.Navigator>
  </NavigationContainer>
  // <Router>
  //   <View style={styles.container}>
  //     <View style={styles.nav}>
  //       <Link to="/">
  //         <Text>Home</Text>
  //       </Link>
  //       <Link to="/about">
  //         <Text>About</Text>
  //       </Link>
  //     </View>

  //     <Route exact path="/" component={CreateActivity} />
  //     <Route path="/about" component={About} />
  //   </View>
  // </Router>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default App;
