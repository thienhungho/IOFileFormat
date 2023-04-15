import {
    InformationObjectType,
    SimpleInformationObjectType,
} from "../../../UseFromIOSpecification/specification";
import {SimpleUserInformationObjectType, UserInformationObjectType} from "../specification";

// It is up to user can add information they need...
export interface PhotographerInformationObjectType extends InformationObjectType {
    key: string,
    owner: UserInformationObjectType | SimpleUserInformationObjectType | UserInformationObjectType['key'],
    worker: UserInformationObjectType | SimpleUserInformationObjectType | UserInformationObjectType['key'],
}

export interface SimplePhotographerInformationObjectType extends SimpleInformationObjectType {
    owner: UserInformationObjectType | SimpleUserInformationObjectType | UserInformationObjectType['key'],
    worker: UserInformationObjectType | SimpleUserInformationObjectType | UserInformationObjectType['key'],
}
