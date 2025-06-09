export function createWord(word: Word): HTMLWordElement
{
    const li: HTMLLIElement = document.createElement("li");
    li.className = "h-15 select-none";
    
    const div: HTMLDivElement = document.createElement("div");
    div.className = "word";
    
    const label: HTMLLabelElement = document.createElement("label");
    label.innerText = word.termin;
    
    const actionsDiv: HTMLDivElement = document.createElement("div");
    actionsDiv.className = "actions-div";
    
    const editButton: HTMLButtonElement = document.createElement("button");
    editButton.className = "edit-button icon";
    editButton.innerText = "edit";
    
    const deleteButton: HTMLButtonElement = document.createElement("button");
    deleteButton.className = "delete-button icon";
    deleteButton.innerText = "delete";
    
    actionsDiv.appendChild(editButton);
    actionsDiv.appendChild(deleteButton);
    div.appendChild(label);
    div.appendChild(actionsDiv);
    li.appendChild(div);
    
    return {
        li: li,
        editButton: editButton,
        deleteButton: deleteButton
    }
}