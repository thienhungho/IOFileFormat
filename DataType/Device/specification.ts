import {
    InformationObjectType,
    SimpleInformationObjectType,
} from "../../UseFromIOSpecification/specification";

export interface DeviceInformationObjectType extends InformationObjectType {
    key: string
}

// Few data using to save data... we still can use full Information
export interface SimpleDeviceInformationObjectType extends SimpleInformationObjectType {

}
