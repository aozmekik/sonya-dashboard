
export class City {
    il_id: number;
    id_adi: string;
}

export class Town {
    ilce_id: number;
    ilce_adi: string;
    il_id: number;
    il_adi: string;
}


export class District {
    mahalle_id: number;
    mahalle_adi: string;
    ilce_id: number;
    ilce_adi: string;
    il_id: number;
    il_adi: string;
}


export class Street {
    sokak_id: number;
    sokak_adi: string;
    mahalle_id: number;
    mahalle_adi: string;
    ilce_id: number;
    ilce_adi: string;
    il_id: number;
    il_adi: string;
}