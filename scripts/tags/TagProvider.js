
let tags = []

export const useTags = () => tags.slice()

export const getTags = () => {
    return fetch("http://localhost:8087/tags") // Fetch from the API
        .then(response => response.json())  // Parse as JSON
        .then(parsedtags => {
            tags = parsedtags
        })
}

export const saveTag = (tagObject) => {
    return fetch('http://localhost:8087/tags', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tagObject)
    })
    .then(getTags) // After we add a note, get them all again so our new note appears in our collection

}

export const deleteEntry = entryId => {
    return fetch(`http://localhost:8087/tags/${entryId}`, {
        method: "DELETE"
    })
}