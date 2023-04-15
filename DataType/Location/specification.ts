import {
    InformationObjectType,
    SimpleInformationObjectType,
} from "../../UseFromIOSpecification/specification";

export interface LocationInformationObjectType extends InformationObjectType {
    key: string
}

// Few data using to save data... we still can use full Information
export interface SimpleLocationInformationObjectType extends SimpleInformationObjectType {

}
