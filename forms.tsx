import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Switch, ActivityIndicator, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

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

export default function FormsScreen() {
  const [text, setText] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    // Usamos KeyboardAvoidingView para que el teclado no cubra inputs en iOS
    <KeyboardAvoidingView 
        style={styles.fullScreenAvoid}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
    >
      <ScrollView 
        style={styles.fullScreenScroll} 
        contentContainerStyle={styles.contentContainer}
      >
        {/* 1. Componente TextInput */}
        <ComponentCard 
          title="<TextInput />"
          description="Permite al usuario ingresar texto. Es el campo de entrada estándar."
        >
          <TextInput
            style={styles.input}
            onChangeText={setText}
            value={text}
            placeholder="Escribe algo aquí..."
          />
          <Text style={{ marginTop: 10 }}>Valor: {text}</Text>
        </ComponentCard>

        {/* 2. Componente Switch */}
        <ComponentCard 
          title="<Switch />"
          description="Un control booleano de encendido/apagado (toggle)."
        >
          <Switch
            onValueChange={toggleSwitch}
            value={isEnabled}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          />
          <Text style={{ marginTop: 10 }}>Estado: {isEnabled ? 'ON' : 'OFF'}</Text>
        </ComponentCard>
        
        {/* 3. Componente ActivityIndicator */}
        <ComponentCard 
          title="<ActivityIndicator />"
          description="Muestra un círculo de progreso mientras la aplicación carga datos."
        >
          <ActivityIndicator size="large" color="#0000ff" />
          <Text style={{ marginTop: 10 }}>Cargando...</Text>
        </ComponentCard>
        
        {/* Añadimos un segundo input para forzar el desplazamiento y probar el KeyboardAvoidingView */}
        <ComponentCard 
          title="Otro TextInput"
          description="Prueba la funcionalidad de scroll al aparecer el teclado."
        >
          <TextInput
            style={styles.input}
            placeholder="Escribe aquí para ver cómo sube la pantalla..."
          />
        </ComponentCard>
        
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  fullScreenAvoid: { // Estilo para el contenedor de evasión de teclado
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  fullScreenScroll: {
    flex: 1,
  },
  contentContainer: { 
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
  

  input: {
    height: 40,
    width: '80%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});