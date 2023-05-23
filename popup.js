const setalarmbtn = document.getElementById("setAlarm");
const cancelbtn = document.getElementById("cancelAlarm");
//const userInp = document.getElementById("user-ip").value;
const setbtn = document.getElementById("set-btn");
//const inputs = document.getElementsByClassName("inputs");
function setAlarm(event) {
    const userInp = document.getElementById("user-ip").value;
    setbtn.value = userInp;
    let minutes = parseFloat(event.target.value);
    chrome.action.setBadgeText({ text: 'ON' });
    chrome.alarms.create({ delayInMinutes: minutes });
    chrome.storage.sync.set({ minutes: minutes });
    window.close();
}



function cancelAlarm() {
    chrome.action.setBadgeText({ text: '' });
    chrome.alarms.clearAll();
    window.close();
}

setalarmbtn.addEventListener("click", () => {

    document.getElementById("label").style.display = "block";
    setbtn.style.display = "block";
    document.getElementById("user-ip").style.display = "block";

})
setbtn.addEventListener("click", setAlarm);  //of 1mins
cancelbtn.addEventListener("click", cancelAlarm);


