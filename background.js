//all js files which run on background are under scripts objects list
// can add event listeners to chrome apis defined in permissions array

chrome.alarms.onAlarm.addListener(() => {
    chrome.action.setBadgeText({ text: '' });

    chrome.notifications.create({
        type: 'basic',

        iconUrl: "alarm.jpg",
        title: "Stay Hydrated",
        message: "Have a sip of water human!",
        buttons: [
            { title: 'Keep it Flowing.' }
        ],
        priority: 0
    });


});

chrome.notifications.onButtonClicked.addListener(async () => {
    const time = await chrome.storage.sync.get(['minutes']);
    chrome.action.setBadgeText({ text: 'ON' });
    chrome.alarms.create({ delayInMinutes: time.minutes })
});
