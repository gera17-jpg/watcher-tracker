const list = [];

function addData() {
    let dateInput = document.getElementsByClassName('dateClass')[0].value;
    let dayInput = document.getElementsByClassName('dayClass')[0].value;
    let nightInput = document.getElementsByClassName('nightClass')[0].value;

    let data={
        date: dateInput,
        dayWatcher: dayInput,
        nightWatcher: nightInput
    }
     // Add the new data to the list array
    list.push(data);
    console.log(data);

// Optionally, you might want to clear the input fields after saving data
    document.getElementsByClassName('dateClass')[0].value = '';
    document.getElementsByClassName('dayClass')[0].value = '';
    document.getElementsByClassName('nightClass')[0].value = '';

// You might want to call a function to display this data
    displayData();
}

function displayData() {
    // Assuming you want to display the latest data entered
    let latestData = list[list.length-1];

    // Access the DOM elements where you want to display the data
    let storedDateElement = document.getElementById('storedDate');
    let storedDayWatcherElement = document.getElementById('storedDayWatcher');
    let storedNightWatcherElement = document.getElementById('storedNightWatcher');

    // Update the UI with the latest data
    storedDateElement.innerHTML = latestData.date;
    storedDayWatcherElement.innerHTML =latestData.dayWatcher;
    storedNightWatcherElement.innerHTML =latestData.nightWatcher;
}

