/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const entryCard = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <p>${entry.date}<p>
            <p>${entry.entry}<p>
        </section>
    `
}