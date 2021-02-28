import { entryList } from "./journalEntryList.js"
import { saveEntry } from "./journalDataProvider.js";
import { getTags, useTags } from "../tags/TagProvider.js"
import { NewTags } from '../tags/TagList.js'

export const JournalForm = () => {

    document.querySelector("#entry_form").innerHTML += ` 
    <h3 class="main-headings">New Entry</h3>
   <fieldset class="form-background form-fieldset">
       <label for="journalDate">Date of Entry</label>
       <input type="date" name="journalDate" id="journalDate"> <br>
       <label for="conceptsCovered">Concepts Covered</label>
       <input type="text" name="conceptsCovered"id="conceptsCovered"><br>
       <label for="journalEntry">Journal Entry</label>
       <textarea type="text" name="journalEntry" id="journalEntry"></textarea><br>
       <label for="mood">Mood</label>
       <select id="mood-select" name="mood">
           <option value="great">Great!</option>
           <option value="good">Good. </option>
           <option value="okay">Okay.</option>
           <option value="not good">Not good.</option>
           <option value="terrible">Terrible.</option>
        </select><br>
        <label for="tags">Tags</label>
        <input type="text" placeholder="Separate multiple tags with commas" name="tags"id="entry-tags"><br>
        <button id="recordEntry" type="submit" value="submit">Record Entry</button>
        
   </fieldset>

</form>
</section>
`

}


const eventHub = document.querySelector("#main-container")


eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "recordEntry") {
            
        console.log('you clicked', clickEvent.target.id)

     let dateInput = document.getElementById("journalDate").value;
     let conceptsInput = document.getElementById("conceptsCovered").value;
    let entryInput = document.getElementById("journalEntry").value
     let moodInput = document.getElementById("mood-select").value
     let tagsInput = document.getElementById("entry-tags").value.split(', ')

   
     
        const newEntry = {
                        "date": dateInput,
                        "conceptsCovered": conceptsInput,
                        "entryText": entryInput,
                        "mood": moodInput, 
                        "tags": tagsInput
                        }
                          NewTags(tagsInput)
                        console.log(tagsInput)
                         saveEntry(newEntry)
                        
                         
                       
                         
                    
    }
   

    
    })
    
  

  
    
      


    //   export const entryList = () => {
    //     // Use the journal entry data from the data provider component
    //     getEntries()
    //     .then(() => {
    //          const entries = useEntries()
    //          console.log(entries)
             
    //          let entriesHTMLstring =''
        
    //         for(const entry of entries) {
    //         entriesHTMLstring += entryCard(entry)
    //         console.log(entriesHTMLstring)
    //         }  
    //         entryLog.innerHTML += `<h3 class="main-headings">Previous Entries</h3>
    //                                 ${entriesHTMLstring}`     
    //     })
            
        
    //     }
    


