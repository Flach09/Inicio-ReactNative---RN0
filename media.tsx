import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

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

export default function MediaScreen() {
  const imageUrl = 'https://picsum.photos/id/237/200/100';

  return (
    <View style={styles.container}>
      {/* 1. Componente Image */}
      <ComponentCard 
        title="<Image />"
        description="Muestra imágenes. Requiere dimensiones de estilo y URIs para imágenes de red."
      >
        <Image
          style={styles.imageExample}
          source={{ uri: imageUrl }}
        />
      </ComponentCard>

      {/* 2. Componente Image (Local) */}
      <ComponentCard 
        title="<Image /> (Local)"
        description="Para imágenes incluidas en tu proyecto. Usa 'require('./ruta/imagen.png')'."
      >
        <Image
            style={styles.imageExample}
            source={require('../../../NativeComponentsCatalog/assets/images/engranaje.png')}
        />
      </ComponentCard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
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
  
  // Estilos específicos para demos
  imageExample: {
    width: 200,
    height: 100,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  placeholderImage: {
    width: 200,
    height: 100,
    borderRadius: 8,
    backgroundColor: '#FF5722',
    justifyContent: 'center',
    alignItems: 'center',
  }
});