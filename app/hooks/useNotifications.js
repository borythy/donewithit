import { useEffect } from "react";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";

import expoPushTokenApi from "../api/expoPushTokens";

export default useNotifications = (notficationListener) => {
  useEffect(() => {
    registerForPushNotifications();
    if (notficationListener) Notifications.addListener(notficationListener);
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!permission.granted) return;

      const token = await Notifications.getExpoPushTokenAsync();
      expoPushTokenApi.regiter(token);
    } catch (error) {
      console.log("Error getting a push token", error);
    }
  };
};
