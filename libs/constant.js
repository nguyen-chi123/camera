const PROVINCE = {
    1: {
        name: "Hà Nội",
        region: 10
    },
    126: {
        name: "TP Hồ Chí Minh",
        region: 30
    },
    129: {
        name: "Đà Nẵng",
        region: 20
    },
    130: {
        name: "Sơn La",
        region: 10
    },
    132: {
        name: "Yên Bái",
        region: 10
    },
    134: {
        name: "Lạng Sơn",
        region: 10
    },
    135: {
        name: "Hải Phòng",
        region: 10
    },
    137: {
        name: "Tuyên Quang",
        region: 10
    },
    143: {
        name: "Quảng Trị",
        region: 20
    },
    144: {
        name: "Bắc Giang",
        region: 10
    },
    805: {
        name: "Hải Dương",
        region: 10
    },
    806: {
        name: "Cần Thơ",
        region: 30
    },
    807: {
        name: "Hà Nam",
        region: 10
    },
    808: {
        name: "Lào Cai",
        region: 10
    },
    811: {
        name: "Nam Định",
        region: 10
    },
    812: {
        name: "Bình Thuận",
        region: 30
    },
    816: {
        name: "Hưng Yên",
        region: 10
    },
    818: {
        name: "Quảng Bình",
        region: 20
    },
    819: {
        name: "Quảng Ninh",
        region: 10
    },
    821: {
        name: "Nghệ An",
        region: 20
    },
    823: {
        name: "Đồng Nai",
        region: 30
    },
    824: {
        name: "Tiền Giang",
        region: 30
    },
    826: {
        name: "Bình Định",
        region: 20
    },
    827: {
        name: "Vĩnh Phúc",
        region: 10
    },
    830: {
        name: "Hà Giang",
        region: 10
    },
    831: {
        name: "Khánh Hòa",
        region: 20
    },
    833: {
        name: "An Giang",
        region: 30
    },
    834: {
        name: "Bà Rịa - Vũng Tàu",
        region: 30
    },
    835: {
        name: "Bắc Kạn",
        region: 10
    },
    836: {
        name: "Bạc Liêu",
        region: 30
    },
    837: {
        name: "Bắc Ninh",
        region: 10
    },
    838: {
        name: "Bến Tre",
        region: 30
    },
    839: {
        name: "Bình Dương",
        region: 30
    },
    840: {
        name: "Bình Phước",
        region: 30
    },
    841: {
        name: "Cà Mau",
        region: 30
    },
    842: {
        name: "Cao Bằng",
        region: 10
    },
    843: {
        name: "Đắk Lắk",
        region: 20
    },
    844: {
        name: "Đắk Nông",
        region: 20
    },
    845: {
        name: "Điện Biên",
        region: 10
    },
    846: {
        name: "Đồng Tháp",
        region: 30
    },
    847: {
        name: "Gia Lai",
        region: 20
    },
    848: {
        name: "Hà Tĩnh",
        region: 20
    },
    849: {
        name: "Hậu Giang",
        region: 30
    },
    850: {
        name: "Hòa Bình",
        region: 10
    },
    851: {
        name: "Kiên Giang",
        region: 30
    },
    852: {
        name: "Kon Tum",
        region: 20
    },
    853: {
        name: "Lai Châu",
        region: 10
    },
    854: {
        name: "Lâm Đồng",
        region: 30
    },
    855: {
        name: "Long An",
        region: 30
    },
    856: {
        name: "Ninh Bình",
        region: 10
    },
    857: {
        name: "Ninh Thuận",
        region: 30
    },
    858: {
        name: "Phú Thọ",
        region: 10
    },
    859: {
        name: "Quảng Nam",
        region: 20
    },
    860: {
        name: "Quảng Ngãi",
        region: 20
    },
    861: {
        name: "Sóc Trăng",
        region: 30
    },
    862: {
        name: "Tây Ninh",
        region: 30
    },
    863: {
        name: "Thái Bình",
        region: 10
    },
    864: {
        name: "Thái Nguyên",
        region: 10
    },
    865: {
        name: "Thanh Hóa",
        region: 20
    },
    866: {
        name: "Thừa Thiên Huế",
        region: 20
    },
    867: {
        name: "Trà Vinh",
        region: 30
    },
    868: {
        name: "Vĩnh Long",
        region: 30
    },
    869: {
        name: "Phú Yên",
        region: 20
    },
}

