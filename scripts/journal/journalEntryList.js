import { getEntries, useEntries, saveEntry } from "./journalDataProvider.js";
import { entryCard } from "./journalEntry.js";

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector("#entryLog")

export const EntryListComponent = () => {
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
        entryLog.innerHTML += `<h3>Previous Entries</h3>
                                ${entriesHTMLstring}`     
    })
        
    
    }

       
        



  /*
            Invoke the component that returns an
            HTML representation of a single entry
        */