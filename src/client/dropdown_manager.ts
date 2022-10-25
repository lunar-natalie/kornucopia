import $ from "jquery";

export class DropdownManager {
    private rootElement: HTMLElement;
    private innerElement?: HTMLElement;
    private controlElement: HTMLElement;

    constructor(rootElement: HTMLElement) {
        this.rootElement = rootElement;
        this.controlElement = document.createElement("div");
        let controlImage = document.createElement("img");
        $(controlImage).attr("src", "/images/caret.png")
        $(this.controlElement)
            .addClass("control")
            .append(controlImage)
            .on("click", () => this.toggleExpand())
            .appendTo($(this.rootElement).children().first());
        this.innerElement = $(this.rootElement).children().get(1);
    }

    private toggleExpand(): void {
        $(this.rootElement).toggleClass("expanded");
        if (this.innerElement) {
            if (this.innerElement.style.height.length === 0
                || this.innerElement.style.height === "0px") {
                // Here be dragons
                $(this.innerElement).height(Array.prototype.reduce.call(
                    $(this.innerElement).children().toArray(), (p, c) => {
                        return p + (c.offsetHeight || 0);
                    }, 0) + "px");
            } else {
                $(this.innerElement).height(0);
            }
        }
    }
}
