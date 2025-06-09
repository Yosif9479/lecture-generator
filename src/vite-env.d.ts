/// <reference types="vite/client" />

type Word = {
    id: string;
    termin: string;
    translations: StringDictionary;
}

type HTMLWordElement = {
    li: HTMLLIElement;
    editButton: HTMLButtonElement;
    deleteButton: HTMLButtonElement;
}

type StringDictionary = {
    [key: string]: string;
}