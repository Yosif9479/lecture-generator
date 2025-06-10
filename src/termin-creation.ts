import * as storage from './storage';
import * as creator from './creator';

const elements = {
    terminInput: document.getElementById('termin-input') as HTMLInputElement,
    translationsUl: document.getElementById('translations-list') as HTMLUListElement,
    addButton: document.getElementById('add-button') as HTMLButtonElement,
    saveButton: document.getElementById('save-button') as HTMLButtonElement
}

document.addEventListener('DOMContentLoaded', onLoad);

async function onLoad(): Promise<void>
{
    elements.addButton.addEventListener('click', addTranslation);
    elements.saveButton.addEventListener('click', save);
}

const word: Word = { 
    id: crypto.randomUUID(),
    termin: '',
    translations: []
};

function addTranslation(): void
{
    const translation: HTMLTranslationElement = creator.createTranslation();
    
    elements.translationsUl.appendChild(translation.li);
    
    translation.deleteButton.addEventListener('click', () => removeTranslation(translation.li));
}

function removeTranslation(li: HTMLLIElement): void
{
    elements.translationsUl.removeChild(li);
}

function save(): void
{
    initWord();
    
    const isInvalid: boolean = (word.termin.length <= 0 || word.translations.length <= 1);
    
    if (isInvalid)
    {
        alert("Termin must not be empty and at least 2 translations is required!");
        return;
    }
    
    const words: Word[] = storage.get('words');
    
    words.push(word);
    
    storage.set('words', words);
    
    window.location.href = '/';
}

function initWord(): void
{
    word.id = crypto.randomUUID();
    word.termin = elements.terminInput.value.trim();
    word.translations = [];
    
    const translations = elements.translationsUl.querySelectorAll('li');

    translations.forEach(li => {
        const select = li.querySelector('select') as HTMLSelectElement;
        const input = li.querySelector('input') as HTMLInputElement;
        
        const key = select.value;
        const value = input.value;

        word.translations.push({key, value});
    });
}