const REGION = {
    10: "Miền Bắc",
    20: "Miền Trung",
    30: "Miền Nam",
}

const DVR_CONNECT_TYPE = {
    PUBLIC: 1,
    LOCAL: 0
}

const SERVER_TYPE = {
    PHYSICAL: 1,
    VIRTUAL: 2
}

const SERVER_STATUS = {
    OFFLINE: 0,
    ONLINE: 1
}

const DVR_STATUS = {
    INIT: 0,
    ONLINE: 1,
    INCORRECT_USER_PASS: -1,
    USERNAME_NOT_EXIST: -2,
    LOGIN_TIMEOUT: -3,
    REPEAT_LOGIN: -4,
    ACCOUNT_IS_LOCKED: -5,
    ACCOUNT_IS_BLACKLISTED: -6,
    INSUFFICIENT_RESOURCES: -7,
    CHILD_CONNECTION_FAILED: -8,
    MAIN_CONNECTION_FAILED: -9,
    MAX_CONNECTION_EXCEEDED: -10,
    ONLY_SUPPORT_3RD_PROTOCOL: -11,
    INCORRECT_USB_SHIELD: -12,
    NO_PERMISSION_IP: -13,
    ACCOUNT_IS_NOT_INIT: -18,
    OTHER_ERROR: -100,
    EXCEPTION_LOGIN_SDK: -101,
    LOGIN_HTTP_FAILED: -102,
    INACTIVE_DVR: -103
}

const DVR_STATES = {
    ONLINE: 1,
    OFFLINE: 0
}

const TRUCK_CAMERA_STATUS = {
    ONLINE: 1,
    OFFLINE: 0
}

const USER_ROLES = {
    ADMIN: 'ADMIN',
    USER: 'USER'
}

const STATION_STATUS_DEACTIVATED = -1
const STATION_STATUS = {
    INIT: 0,
    HAS_DVR_INFO: 1, // has SN in DVR
    HAS_ROUTE_CONFIG: 2,
    HAS_VIDEO: 3
}

const STATION_STATUS_TO_DESC = {
    0: 'init',
    1: 'has_dvr_info',
    2: 'has_route_config',
    3: 'has_video'
}

const STATION_TYPE = {
    LV: 0,
    NV: 1
}

const STATION_AREA_TYPE = {
    inbound_info: 1,
    inhouse_info: 2,
    outbound_info: 3
}

const ACTION_TYPE = {
    confirmTmpPickedPackageStatus: 'pick',
    confirmTmpPickedPackageStatusFromPO: 'pick',
    cfmImpPkgFrPONew: 'pick',
    cfmTmpPickedPkgByPKB2C: 'pick',
    confirmPackageHandover: 'pick',
    PrepaymentBill: 'pick',
    takeOutPackages2Bag: 'deliver',
    takeOutPackages2BagD4h: 'deliver',
    cfmImportD4h: 'deliver',
    cfmImport: 'deliver',
    putPackages2Bag: 'default',
    cfmTransit: 'deliver',
    cfmTransitD4h: 'default',
    cfmImportV4: 'deliver',
    verifyStationBag: 'deliver',
    finishVerifyBagSession: 'deliver',
    TransferToBothAcceptBill: 'deliver',
    TransferToReturnAcceptBill: 'return',
    TransferToDeliverAcceptBill: 'deliver',
    distributorCfmDeliver: 'deliver',
    assignDTeam: 'deliver',
    updateReturnedByCod: 'return',
    processReturn: 'deliver',
    saveRealImportStation: 'return',
    distributorCfmReturning: 'return',
    ReturnBill: 'return'
}

