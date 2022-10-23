/**
 * String wrapper for static asset paths.
 */
export class StaticPath extends String {
    constructor(text: string) {
        super(text);
    }

    /**
     * Gets the string's formatted URL value.
     * @returns Value assignable to CSS properties.
     */
    getCssUrl(): string {
        return `url('${this}')`;
    }
}
