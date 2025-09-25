import { Image } from 'expo-image';
import { Platform, View, Text, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.fullscreenContainer}>
      <Text style={styles.helloText}>Hola Mundo</Text>
    </View>
  );
}
  
const styles = StyleSheet.create({
  fullscreenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  helloText: { 
    fontSize: 24,
    color: 'white',
  },
});