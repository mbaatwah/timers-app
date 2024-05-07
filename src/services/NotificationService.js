import * as Notifications from 'expo-notifications';

export default class NotificationService {
    constructor() {
        this.notificationListener = null;
        this.responseListener = null;
    }

    async scheduleNotificationAsync({ title, body, data, trigger }) {
        await Notifications.scheduleNotificationAsync({
            content: {
                title,
                body,
                data,
            },
            trigger,
        });
    }

    async cancelScheduledNotificationAsync(notificationId) {
        await Notifications.cancelScheduledNotificationAsync(notificationId);
    }

    async cancelAllScheduledNotificationsAsync() {
        await Notifications.cancelAllScheduledNotificationsAsync();
    }

    async getPendingScheduledNotificationsAsync() {
        return await Notifications.getAllScheduledNotificationsAsync();
    }

    async registerNotificationHandler() {
        this.notificationListener = Notifications.addNotificationReceivedListener(
            (notification) => {
                console.log(notification);
            }
        );

        this.responseListener = Notifications.addNotificationResponseReceivedListener(
            (response) => {
                console.log(response);
            }
        );
    }

    async unregisterNotificationHandler() {
        Notifications.removeNotificationSubscription(this.notificationListener);
        Notifications.removeNoti..\ficationSubscription(this.responseListener);
    }
}