import {
    InformationObjectType,
    SimpleInformationObjectType,
} from "../UseFromIOSpecification/specification";

export interface SimpleFileTypeInformationObjectType extends SimpleInformationObjectType {

}

export interface FileTypeInformationObjectType extends InformationObjectType {

}

// Only can use key if data were registered....
export interface CommonFileInformationObjectType {
    0: FileTypeInformationObjectType | FileTypeInformationObjectType['key'],
}

// Only can use key if data were registered....
export interface SimpleCommonFileInformationObjectType {
    0: SimpleFileTypeInformationObjectType['key'],
}