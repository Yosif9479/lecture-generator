import * as storage from './storage';
import * as creator from './creator';

const elements = {
    terminInput: document.getElementById('termin-input') as HTMLInputElement,
    translationsUl: document.getElementById('translations-list') as HTMLUListElement,
    addButton: document.getElementById('add-button') as HTMLButtonElement,
    saveButton: document.getElementById('save-button') as HTMLButtonElement
}

document.addEventListener('DOMContentLoaded', onLoad);

let word: Word;
let words: Word[];

async function onLoad(): Promise<void> {
    elements.addButton.addEventListener('click', addTranslation);
    elements.saveButton.addEventListener('click', save);

    const parameters: URLSearchParams = new URLSearchParams(window.location.search);
    const id: string = parameters.get('id');

    words = storage.get('words');
    word = words.find(w => w.id == id);

    initData();
}

function addTranslation(): HTMLTranslationElement {
    const translation: HTMLTranslationElement = creator.createTranslation();

    elements.translationsUl.appendChild(translation.li);

    translation.deleteButton.addEventListener('click', () => removeTranslation(translation.li));

    return translation;
}

function removeTranslation(li: HTMLLIElement): void {
    elements.translationsUl.removeChild(li);
}

function save(): void {
    initWord();

    const isInvalid: boolean = (word.termin.length <= 0 || word.translations.length <= 1);

    if (isInvalid) {
        alert("Termin must not be empty and at least 2 translations is required!");
        return;
    }

    const index: number = words.findIndex(w => w.id == word.id);
    words[index] = word;

    storage.set('words', words);

    window.location.href = '/';
}

function initWord(): void {
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

function initData(): void {
    elements.terminInput.value = word.termin;

    const translationFields = elements.translationsUl.querySelectorAll<HTMLLIElement>('li');

    for (let i: number = 0; i < word.translations.length; i++) {
        const field: HTMLLIElement = i < translationFields.length ? translationFields[i] : addTranslation().li;

        const localeSelect: HTMLSelectElement = field.querySelector('select');
        const input: HTMLInputElement = field.querySelector('input');

        localeSelect.value = word.translations[i].key;
        input.value = word.translations[i].value;
    }
}