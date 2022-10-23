import { MemberMetadata, MemberMetadataArray } from "./member_metadata";

import $ from "jquery";

/**
 * Gets the metadata for all band members on the server, using AJAX.
 * @returns Promise with parsed metadata if successful. If the metadata file
 * cannot be retrieved, the promise will not be resolved. If the format of the
 * retrieved metadata is invalid, the promise will be rejected.
 */
export async function getMemberMetadataArray(): Promise<MemberMetadataArray> {
    return new Promise((resolve, reject) => {
        $.getJSON("/metadata/members.json", (data: object) => {
            let baseArray = new Array<object>;
            Object.assign(baseArray, data);

            let metadataArray = new MemberMetadataArray();
            Object.assign(metadataArray, baseArray.map(
                (value, _i, _arr) => {
                    let metadata = new MemberMetadata();
                    Object.assign(metadata, value);
                    return metadata;
                }));
            resolve(metadataArray);
        }).catch((_t, _u, _v) => {
            reject("Failed to get metadata for band members");
        });
    });
}
