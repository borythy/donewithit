import client from "./client";

const regiter = (pushToken) =>
  client.post("/expoPushTokens", { token: pushToken });

export default {
  regiter,
};
