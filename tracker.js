const list = [];

function addData() {
    const dateClass = document.querySelector('.dateClass');
    const date = dateClass.value;

    const watcherClasses = document.querySelectorAll('.watcherClass');
    const watchers = Array.from(watcherClasses).map(watcher => watcher.value);

    const data = { date, watchers };
    list.push(data);

    console.log(list); // Just for testing

    // Optionally, you might want to clear the input fields after saving data
    dateClass.value = '';
    watcherClasses.forEach(watcher => (watcher.value = ''));

    // You might want to call a function to display this data
    displayData();
}

function displayData() {
    // This function should display the data in some way, such as updating the UI
    // Loop through the 'list' array and update the UI to show the stored data
    for (let i = 0; i < list.length; i++) {
        // Access list[i] to update your UI
        // For instance, create new DOM elements to display the data
        // Example: Create <div> or <p> elements to show the stored 'date' and 'watchers'
    }
}
