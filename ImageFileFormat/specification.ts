import {
    InformationObjectType,
    SimpleInformationObjectType,
} from "../UseFromIOSpecification/specification";
import {CommonFileInformationObjectType, SimpleFileTypeInformationObjectType} from "../FileType/specification";
import {LocationInformationObjectType, SimpleLocationInformationObjectType} from "../DataType/Location/specification";
import {
    DeviceInformationObjectType,
    SimpleDeviceInformationObjectType
} from "../DataType/Device/specification";
import {SimpleTimeInformationObjectType, TimeInformationObjectType} from "../DataType/Time/specification";
import {
    PhotographerInformationObjectType,
    SimplePhotographerInformationObjectType
} from "../DataType/User/Photographer/specification";

export interface PixelColorInformationObjectType extends InformationObjectType {

}

// Few data using to save data... we still can use full Information
export interface SimplePixelColorInformationObjectType extends SimpleInformationObjectType {

}

// Few data using to save data... we still can use full Information
export interface SimpleMetaInformationObjectType extends SimpleInformationObjectType {

}

// It is up to user can add information they need...
export interface MetaInformationObjectType extends InformationObjectType {
    
}

// Only can use key if data were registered.... (0, 1, 2, 3,... are just Array key)
export interface SimpleImageFileInformation extends SimpleFileTypeInformationObjectType {
    1: SimplePixelColorInformationObjectType['key'][],
    // Width Information...
    2: number,
    // Replace blank pixel to color...
    3: SimplePixelColorInformationObjectType['key'] | boolean,
    // You can fire or alert police or many action per unlicensed opened times... (violated after saw alert)
    4: SimplePhotographerInformationObjectType | PhotographerInformationObjectType['key'],
    // You can fire device or alert police or many action per did not allow take picture times... (violated after saw alert)
    5: SimpleTimeInformationObjectType | TimeInformationObjectType['key'],
    // You can fire device or alert police or many action per did not allow take picture times... (violated after saw alert)
    6: SimpleLocationInformationObjectType | LocationInformationObjectType['key'],
    // You can fire device or alert police or many action per did not allow take picture times... (violated after saw alert)
    7: SimpleDeviceInformationObjectType | DeviceInformationObjectType['key'],
    8: SimpleMetaInformationObjectType[] | SimpleMetaInformationObjectType['key'],
}

// Only can use key if data were registered.... (0, 1, 2, 3,... are just Array key)
export interface ImageInformation extends CommonFileInformationObjectType {
    1: PixelColorInformationObjectType[] | PixelColorInformationObjectType['key'],
    // Width Information...
    2: number,
    // Replace blank pixel to color...
    3: PixelColorInformationObjectType | PixelColorInformationObjectType['key'] | boolean,
    // You can fire device or alert police or many action per unlicensed opened times... (violated after saw alert)
    4: PhotographerInformationObjectType | PhotographerInformationObjectType['key'],
    // You can fire device or alert police or many action per did not allow take picture times... (violated after saw alert)
    5: TimeInformationObjectType | TimeInformationObjectType['key'],
    // You can fire device or alert police or many action per did not allow take picture times... (violated after saw alert)
    6: LocationInformationObjectType | LocationInformationObjectType['key'],
    // You can fire device or alert police or many action per did not allow take picture times... (violated after saw alert)
    7: DeviceInformationObjectType | DeviceInformationObjectType['key'],
    8: MetaInformationObjectType[] | MetaInformationObjectType['key'],
}
