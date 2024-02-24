import { BuildingTypeModel } from "./buildingType";

export interface NetworkType {
    id: number;
    name: string;
    image: string;
}

export interface Image {
    id: number;
    url: string;
    delete: {
        href: string;
        method: string;
    };
}


export interface VillaData {
    id: number;

    user: string;

    user_avatar: string;

    phone: string;

    user_type: string;

    user_id: number;

    //نوع المبنى
    building_type: BuildingTypeModel;

    // شبكات الإتصال
    network_types: NetworkType[];

    // ملاحظات
    desc: string;

    // رقم الهاتف
    advertiser_phone: string | null;

    // السعر الأدنى
    min_price: number;

    // السعر الأقصى
    max_price: number;

    // المساحة الأدنى
    min_distance: number;

    // المساحة الأقصى
    max_distance: number;

    // عدد الشقق
    apartments_count: number | null;

    // غرف النوم
    bedrooms_count: number;

    // دورات المياة
    bathrooms_count: number;

    // الغرف الإضافية
    additional_rooms_count: number | null;

    // عدد الغرف
    all_rooms: number;

    // المحلات
    shops_count: number | null;

    // عرض الشارع
    street_width: number | null;

    // عمر العقار
    age: string | null;

    // واجهة المبنى
    interface: string | null;

    // رقم الترخيص
    license_number: string;
    adv_license_number: string;

    purpose: string;

    // العنوان
    address: string;

    // خطوط الطول
    lat: string;

    // خطوط العرض
    long: string;

    // غرفة سائق
    driver_room: number;

    // غرفة خادمة
    maid_room: number;

    pool: number;

    // كراج
    car_entrance: number;

    // سلم خارجي
    external_staircase: number;

    // فناء
    courtyard: number;

    // ملحق
    supplement: number;

    // مصعد
    elevator: number;

    // مطبخ
    kitchen: number;

    // سطح
    roof: number;
    duplex: number;

    // منفصل
    separated: number;

    // قبو
    basement: number;

    // مكيف هواء
    air_conditioner: number;

    // رابط الفيدو
    video_link: string | null;

    // الفيدو
    video: string;

    icon: string;

    // الصور
    images: Image[];

    // المشاهدات
    views: number;
    status: string;
    current_status: string;

    // مفضلة
    is_favored: boolean;
    from_dashboard: number;
    created_from_dashboard: number;
    creation_time: string;
    last_update: string;
}



