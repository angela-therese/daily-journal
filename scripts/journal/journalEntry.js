/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const entryCard = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <p  style="text-align: left">${entry.date}</p>
            <p style="text-align: left"><b>Concepts covered</b></br>${entry.conceptsCovered}</p>
            <p  style="text-align: left"><b>Reflections</b></br>${entry.entryText}</p>
            <p style="text-align: left"><b>Tags</b>${entry.tags}</br></br>
            <button id="deleteEntry--${entry.id}">Delete.</button>
            </section>
    `
}