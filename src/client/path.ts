export class StaticPath extends String {
    constructor(text: string) {
        super(text);
    }

    getCssUrl(): string {
        return `url('${this}')`;
    }
}
