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
import { ImageInformation } from "../ImageFileFormat/specification";
import { SoundInformation } from "../SoundFileFormat/specification";
import {
    NumberUnitInformationObjectType,
    SimpleNumberUnitInformationObjectType
} from "../DataType/NumberUnit/specification";

export interface SimpleVideoInformationDataOfIndexKeyObjectType extends SimpleCommonFileInformationDataOfIndexKeyObjectType {
    1: {
        layers: {
            // Frames
            0: {
                0: ImageInformation[],
                1?: SoundInformation[],
                // Edge....
                2?: ImageInformation[],
                3: TimeCounterDataInformationObjectType,
            }[],
            // Layer Identity...
            1?: SimpleNumberUnitInformationObjectType | SimpleNumberUnitInformationObjectType['key'],
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
        layers: {
            // Frames
            0: {
                0: ImageInformation[],
                1?: SoundInformation[],
                // Edge....
                2?: ImageInformation[],
                3: TimeCounterDataInformationObjectType,
            }[],
            // Layer Identity...
            1?: NumberUnitInformationObjectType | SimpleNumberUnitInformationObjectType['key'],
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
