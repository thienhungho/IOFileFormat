import {
    InformationObjectType,
    SimpleInformationObjectType,
} from "../../../UseFromIOSpecification/specification";
import { SimpleUserInformationObjectType, UserInformationObjectType } from "../specification";

export interface CreatorInformationObjectType extends InformationObjectType {
    // Worker(s)
    0: UserInformationObjectType | UserInformationObjectType[] | SimpleUserInformationObjectType | SimpleUserInformationObjectType[] | UserInformationObjectType['key'] | UserInformationObjectType['key'][],
    // Owner(s)
    1: UserInformationObjectType | UserInformationObjectType[] | SimpleUserInformationObjectType | SimpleUserInformationObjectType[] | UserInformationObjectType['key'] | UserInformationObjectType['key'][],
}

export interface SimpleCreatorInformationObjectType extends SimpleInformationObjectType {
    // Worker(s)
    0: UserInformationObjectType | UserInformationObjectType[] | SimpleUserInformationObjectType | SimpleUserInformationObjectType[] | UserInformationObjectType['key'] | UserInformationObjectType['key'][],
    // Owner(s)
    1: UserInformationObjectType | UserInformationObjectType[] | SimpleUserInformationObjectType | SimpleUserInformationObjectType[] | UserInformationObjectType['key'] | UserInformationObjectType['key'][],
}
