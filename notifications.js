// request permission (returns a Promise)
window.requestNotificationPermission = function() {
  return new Promise((resolve) => {
    const isNotificationInWindow = 'Notification' in window;
    if (!isNotificationInWindow) {
      resolve('unsupported');
      return;
    }
    Notification.requestPermission().then(permission => {
      resolve(permission);
    }).catch(() => resolve('denied'));
  });
};

// show a notification
window.showNotification = function(title, body, iconUrl) {
  const isNotificationInWindow = 'Notification' in window;
  if (!isNotificationInWindow) return;
  if (Notification.permission !== 'granted') return;
  new Notification(title, { body: body, icon: iconUrl, silent: true });
};

// check if permission is already granted
window.isNotificationGranted = function() {
  const isNotificationInWindow = 'Notification' in window;
  if (!isNotificationInWindow) return false;
  return Notification.permission === 'granted';
};
