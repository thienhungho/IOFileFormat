import {
    InformationObjectType,
    SimpleInformationObjectType,
} from "../UseFromIOSpecification/specification";
import {
    CommonFileInformationDataOfIndexKeyObjectType,
    CommonFileInformationObjectType, SimpleCommonFileInformationDataOfIndexKeyObjectType,
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

export interface SimpleImageInformationDataOfIndexKeyObjectType extends SimpleCommonFileInformationDataOfIndexKeyObjectType {
    1: SimplePixelColorInformationObjectType['key'][],
    // Width Information...
    2: number,
    // Replace blank pixel to color...
    3: SimplePixelColorInformationObjectType['key'] | boolean,
    // You can fire or alert police or many actions per unlicensed opened times... (violated after saw alert)
    4: SimpleCreatorInformationObjectType | CreatorInformationObjectType['key'],
}

export interface ImageInformationDataOfIndexKeyObjectType extends SimpleCommonFileInformationDataOfIndexKeyObjectType {
    1: PixelColorInformationObjectType[] | PixelColorInformationObjectType['key'][],
    // Width Information...
    2: number,
    // Replace blank pixel to color...
    3: PixelColorInformationObjectType | PixelColorInformationObjectType['key'] | boolean,
    // You can fire device or alert police or many actions per unlicensed opened times... (violated after saw alert)
    4: CreatorInformationObjectType | CreatorInformationObjectType['key'],
}

export interface SimpleImageFileInformation extends SimpleCommonFileInformationObjectType {
    // @ts-ignore
    [indexKey: InformationObjectType['key']]: SimpleImageInformationDataOfIndexKeyObjectType
}

export interface ImageInformation extends CommonFileInformationObjectType {
    // @ts-ignore
    [indexKey: InformationObjectType['key']]: ImageInformationDataOfIndexKeyObjectType
}
