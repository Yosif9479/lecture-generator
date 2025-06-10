/// <reference types="vite/client" />

type Word = {
    id: string;
    termin: string;
    translations: Translation[];
}

type HTMLWordElement = {
    li: HTMLLIElement;
    label: HTMLLabelElement;
    editButton: HTMLButtonElement;
    deleteButton: HTMLButtonElement;
}

type HTMLTranslationElement = {
    li: HTMLLIElement;
    deleteButton: HTMLButtonElement;
}

type Translation = {
    key: string;
    value: string;
}