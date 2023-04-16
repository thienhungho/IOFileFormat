import {
    InformationObjectType,
    SimpleInformationObjectType,
} from "../../UseFromIOSpecification/specification";

export interface TimeUnitInformationObjectType extends InformationObjectType {
    key: string
}

// Few data using to save data... we still can use full Information
export interface SimpleTimeUnitInformationObjectType extends SimpleInformationObjectType {

}
