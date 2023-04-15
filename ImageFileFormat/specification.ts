import {
    InformationObjectType,
    SimpleInformationObjectType,
} from "../UseFromIOSpecification/specification";
import {
    CommonFileInformationObjectType,
    SimpleCommonFileInformationObjectType,
} from "../FileType/specification";
import {
    CreatorInformationObjectType,
    SimpleCreatorInformationObjectType
} from "../DataType/User/Creator/specification";

export interface PixelColorInformationObjectType extends InformationObjectType {

}

// Few data using to save data... we still can use full Information
export interface SimplePixelColorInformationObjectType extends SimpleInformationObjectType {

}

// Only can use key if data were registered.... (0, 1, 2, 3,... are just Array key)
export interface SimpleImageFileInformation extends SimpleCommonFileInformationObjectType {
    1: SimplePixelColorInformationObjectType['key'][],
    // Width Information...
    2: number,
    // Replace blank pixel to color...
    3: SimplePixelColorInformationObjectType['key'] | boolean,
    // You can fire or alert police or many actions per unlicensed opened times... (violated after saw alert)
    4: SimpleCreatorInformationObjectType | CreatorInformationObjectType['key'],
}

// Only can use key if data were registered.... (0, 1, 2, 3,... are just Array key)
export interface ImageInformation extends CommonFileInformationObjectType {
    1: PixelColorInformationObjectType[] | PixelColorInformationObjectType['key'][],
    // Width Information...
    2: number,
    // Replace blank pixel to color...
    3: PixelColorInformationObjectType | PixelColorInformationObjectType['key'] | boolean,
    // You can fire device or alert police or many actions per unlicensed opened times... (violated after saw alert)
    4: CreatorInformationObjectType | CreatorInformationObjectType['key'],
}
