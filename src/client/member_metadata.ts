import { StaticPath } from "./path";

/**
 * Base JSON properties for band member metadata.
 */
export interface MemberMetadata {
    /**
     * Identifier. <div> elements with the class 'member' on the DOM must be
     * tagged with this value to be processed. Images should be located at
     * /images/members/<id>/ on the server.
     */
    id: string;

    /** Image filenames relative to the member's static image directory. */
    imageNames: string[];
}

/**
 * Wrapper for band member metadata and asset handling.
 */
export class MemberMetadata {
    /**
     * Gets static paths of all images for the band member.
     * @returns Path array relative to the server.
     */
    getImagePaths(): StaticPath[] {
        return this.imageNames.map(filename =>
            new StaticPath(`/images/members/${this.id}/${filename}`));
    }
}

/**
 * Wrapper for array of metadata for multiple band members.
 */
export class MemberMetadataArray extends Array<MemberMetadata> {
    getMetadataForId(id: string): MemberMetadata | undefined {
        return this.find(member => member.id === id);
    }
}
