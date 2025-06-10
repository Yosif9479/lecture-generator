export function createWord(word: Word): HTMLWordElement {
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

export function createTranslation(): HTMLTranslationElement {
    const li: HTMLLIElement = document.createElement("li");
    li.className = 'h-10 flex gap-2';

    const select: HTMLSelectElement = document.createElement("select");
    select.className = 'h-full w-14 bg-white shadow-md rounded-full flex items-center justify-center text-center';
    select.style.appearance = 'none';

    const ruOption: HTMLOptionElement = document.createElement("option");
    ruOption.value = 'ru';
    ruOption.selected = true;
    ruOption.textContent = 'RU';

    const tjOption: HTMLOptionElement = document.createElement("option");
    tjOption.value = 'tj';
    tjOption.textContent = 'TJ';

    select.appendChild(ruOption);
    select.appendChild(tjOption);

    const inputContainer: HTMLDivElement = document.createElement("div");
    inputContainer.className = 'size-full bg-white shadow-md rounded-full flex items-center px-4';

    const input: HTMLInputElement = document.createElement("input");
    input.className = 'w-full';
    input.placeholder = 'Translation';

    inputContainer.appendChild(input);

    const deleteButton: HTMLButtonElement = document.createElement("button");
    deleteButton.className = 'delete-button icon';
    deleteButton.textContent = 'delete';

    li.appendChild(select);
    li.appendChild(inputContainer);
    li.appendChild(deleteButton);

    return {
        li: li,
        deleteButton: deleteButton,
    };
}