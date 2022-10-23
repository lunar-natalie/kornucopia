import { getMemberMetadataArray } from "./static_loader";

import $ from "jquery";

/**
 * Starts asynchronous loading of band member metadata from the server and
 * attaches a callback to add background images and portrait containers to
 * member sections on the DOM.
 */
export function setupMemberImages(): void {
    getMemberMetadataArray().then((metadataArray) => {
        $(".content .member").each((_i, el) => {
            let id = $(el).attr("id");
            if (!id) {
                return;
            }

            let currentMetadata = metadataArray.getMetadataForId(id);
            if (!currentMetadata) {
                return;
            }

            let imagePaths = currentMetadata.getImagePaths();
            if (imagePaths.length === 0) {
                return;
            }

            $(el).css("background-image", imagePaths[0].getCssUrl());

            let imageContainer = document.createElement("div");
            imageContainer.classList.add("image-container");
            $(el).find(".inner").first().append(imageContainer);
        });
    }).catch((reason) => {
        console.warn(reason);
    });
}
