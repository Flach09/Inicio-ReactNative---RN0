// /app/(tabs)/lists.tsx
import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';

interface ComponentCardProps {
  title: string;
  description: string;
  children: React.ReactNode; 
}

const ComponentCard: React.FC<ComponentCardProps> = ({ title, children, description }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{title}</Text>
    <View style={styles.componentDemo}>{children}</View>
    <Text style={styles.cardDescription}>{description}</Text>
  </View>
);

// Datos de ejemplo para FlatList
const DATA = [
  { id: '1', title: 'Elemento 1' },
  { id: '2', title: 'Elemento 2' },
  { id: '3', title: 'Elemento 3' },
  { id: '4', title: 'Elemento 4' },
];

export default function ListsScreen() {
  return (
    <ScrollView style={styles.fullScreenScroll}>
      <View style={styles.container}>
        {/* 1. Componente FlatList */}
        <ComponentCard 
          title="<FlatList />"
          description="Renderizado eficiente de listas muy largas. Solo renderiza lo visible (virtualización)."
        >
          <FlatList
            data={DATA}
            renderItem={({ item }) => <Text style={styles.listItem}>{item.title}</Text>}
            keyExtractor={item => item.id}
            style={styles.flatListExample}
          />
        </ComponentCard>

        {/* 2. Componente ScrollView */}
        <ComponentCard 
          title="<ScrollView />"
          description="Contenedor para desplazar contenido estático o un número pequeño de elementos."
        >
          <ScrollView horizontal style={styles.scrollViewExample}>
            <View style={styles.scrollItem}><Text>Item 1</Text></View>
            <View style={styles.scrollItem}><Text>Item 2</Text></View>
            <View style={styles.scrollItem}><Text>Item 3</Text></View>
          </ScrollView>
        </ComponentCard>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fullScreenScroll: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  container: {
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  componentDemo: {
    paddingVertical: 15,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
  },
  
  flatListExample: {
    height: 120, 
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  listItem: {
    padding: 10,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    color: '#333',
    textAlign: 'center',
  },
  scrollViewExample: {
    height: 80,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  scrollItem: {
    width: 100,
    height: 60,
    backgroundColor: '#B3E5FC',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  }
});