import {getTags, saveTag, useTags } from './TagProvider.js'
          
export const NewTags = (tagsArray) => {
    getTags().then(() =>{
        let tags = useTags()
        console.log(tags)
        let currentTags = tags.map(tag => {
            return tag.subject
        })
        console.log(currentTags)
        let tagsToAdd = tagsArray.filter(t => !currentTags.includes(t))
        console.log(tagsToAdd)
        for(const singleTag of tagsToAdd){
            console.log(singleTag)
            let tagEntry = {
                "subject": singleTag
            }
                saveTag(tagEntry)

        }
        
       
       
        //LAST STEP: Save each item in the newTags array to the tags in the JSON
       
    } )
  

}



// function saveTags(newEntry, allTags){
//     let allTags = tag  
//     let newTags = (newEntry.tags).filter(t =>!allTags.includes(t))
//         // newArray = array1.filter(a => !array2.includes(a))
        
//         return newArray
//       }
// }
