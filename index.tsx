// /app/(tabs)/index.tsx
import React from 'react';
import { View, Text, StyleSheet, Platform, StatusBar, ScrollView } from 'react-native';

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

export default function BasicScreen() {
  return (
    // CAMBIO CLAVE: Usamos ScrollView para permitir el desplazamiento
    <ScrollView 
        style={styles.fullScreenScroll} 
        contentContainerStyle={styles.contentContainer}
    >
      {/* 1. Componente View */}
      <ComponentCard 
        title="<View />"
        description="Contenedor principal para maquetación, usa Flexbox. Es el `div` de React Native."
      >
        <View style={styles.viewExample}>
          <Text style={{color: 'white'}}>Contenedor</Text>
        </View>
      </ComponentCard>

      {/* 2. Componente Text */}
      <ComponentCard 
        title="<Text />"
        description="El único componente para mostrar texto. Anidar texto solo funciona dentro de otro <Text />."
      >
        <Text style={styles.textExample}>
          Texto con <Text style={styles.nestedText}>estilo anidado</Text>.
        </Text>
      </ComponentCard>
      
      {/* 3. Componente Platform */}
      <ComponentCard 
        title="Platform (API)"
        description="Detecta el sistema operativo actual (iOS, Android, web) para ejecutar código condicional."
      >
        <Text style={styles.platformText}>
          Corriendo en: **{Platform.OS.toUpperCase()}**
        </Text>
      </ComponentCard>
      
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fullScreenScroll: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  contentContainer: { // Aplicamos padding al contenido del ScrollView
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
  
  // Estilos específicos para demos
  viewExample: {
    width: 150,
    height: 50,
    backgroundColor: '#3F51B5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  textExample: {
    fontSize: 16,
    color: '#333',
  },
  nestedText: {
    fontWeight: 'bold',
    color: '#D81B60',
  },
  platformText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#4CAF50',
  }
});