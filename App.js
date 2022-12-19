import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet} from 'react-native';
import Login from './src/screens/Login';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    
  },
});
