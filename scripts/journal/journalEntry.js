/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const entryCard = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <p>${entry.date}<p>
            <p><b>Concepts covered</b></br>${entry.conceptsCovered}<p>
            <p><b>Reflections</b></br>${entry.entryText}<p>
        </section>
    `
}