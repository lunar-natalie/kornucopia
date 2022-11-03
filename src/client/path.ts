export class StaticPath extends String {
    public static readonly prefix = process.env.PUBLIC_PREFIX || "";

    constructor(text: string) {
        super(StaticPath.prefix + text);
    }

    getCssUrl(): string {
        return `url('${this}')`;
    }
}
