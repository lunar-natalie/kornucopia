import { setupDropdowns, setupMemberImages } from "./client/dom";

window.onload = (_ev: Event) => {
    setupMemberImages();
    setupDropdowns();
}
