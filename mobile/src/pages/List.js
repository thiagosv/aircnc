import React, { useState, useEffect } from 'react';
import socketio from 'socket.io-client';
import { View, ScrollView, Image, StyleSheet, AsyncStorage, Alert } from 'react-native';

import logo from '../assets/logo.png'

import SpotList from '../components/spotList';

export default function List() {
    const [techs, setTechs] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('user').then(user_id => {
            const socket = socketio('http://192.168.15.13:3333', {
                query: { user_id },
            });

            socket.on('booking_response', booking => {
                Alert.alert(`Sua reserva em ${booking.spot.company} para ${booking.date} foi ${booking.approved ? 'APROVADA' : 'REJEITADA'}`)
            });
        });
    }, []);

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storagedTechs => {
            const techsArray = storagedTechs.split(',').map(tech => tech.trim());
            setTechs(techsArray);
        });
    }, []);

    return (
        <View>
            <Image source={logo} style={styles.logo} />

            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                {techs.map(tech => <SpotList key={tech} tech={tech} />)}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    logo: {
        height: 32,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 30,
    }
});