import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Pressable, Alert } from 'react-native';

// Define una interfaz para las propiedades del componente
interface ComponentCardProps {
  title: string;
  description: string;
  // 'children' es el contenido React que va dentro del componente (el botón, etc.)
  children: React.ReactNode; 
}

const ComponentCard: React.FC<ComponentCardProps> = ({ title, children, description }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{title}</Text>
    <View style={styles.componentDemo}>{children}</View>
    <Text style={styles.cardDescription}>{description}</Text>
  </View>
);

export default function InteractionScreen() {
  const [pressCount, setPressCount] = useState(0);

  return (
    <View style={styles.container}>
      {/* 1. Componente Button */}
      <ComponentCard 
        title="<Button />"
        description="Botón estándar de la plataforma. Simple y limitado en estilo."
      >
        <Button 
          title="Toca Aquí (Button)" 
          onPress={() => Alert.alert('Button Tocado!')}
          color="#841584"
        />
      </ComponentCard>

      {/* 2. Componente Pressable */}
      <ComponentCard 
        title="<Pressable />"
        description="Contenedor para detectar interacciones (touch, hover) con estilos avanzados."
      >
        <Pressable
          onPress={() => setPressCount(c => c + 1)}
          style={({ pressed }) => [
            styles.pressableBase,
            { backgroundColor: pressed ? '#007ACC' : '#00A0E3' }
          ]}
        >
          <Text style={styles.pressableText}>
            Presionado {pressCount} veces
          </Text>
        </Pressable>
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
  pressableBase: {
    padding: 10,
    borderRadius: 5,
    minWidth: 200,
    alignItems: 'center',
  },
  pressableText: {
    color: 'white',
    fontWeight: 'bold',
  }
});