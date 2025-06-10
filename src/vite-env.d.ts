/// <reference types="vite/client" />

type Word = {
    id: string;
    termin: string;
    translations: Translation[];
}

type HTMLWordElement = {
    li: HTMLLIElement;
    editButton: HTMLButtonElement;
    deleteButton: HTMLButtonElement;
}

type Translation = {
    key: string;
    value: string;
}