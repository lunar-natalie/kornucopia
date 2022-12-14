import { MemberMetadata, MemberMetadataArray } from "./member_metadata";
import { StaticPath } from "./path";
import $ from "jquery";

export async function getMemberMetadataArray(): Promise<MemberMetadataArray> {
    return new Promise((resolve, reject) => {
        $.getJSON(new StaticPath("/metadata/members.json").toString(),
            (data: object) => {
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
