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
import {
    SimpleTimeCounterDataInformationObjectType,
    TimeCounterDataInformationObjectType
} from "../DataType/TimeCounter/specification";

// Few data using to save data... we still can use full Information
export interface SimpleSoundVibrationRateRangeInformationObjectType extends
    SimpleInformationObjectType,
    SimpleTimeCounterDataInformationObjectType
{
    start_range: InformationObjectType | InformationObjectType['key'],
    end_range: InformationObjectType | InformationObjectType['key'],
    // Range have format: start_range|end_range
    range?: string,
}

export interface SoundVibrationUnitWithRateRangeInformationObjectType extends
    InformationObjectType
{
    start_range: InformationObjectType | InformationObjectType['key'],
    end_range: InformationObjectType | InformationObjectType['key'],
    // Range have format: start_range|end_range
    range?: string,
}

export interface SoundVibrationUnitWithTimeCounterInformationObjectType extends
    InformationObjectType,
    TimeCounterDataInformationObjectType
{
    vibration: InformationObjectType | InformationObjectType['key'],
}

// Few data using to save data... we still can use full Information
export interface SimpleSoundVibrationUnitWithTimeCounterInformationObjectType extends
    SimpleInformationObjectType,
    SimpleTimeCounterDataInformationObjectType
{
    vibration: InformationObjectType | InformationObjectType['key'],
}

export interface SoundVibrationUnitInformationObjectType extends InformationObjectType {

}

// Many speaker channels (split by range rates..) ... accept one version allowed high rates per....
// Can use software to choice any range rates to speak...

// Only can use key if key were registered....
export interface SoundVibrationUnitInformationCollectionObjectType extends InformationObjectType {
    [index: number]: SoundVibrationUnitInformationObjectType[]
        | SoundVibrationUnitInformationObjectType['key'][]
        | SoundVibrationUnitWithTimeCounterInformationObjectType['key'][]
        | SoundVibrationUnitWithTimeCounterInformationObjectType[]
}


export interface SimpleOneChannelSoundInformationDataOfIndexKeyObjectType extends SimpleCommonFileInformationDataOfIndexKeyObjectType {
    1: SoundVibrationUnitInformationCollectionObjectType,
    // Rate Range..
    10: SimpleSoundVibrationRateRangeInformationObjectType | SoundVibrationUnitWithRateRangeInformationObjectType['key'],
    // Counter...
    2: SimpleTimeCounterDataInformationObjectType,
    // Replace blank pixel to color...
    3: SoundVibrationUnitInformationCollectionObjectType | boolean,
    // You can fire or alert police or many actions per unlicensed opened times... (violated after saw alert)
    4: SimpleCreatorInformationObjectType | CreatorInformationObjectType['key'],
}

export interface SimpleOneChannelSoundFileInformation extends SimpleCommonFileInformationObjectType {
    // @ts-ignore
    [indexKey: InformationObjectType['key']]: SimpleOneChannelSoundInformationDataOfIndexKeyObjectType
}

export interface OneChannelSoundInformationDataOfIndexKeyObjectType extends CommonFileInformationDataOfIndexKeyObjectType {
    // @ts-ignore
    1: SoundVibrationUnitInformationCollectionObjectType,
    // Rate Range..
    // @ts-ignore
    10: SoundVibrationUnitWithRateRangeInformationObjectType | SoundVibrationUnitWithRateRangeInformationObjectType['key'],
    // Counter...
    // @ts-ignore
    2: SimpleTimeCounterDataInformationObjectType,
    // Replace blank sound to sound...
    // @ts-ignore
    3: SoundVibrationUnitInformationCollectionObjectType | boolean,
    // You can fire device or alert police or many actions per unlicensed opened times... (violated after saw alert)
    // @ts-ignore
    4: CreatorInformationObjectType | CreatorInformationObjectType['key'],
}

export interface OneChannelSoundInformation extends CommonFileInformationObjectType {
    // @ts-ignore
    [indexKey: InformationObjectType['key']]: OneChannelSoundInformationDataOfIndexKeyObjectType
}

// Allowed high rates per time unit...
export interface SimpleCombinedToOneChannelSoundFileInformation extends SimpleOneChannelSoundFileInformation {

}

// Allowed high rates per time unit....
export interface CombinedToOneChannelSoundInformation extends OneChannelSoundInformation {

}

export interface SimpleSoundInformationDataOfIndexKeyObjectType extends SimpleCommonFileInformationDataOfIndexKeyObjectType {
    // Multiple channels data...
    1: {
        // rateRange adapted value with SimpleOneChannelSoundFileInformation....
        [rateRange: SoundVibrationUnitWithRateRangeInformationObjectType['range'] | SoundVibrationUnitWithRateRangeInformationObjectType['key']]: SimpleOneChannelSoundFileInformation[],
    },
    // Combined Multiple channels data
    10: SimpleCombinedToOneChannelSoundFileInformation,
    // Rates Range....
    11: SimpleSoundVibrationRateRangeInformationObjectType[] | SimpleSoundVibrationRateRangeInformationObjectType['key'][] | SoundVibrationUnitInformationCollectionObjectType['key'][],
    // Counter...
    2: SimpleTimeCounterDataInformationObjectType,
    // Replace blank sound to sound...
    3: SimpleSoundInformation | SimpleSoundInformation['key'] | boolean,
    // You can fire device or alert police or many actions per unlicensed opened times... (violated after saw alert)
    4: CreatorInformationObjectType | CreatorInformationObjectType['key'],
}

export interface SimpleSoundInformation extends CommonFileInformationObjectType {
    // @ts-ignore
    [indexKey: InformationObjectType['key']]: SimpleSoundInformationDataOfIndexKeyObjectType
}

export interface SoundInformationDataOfIndexKeyObjectType extends CommonFileInformationDataOfIndexKeyObjectType {
    // Multiple channels data...
    1: {
        // rateRange adapted value with SimpleOneChannelSoundFileInformation....
        [rateRange: SoundVibrationUnitWithRateRangeInformationObjectType['range'] | SoundVibrationUnitWithRateRangeInformationObjectType['key']]: SoundVibrationUnitInformationCollectionObjectType[]
    },
    // Combined Multiple channels data
    10: CombinedToOneChannelSoundInformation,
    // Rates Range....
    11: SoundVibrationUnitInformationCollectionObjectType[] | SimpleSoundVibrationRateRangeInformationObjectType[] | SimpleSoundVibrationRateRangeInformationObjectType['key'][] | SoundVibrationUnitInformationCollectionObjectType['key'][],
    // Counter...
    2: SimpleTimeCounterDataInformationObjectType,
    // Replace blank sound to sound...
    3: SoundInformation | SoundInformation['key'] | boolean,
    // You can fire device or alert police or many actions per unlicensed opened times... (violated after saw alert)...
    4: CreatorInformationObjectType | CreatorInformationObjectType['key'],
}

export interface SoundInformation extends CommonFileInformationObjectType {
    // @ts-ignore
    [indexKey: InformationObjectType['key']]: SimpleSoundInformationDataOfIndexKeyObjectType
}
