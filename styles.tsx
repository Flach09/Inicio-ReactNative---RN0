// /app/(tabs)/styles.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function StylesScreen() {
  return (
    <View style={styles.container}>
      
      {/* Estilo 1: Retro y Con Sombra */}
      <View style={styles.styleBlock}>
        <MaterialCommunityIcons name="star-four-points" size={40} color="#FFD700" />
        <Text style={styles.styledTextOne}>Hola Mundo</Text>
        <View style={styles.underline} />
      </View>

      {/* Estilo 2: Minimalista y Cursiva */}
      <View style={styles.styleBlockTwo}>
        <Text style={styles.styledTextTwo}>Hola Mundo</Text>
      </View>

      {/* Estilo 3: Moderno y En Caja */}
      <View style={styles.styleBlockThree}>
        <Text style={styles.styledTextThree}>HOLA MUNDO</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  // --- Contenedor Principal ---
  container: {
    flex: 1,
    backgroundColor: '#E1F5FE', // Fondo azul claro general
    padding: 25,
    gap: 30, // Espacio entre los bloques
    alignItems: 'center', // Centrar los bloques horizontalmente
  },

  // --- BLOQUE 1: Retro y Con Sombra ---
  styleBlock: {
    backgroundColor: '#B3E5FC', // Azul más oscuro para la sección
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  styledTextOne: {
    fontSize: 48,
    fontWeight: '900', // Súper negrita
    color: '#D81B60', // Rosa brillante
    marginTop: 10,
    // Sombra para un efecto 3D
    textShadowColor: 'rgba(0, 0, 0, 0.3)', 
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 4,
  },
  underline: {
    width: 200,
    height: 5,
    backgroundColor: '#00796B',
    marginTop: 10,
    borderRadius: 5,
  },
  
  // --- BLOQUE 2: Minimalista y Cursiva ---
  styleBlockTwo: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    width: '100%',
    alignItems: 'center',
  },
  styledTextTwo: {
    fontSize: 32,
    fontWeight: '300', // Fuente delgada (light)
    fontStyle: 'italic', // Cursiva
    color: '#333333',
  },


  // --- BLOQUE 3: Moderno y En Caja ---
  styleBlockThree: {
    backgroundColor: '#333333', // Fondo gris oscuro/casi negro
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 4,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#333',
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10,
  },
  styledTextThree: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#FFD700', // Dorado
    letterSpacing: 6, // Separación de letras para un look moderno
    textTransform: 'uppercase',
  }
});