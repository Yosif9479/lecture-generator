import * as storage from './storage.ts';
import * as creator from './creator';

const elements = {
    wordList: document.getElementById('word-list'),
}

let words: Word[] = [];

document.addEventListener('DOMContentLoaded', onLoad);

async function onLoad(): Promise<void> {
    words = await storage.get('words') ?? [];

    await populateWords();
}

async function populateWords(): Promise<void> {
    elements.wordList.innerHTML = '';
    for (const word of words) {
        const element: HTMLWordElement = creator.createWord(word);
        elements.wordList.appendChild(element.li);
        element.deleteButton.addEventListener('click', () => removeWord(word, element.li));
        element.editButton.addEventListener('click', () => editWord(word.id))
    }
}

async function editWord(id: string): Promise<void> {
    window.location.href = `/edit?id=${id}`;
}

async function removeWord(word: Word, li: HTMLLIElement): Promise<void> {
    words.splice(words.indexOf(word), 1);
    storage.set('words', words);
    elements.wordList.removeChild(li);
}