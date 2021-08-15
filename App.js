import React from 'react';
import * as Notifications from  'expo-notifications';
import Constants from 'expo-constants';
import { Provider } from 'react-redux';

import Navigation from './navigation';
import store from './store';

Notifications.setNotificationHandler({
	handleNotification: async () => ({
		shouldShowAlert: true,
		shouldPlaySound: false,
		shouldSetBadge: false,
	}),
});

export default function App() {
    const [expoPushToken, setExpoPushToken] = React.useState('');
    const [notification, setNotification] = React.useState(false);
    const notificationListener = React.useRef();
    const responseListener = React.useRef();

    React.useEffect(() => {
        registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
    
        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
          	setNotification(notification);
        });
    
        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
            console.log(Date(response.notification.date));
        });
    
        return () => {
          	Notifications.removeNotificationSubscription(notificationListener);
          	Notifications.removeNotificationSubscription(responseListener);
        };
    }, [])

    registerForPushNotificationsAsync = async() => {
        let token;
        if (Constants.isDevice) {
			const { status: existingStatus } = await Notifications.getPermissionsAsync();
			let finalStatus = existingStatus;
			if (existingStatus !== 'granted') {
				const { status } = await Notifications.requestPermissionsAsync();
				finalStatus = status;
        	}
			if (finalStatus !== 'granted') {
				alert('Failed to get push token for push notification!');
				return;
			}
        	token = (await Notifications.getExpoPushTokenAsync()).data;
        	console.log(token);
        } else {
          alert('Must use physical device for Push Notifications');
        }
      
        if (Platform.OS === 'android') {
			Notifications.setNotificationChannelAsync('default', {
				name: 'default',
				importance: Notifications.AndroidImportance.MAX,
				vibrationPattern: [0, 250, 250, 250],
				lightColor: '#FF231F7C',
			});
        }
        return token;
    }

    return (
        <Provider store={store}>
            <Navigation />
        </Provider>
    );
}