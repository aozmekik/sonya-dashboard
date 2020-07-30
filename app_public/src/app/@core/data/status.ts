import { Utils } from '../../utils/utils.module';

export const enum Status {
    ACTIVE,
    PASSIVE,
}

export const statusMap: Utils.IHash = {
    [Status.ACTIVE]: "Aktif",
    [Status.PASSIVE]: "Pasif",
}

export const statusValues: string[] = Utils.keys(statusMap);