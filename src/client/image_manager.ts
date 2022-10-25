import { StaticPath } from "./path";
import $ from "jquery";

export class ImageManager {
    private rootElement: HTMLElement;
    private imageContainer: HTMLElement;
    private backControl?: HTMLElement;
    private forwardControl?: HTMLElement;
    private imagePaths: StaticPath[];
    private imageIndex: number;

    constructor(rootElement: HTMLElement, imagePaths: StaticPath[]) {
        this.rootElement = rootElement;
        this.imagePaths = imagePaths;

        this.imageContainer = document.createElement("div");
        $(this.imageContainer).addClass("image-container");

        if (this.imagePaths.length > 0) {
            this.imageIndex = 0;
            this.update();

            if (this.imagePaths.length > 1) {
                this.createControls();
            }
        }

        $(this.rootElement).find(".inner").first().append(this.imageContainer);
    }

    private createControls(): void {
        this.backControl = document.createElement("img");
        $(this.backControl)
            .attr("src", "/images/back_control.png")
            .addClass("control back")
            .on("click", () => this.back());

        this.forwardControl = document.createElement("img");
        $(this.forwardControl)
            .attr("src", "/images/forward_control.png")
            .addClass("control forward")
            .on("click", () => this.forward());

        $(this.imageContainer).append(this.backControl, this.forwardControl);
    }

    private update(): void {
        let imageUrl = this.imagePaths[this.imageIndex].getCssUrl();
        $(new Array<HTMLElement>(this.rootElement, this.imageContainer))
            .css("background-image", imageUrl);
    }

    private back(): void {
        if (this.imageIndex > 0) {
            --this.imageIndex;
        } else {
            this.imageIndex = this.imagePaths.length - 1;
        }
        this.update();
    }

    private forward(): void {
        if (this.imageIndex < this.imagePaths.length - 1) {
            ++this.imageIndex;
        } else {
            this.imageIndex = 0;
        }
        this.update();
    }
}
