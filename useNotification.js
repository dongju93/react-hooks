const useNotification = (tittle, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotification = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          new Notification(tittle, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(tittle, options);
    }
  };
  return fireNotification;
};

const App = () => {
  const triggerNotifi = useNotification("this will work", {
    body: "I love it"
  });
  return (
    <div className="App">
      <button onClick={triggerNotifi}>Hi there</button>
    </div>
  );
};