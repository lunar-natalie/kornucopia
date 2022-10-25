import { DropdownManager } from "./dropdown_manager";
import { getMemberMetadataArray } from "./loader";
import { ImageManager } from "./image_manager";
import $ from "jquery";

export function setupMemberImages(): void {
    getMemberMetadataArray().then((metadataArray) => {
        $(".content .member").each((_i, memberElement) => {
            let memberId = $(memberElement).attr("id");
            if (!memberId) {
                return;
            }

            let currentMetadata = metadataArray.getMetadataForId(memberId);
            if (!currentMetadata) {
                return;
            }

            new ImageManager(memberElement, currentMetadata.getImagePaths());
        });
    }).catch((reason) => {
        console.warn(reason);
    });
}

export function setupDropdowns(): void {
    $(".content .dropdown").each((_i, dropdownElement) => {
        new DropdownManager(dropdownElement);
    });
}