const ACTION_AREA_TYPE = {
    confirmTmpPickedPackageStatus: 1,
    confirmTmpPickedPackageStatusFromPO: 1,
    cfmImpPkgFrPONew: 1,
    cfmTmpPickedPkgByPKB2C: 1,
    confirmPackageHandover: 1,
    PrepaymentBill: 2,
    takeOutPackages2Bag: 2,
    takeOutPackages2BagD4h: 2,
    cfmImportD4h: 3,
    cfmImport: 1,
    putPackages2Bag: 2,
    cfmTransit: 3,
    cfmTransitD4h: 3,
    cfmImportV4: 1,
    verifyStationBag: 2,
    finishVerifyBagSession: 2,
    TransferToBothAcceptBill: 1,
    TransferToReturnAcceptBill: 1,
    TransferToDeliverAcceptBill: 1,
    distributorCfmDeliver: 2,
    assignDTeam: 2,
    updateReturnedByCod: 2,
    processReturn: 2,
    saveRealImportStation: 2,
    distributorCfmReturning: 2,
    ReturnBill: 2,
}

const ACTION_TYPE_TO_DISPLAY = {
    pick: 'Lấy',
    deliver: 'Giao',
    return: 'Trả',
    transit: 'Trung chuyển',
}

const USER_PERMISSION = {
    ADMIN: 'admin',
    SUBADMIN: 'subadmin',
    MOD: 'mod', // stand for moderator
    USER: 'user'
}

const ALLOWED_USER_IN_GROUP = {
    USER_MODULE_MANAGER: 5,  // trưởng module
    USER_ROLE_OPERATOR: 6,  // điều phối
    USER_ROLE_HUB: 19,  // NV Bưu cục
    USER_ROLE_BMR: 22,  // Ban mở rộng
    USER_ROLE_OPERATOR_MONEY: 24 // điều phối chốt hàng và tiền
}

const AUTH_BASE_URL = process.env.AUTH_BASE_URL || 'https://auth.giaohangtietkiem.vn'

const ENCRYPTED_PARAMS_FOR_FE = {
    KEY: "4z6C9EbGeKgNjRnTqVtYv2y5A7CaFcNf",
    IV: "bH1SiWTMuELhuGaqtk3Y1A=="
}

const RETRY_PKG_LOG_STATUS = {
    FAILED: -1,
    INIT: 0,
    SUCCESS: 1
}

const EFFECT_LOG_ACTIONS = {
    searchPkgOrder: "searchPkgOrder",
    watchVideo: "watchVideo",
    priorityDownloadVideo: "priorityDownloadVideo",
    liveStreamPlay: "liveStreamPlay",
    playBack: "playBack",
    downloadVideoPlayBack: "downloadVideoPlayBack",
    capturePhoto: "capturePhoto"
}

const JOB_VIDEO_MNG_STATUS = {
    INIT: 0,
    ASSIGNED: 1
}

const JOB_VIDEO_STATUS = {
    INIT: 0,
    DOWNLOAD_SUCCESS : 1,
    UPLOAD_SUCCESS : 2,
    PRIORITY_DOWNLOAD: 3,
    QUERY_ERROR: -1,
    DOWNLOAD_TIMEOUT: -2,
    DOWNLOAD_ERROR: -3,
    CONVERT_ERROR: -5,
    UPLOAD_ERROR: -6,
    CONCAT_ERROR: -7
}

