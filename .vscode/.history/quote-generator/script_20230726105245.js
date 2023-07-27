let apiQuotes = [];

// Get Quotes From API
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes: await response.json();
        console.log(apiQuotes);
    } catch (err) {
        //  Catch Error Here
    }
}

// On load
getQuotes();