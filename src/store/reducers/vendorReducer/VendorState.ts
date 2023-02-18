import {IVendor} from "../../../model/Ivendors";

export interface IVendorState {
    status: string;
    hasMore:boolean
    contactCollection: IVendor[];
    error: any;
}
