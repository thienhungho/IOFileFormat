import { TimeUnitInformationObjectType } from "../TimeUnit/specification";

export interface TimeCounterDataInformationObjectType {
    time_unit: TimeUnitInformationObjectType | TimeUnitInformationObjectType['key'],
    total: number,
}

// Few data using to save data... we still can use full Information
export interface SimpleTimeCounterDataInformationObjectType extends TimeCounterDataInformationObjectType {

}
