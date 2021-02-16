import { EntryListComponent } from "./journalEntryList.js"
import { saveEntry } from "./journalDataProvider.js";

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
        const newEntry = {
                        "date": dateInput,
                        "conceptsCovered": conceptsInput,
                        "entryText": entryInput,
                        "mood": moodInput
                        }

                    saveEntry(newEntry)
                    .then(EntryListComponent())
                    
                    
    }
   
})

