import {
    InformationObjectType,
} from "../UseFromIOSpecification/specification";
import {
    CommonFileInformationDataOfIndexKeyObjectType,
    CommonFileInformationObjectType,
    SimpleCommonFileInformationDataOfIndexKeyObjectType,
} from "../FileType/specification";
import {
    CreatorInformationObjectType,
} from "../DataType/User/Creator/specification";
import {
    TimeCounterDataInformationObjectType,
} from "../DataType/TimeCounter/specification";
import { SimpleImageFileInformation } from "../ImageFileFormat/specification";
import { SimpleSoundInformation } from "../SoundFileFormat/specification";

export interface SimpleVideoInformationDataOfIndexKeyObjectType extends SimpleCommonFileInformationDataOfIndexKeyObjectType {
    1: {
        frames: {
            0: SimpleImageFileInformation[],
            1: SimpleSoundInformation[],
            2: TimeCounterDataInformationObjectType
        }[],
    },
    // Total Video Duration...
    2: TimeCounterDataInformationObjectType,
    // Replace blank frames to frames...
    3: SimpleVideoInformation | SimpleVideoInformation['key'] | boolean,
    // You can fire device or alert police or many actions per unlicensed opened times... (violated after saw alert)...
    4: CreatorInformationObjectType | CreatorInformationObjectType['key'],
}

export interface SimpleVideoInformation extends CommonFileInformationObjectType {
    // @ts-ignore
    [indexKey: InformationObjectType['key']]: SimpleSoundInformationDataOfIndexKeyObjectType
}

export interface VideoInformationDataOfIndexKeyObjectType extends CommonFileInformationDataOfIndexKeyObjectType {
    1: {
        frames: {
            0: SimpleImageFileInformation[],
            1: SimpleSoundInformation[],
            2: TimeCounterDataInformationObjectType
        }[],
    },
    // Total Video Duration...
    2: TimeCounterDataInformationObjectType,
    // Replace blank frames to frames...
    3: VideoInformation | VideoInformation['key'] | boolean,
    // You can fire device or alert police or many actions per unlicensed opened times... (violated after saw alert)...
    4: CreatorInformationObjectType | CreatorInformationObjectType['key'],
}

export interface VideoInformation extends CommonFileInformationObjectType {
    // @ts-ignore
    [indexKey: InformationObjectType['key']]: VideoInformationDataOfIndexKeyObjectType
}
