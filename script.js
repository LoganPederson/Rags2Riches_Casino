document.addEventListener("DOMContentLoaded", function() {
    fetchData();

    // Optionally refresh data every 5 minutes
    setInterval(fetchData, 300000);
});

function fetchData() {
    fetch('https://your-azure-function-url/api/getData?code=your_function_key')
    .then(response => response.json())
    .then(data => {
        updatePotAmount(data.potAmount);
        updateActivityLog(data.activityLog);
    })
    .catch(error => console.error('Error fetching data:', error));
}

function updatePotAmount(amount) {
    document.getElementById('potAmount').textContent = amount;
}

function updateActivityLog(logEntries) {
    const logList = document.getElementById('logList');
    logList.innerHTML = ''; // Clear current entries
    logEntries.forEach(entry => {
        const item = document.createElement('li');
        item.textContent = `${entry.playerName} entered ${entry.xanaxAmount} Xanax - Total in pot: ${entry.totalPot}`;
        logList.appendChild(item);
    });
}