import { VersionMenu } from "./version-menu.model";

export class Version {
    public id: string;
    public name: string;
    public menu: VersionMenu[] = [];
}