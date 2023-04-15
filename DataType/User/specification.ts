import {
    InformationObjectType,
    SimpleInformationObjectType,
} from "../../UseFromIOSpecification/specification";

export interface UserInformationObjectType extends InformationObjectType {
    key: string
}

// Few data using to save data... we still can use full Information
export interface SimpleUserInformationObjectType extends SimpleInformationObjectType {

}
