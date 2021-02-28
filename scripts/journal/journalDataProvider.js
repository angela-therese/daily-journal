
let entries = []

export const useEntries = () => entries.slice()

export const getEntries = () => {
    return fetch("http://localhost:8087/entries") // Fetch from the API
        .then(response => response.json())  // Parse as JSON
        .then(parsedEntries => {
            entries = parsedEntries
        })
}

export const saveEntry = entry => {
    return fetch('http://localhost:8087/entries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
    .then(getEntries) // After we add a note, get them all again so our new note appears in our collection

}

export const deleteEntry = entryId => {
    return fetch(`http://localhost:8087/entries/${entryId}`, {
        method: "DELETE"
    })
}



