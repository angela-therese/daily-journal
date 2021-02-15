export const JournalForm = () => {

    document.querySelector("#entry_form").innerHTML += ` 
    <h3>New Entry</h3>
   <fieldset class="form-background form-fieldset">
       <label for="journalDate">Date of Entry</label>
       <input type="date" name="journalDate" id="journalDate"> <br>
       <label for="conceptsCovered">Concepts Covered</label>
       <input type="text" name="conceptsCovered"id="conceptsCovered"><br>
       <label for="journalEntry">Journal Entry</label>
       <input type="text" name="journalEntry" id="journalEntry"><br>
       <label for="mood">Mood</label>
       <select id="mood" name="mood">
           <option value="great">Great!</option>
           <option value="good">Good. </option>
           <option value="okay">Okay.</option>
           <option value="not good">Not good.</option>
           <option value="terrible">Terrible.</option>
        </select><br>
        <button type="submit" value="submit">Record Entry</button>

   </fieldset>

</form>
</section>
`

}