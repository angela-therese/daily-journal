import { getEntries, useEntries, saveEntry, deleteEntry } from "./journalDataProvider.js";
import { entryCard } from "./journalEntry.js";


// DOM reference to where all entries will be rendered
const entryLog = document.querySelector("#entryLog")

export const entryList = () => {
    // Use the journal entry data from the data provider component
    getEntries()
    .then(() => {
         const entries = useEntries()
         console.log(entries)
         
         let entriesHTMLstring =''
    
        for(const entry of entries) {
        entriesHTMLstring += entryCard(entry)
        console.log(entriesHTMLstring)
        }  
        entryLog.innerHTML += `<h3 class="main-headings">Previous Entries</h3>
                                ${entriesHTMLstring}`     
    })
        
    
    }

const eventHub = document.querySelector("main")

 eventHub.addEventListener("click", (eventObject) => {
    
  if (eventObject.target.id.startsWith("deleteEntry")) {
  
  
    const entryToDelete = eventObject.target.id.split("-")[2]
    console.log(entryToDelete)
   
    deleteEntry(entryToDelete)

    // Call the deleteNote function and pass in the appropriate id
    // Then call NoteList to refresh the list of notes
  }
});
        



  /*
            Invoke the component that returns an
            HTML representation of a single entry
        */