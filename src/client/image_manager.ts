import { StaticPath } from "./path";
import $ from "jquery";

export class ImageManager {
    private rootElement: HTMLElement;
    private imageContainer: HTMLElement;
    private backControl?: HTMLElement;
    private forwardControl?: HTMLElement;
    private imagePaths: StaticPath[];
    private imageIndex: number;
    private previousImageIndex?: number;
    private imageElements: HTMLElement[];

    constructor(rootElement: HTMLElement, imagePaths: StaticPath[]) {
        this.rootElement = rootElement;
        this.imagePaths = imagePaths;

        this.imageContainer = document.createElement("div");
        $(this.imageContainer).addClass("image-container");

        if (this.imagePaths.length > 0) {
            this.imageIndex = 0;
            this.createImages();
            this.update();

            if (this.imagePaths.length > 1) {
                this.createControls();
            }
        }

        $(this.rootElement).find(".inner").first().append(this.imageContainer);

        this.setDimensions();
    }

    private createImages(): void {
        this.imageElements =
            this.imagePaths.map<HTMLElement>((path, _i, _arr) => {
                let imageElement = document.createElement("img");
                $(imageElement).attr("src", path.toString())
                return imageElement;
            });
        $(this.imageContainer).append(this.imageElements);
    }

    private setDimensions(): void {
        if (this.imageElements.length === 0) {
            return;
        }

        let heightValue = $(this.imageElements[0]).height();
        if (heightValue) {
            let cssHeight = Math.round((heightValue / window.innerHeight) * 100)
                + "vh";
            $(this.imageContainer).css("height", cssHeight);
        }
    }

    private createControls(): void {
        this.backControl = document.createElement("div");
        let backImage = document.createElement("img");
        $(this.backControl)
            .append($(backImage).attr("src",
                new URL("../../assets/images/back_control.png",
                    import.meta.url).toString()))
            .addClass("control back")
            .on("click", () => this.back());

        this.forwardControl = document.createElement("div");
        let forwardImage = document.createElement("img");
        $(this.forwardControl)
            .append($(forwardImage).attr("src",
                new URL("../../assets/images/forward_control.png",
                    import.meta.url).toString()))
            .addClass("control forward")
            .on("click", () => this.forward());

        $(this.imageContainer).append(this.backControl, this.forwardControl);
    }

    private update(): void {
        if (this.previousImageIndex !== undefined) {
            $(this.imageElements[this.previousImageIndex])
                .removeClass("current");
        }

        $(this.rootElement).addClass("update");
        let backgroundValue = this.imagePaths[this.imageIndex].getCssUrl();
        setTimeout(() => {
            $(this.rootElement).css("background-image", backgroundValue);
            setTimeout(() => {
                $(this.imageElements[this.imageIndex]).addClass("current");
                $(this.rootElement).removeClass("update");
            }, 250);
        }, 250);

        this.previousImageIndex = this.imageIndex;
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
