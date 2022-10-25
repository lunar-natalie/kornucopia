import { StaticPath } from "./path";

export interface MemberMetadata {
    id: string;
    imageNames: string[];
}

export class MemberMetadata {
    getImagePaths(): StaticPath[] {
        return this.imageNames.map(filename =>
            new StaticPath(`/images/members/${this.id}/${filename}`));
    }
}

export class MemberMetadataArray extends Array<MemberMetadata> {
    getMetadataForId(id: string): MemberMetadata | undefined {
        return this.find(member => member.id === id);
    }
}
