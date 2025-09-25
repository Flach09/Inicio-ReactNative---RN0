import { Tabs } from 'expo-router';
import React from 'react';

import { Foundation, MaterialIcons, Feather, AntDesign, Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#007ACC', // Color azul para la pestaña activa
        headerShown: true, // Mostrar encabezado
        tabBarStyle: {
          backgroundColor: '#f8f8f8', // Color de fondo de la barra de pestañas
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Básico',
          tabBarIcon: ({ color }) => <Foundation name="home" color={color} size={24} />,
        }}
      />
      
      {/* PESTAÑA CORREGIDA */}
      <Tabs.Screen
        name="interaction"
        options={{
          title: 'Interacción',
          // Usando Ionicons.hand-right-outline
          tabBarIcon: ({ color }) => <Ionicons name="hand-right-outline" color={color} size={24} />,
        }}
      />
      
      <Tabs.Screen
        name="lists"
        options={{
          title: 'Listas',
          tabBarIcon: ({ color }) => <MaterialIcons name="list" color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="forms"
        options={{
          title: 'Formularios',
          tabBarIcon: ({ color }) => <Feather name="edit" color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="media"
        options={{
          title: 'Medios',
          tabBarIcon: ({ color }) => <Ionicons name="image-outline" color={color} size={24} />,
        }}
      />
    </Tabs>
  );
}