const MAP_STATUS_TO_UPLOAD_DOWNLOAD = {}
MAP_STATUS_TO_UPLOAD_DOWNLOAD[JOB_VIDEO_STATUS.DOWNLOAD_SUCCESS] = 'download'
MAP_STATUS_TO_UPLOAD_DOWNLOAD[JOB_VIDEO_STATUS.QUERY_ERROR] = 'download'
MAP_STATUS_TO_UPLOAD_DOWNLOAD[JOB_VIDEO_STATUS.DOWNLOAD_TIMEOUT] = 'download'
MAP_STATUS_TO_UPLOAD_DOWNLOAD[JOB_VIDEO_STATUS.DOWNLOAD_ERROR] = 'download'

MAP_STATUS_TO_UPLOAD_DOWNLOAD[JOB_VIDEO_STATUS.UPLOAD_SUCCESS] = 'upload'
MAP_STATUS_TO_UPLOAD_DOWNLOAD[JOB_VIDEO_STATUS.CONVERT_ERROR] = 'upload'
MAP_STATUS_TO_UPLOAD_DOWNLOAD[JOB_VIDEO_STATUS.CONCAT_ERROR] = 'upload'
MAP_STATUS_TO_UPLOAD_DOWNLOAD[JOB_VIDEO_STATUS.UPLOAD_ERROR] = 'upload'

const TRUCK_CAMERA_POSITION = {
    TRUNK: 0,
    CABIN: 1,
}

const CHANNEL_TYPES = {
    FAVORITE: 1,
    OVERVIEW: 1,
    CAMERA_FOR_ACCOUNTANTS: 2,
}

const PROVINCE_ID = {
    Hanoi: 1,
    TPHoChiMinh: 126,
}

const MAXIMUM_FAVORITE_CHANNEL = {
    DEFAULT: 2,
    INTERREGIONAL: 5
}

const MAXIMUM_OVERVIEW_CHANNEL = {
    DEFAULT: 2,
    INTERREGIONAL: 5
}

const PLATFORM_EFFECT_LOG = {
    WEB: 1,
    APP_DESKTOP: 2,
    ANDROID: 3,
    IOS: 4
}

module.exports = {
    LARGE_STATION: "LARGE_STATION",
    LIST_ACTION: "LIST_ACTION",
    GET_VIDEO_MODE: "GET_VIDEO_MODE",
    ENABLE_WATCH_FULL_LOGS: "ENABLE_WATCH_FULL_LOGS",
    PKG_ORDER_MANIPULATION_DICT: "PKG_ORDER_MANIPULATION_DICT",
    IGNORE_USER_ID_LOG: "IGNORE_USER_ID_LOG",
    API_PAGE_LIMIT_DEFAULT: 100,
    API_PAGE_OFFSET_DEFAULT: 0,
    PAGING_STATION_LIMIT_DEFAULT: 20,
    PROVINCE,
    REGION,
    DVR_CONNECT_TYPE,
    SERVER_TYPE,
    SERVER_STATUS,
    DVR_STATUS,
    USER_ROLES,
    STATION_STATUS_DEACTIVATED,
    STATION_STATUS,
    DVR_STATES,
    STATION_TYPE,
    ACTION_TYPE,
    ACTION_TYPE_TO_DISPLAY,
    USER_PERMISSION,
    STATION_STATUS_TO_DESC,
    AUTH_BASE_URL,
    STATION_AREA_TYPE,
    ALLOWED_USER_IN_GROUP,
    ENCRYPTED_PARAMS_FOR_FE,
    RETRY_PKG_LOG_STATUS,
    ACTION_AREA_TYPE,
    EFFECT_LOG_ACTIONS,
    JOB_VIDEO_MNG_STATUS,
    JOB_VIDEO_STATUS,
    TRUCK_CAMERA_POSITION,
    MAP_STATUS_TO_UPLOAD_DOWNLOAD,
    CHANNEL_TYPES,
    PROVINCE_ID,
    MAXIMUM_FAVORITE_CHANNEL,
    MAXIMUM_OVERVIEW_CHANNEL,
    TRUCK_CAMERA_STATUS,
    PLATFORM_EFFECT_LOG
};
