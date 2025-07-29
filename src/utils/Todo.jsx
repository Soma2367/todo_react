export class Todo {
    constructor(text) {
        this.id = crypto.randomUUID();
        this.text = text;
    }
}