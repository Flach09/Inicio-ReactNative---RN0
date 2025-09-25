import { Tabs } from 'expo-router';
import React from 'react';

import { Foundation, MaterialIcons, Feather, AntDesign, Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#007ACC', 
        headerShown: true, 
        tabBarStyle: {
          backgroundColor: '#f8f8f8', 
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
      
      <Tabs.Screen
        name="interaction"
        options={{
          title: 'Interacción',
          
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