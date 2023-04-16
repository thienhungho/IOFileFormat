import {
    InformationObjectType,
    SimpleInformationObjectType,
} from "../UseFromIOSpecification/specification";
import { SimpleTimeInformationObjectType, TimeInformationObjectType } from "../DataType/Time/specification";
import { LocationInformationObjectType, SimpleLocationInformationObjectType } from "../DataType/Location/specification";
import { DeviceInformationObjectType, SimpleDeviceInformationObjectType } from "../DataType/Device/specification";
import { LicenseInformationObjectType, SimpleLicenseInformationObjectType } from "../DataType/License/specification";

export interface SimpleFileTypeInformationObjectType extends SimpleInformationObjectType {

}

export interface FileTypeInformationObjectType extends InformationObjectType {

}

// Few data using to save data... we still can use full Information
export interface SimpleMetaInformationObjectType extends SimpleInformationObjectType {

}

// It is up to user can add information they need...
export interface MetaInformationObjectType extends InformationObjectType {

}

export interface SimpleFileIdentityInformationObjectType {
    // You can fire device or alert police or many actions per did not allow take picture times... (violated after saw alert)
    5: SimpleTimeInformationObjectType | TimeInformationObjectType['key'],
    // You can fire device or alert police or many actions per did not allow take picture times... (violated after saw alert)
    6: SimpleLocationInformationObjectType | LocationInformationObjectType['key'],
    // You can fire device or alert police or many actions per did not allow take picture times... (violated after saw alert)
    7: SimpleDeviceInformationObjectType | DeviceInformationObjectType['key'],
    // You can fire or alert police or many actions per unlicensed opened times... (violated after saw alert)
    8: SimpleLicenseInformationObjectType | LicenseInformationObjectType['key'],
    9: SimpleMetaInformationObjectType[] | SimpleMetaInformationObjectType['key'],
}

export interface FileIdentityInformationObjectType {
    // You can fire device or alert police or many actions per did not allow take picture times... (violated after saw alert)
    5: TimeInformationObjectType | TimeInformationObjectType['key'],
    // You can fire device or alert police or many actions per did not allow take picture times... (violated after saw alert)
    6: LocationInformationObjectType | LocationInformationObjectType['key'],
    // You can fire device or alert police or many actions per did not allow take picture times... (violated after saw alert)
    7: DeviceInformationObjectType | DeviceInformationObjectType['key'],
    // You can fire or alert police or many actions per unlicensed opened times... (violated after saw alert)
    8: LicenseInformationObjectType | LicenseInformationObjectType['key'],
    9: MetaInformationObjectType[] | MetaInformationObjectType['key'],
}

export interface CommonFileInformationDataOfIndexKeyObjectType extends SimpleFileTypeInformationObjectType {
    0: FileTypeInformationObjectType | FileTypeInformationObjectType['key'],
}

export interface SimpleCommonFileInformationDataOfIndexKeyObjectType extends FileIdentityInformationObjectType {
    0: FileTypeInformationObjectType | FileTypeInformationObjectType['key'],
}

// Only can use key if data were registered.... we use combine feature in future
export interface CommonFileInformationObjectType extends InformationObjectType {
    // @ts-ignore
    [indexKey: InformationObjectType['key']]: CommonFileInformationDataOfIndexKeyObjectType | any
}

// Only can use key if data were registered.... we use combine feature in future
export interface SimpleCommonFileInformationObjectType extends SimpleInformationObjectType {
    // @ts-ignore
    [indexKey: InformationObjectType['key']]: SimpleCommonFileInformationDataOfIndexKeyObjectType | any
}