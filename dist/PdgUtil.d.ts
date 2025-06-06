export declare const PdgUtil: {
    base64: {
        encode: typeof import("./methods").base64Encode;
        decode: typeof import("./methods").base64Decode;
    };
    compare: {
        empty: typeof import("./methods").empty;
        notEmpty: typeof import("./methods").notEmpty;
        equal: typeof import("./methods").equal;
        contains: typeof import("./methods").contains;
        ifEmpty: typeof import("./methods").ifEmpty;
        ifNotEmpty: typeof import("./methods").ifNotEmpty;
        ifNull: typeof import("./methods").ifNull;
        ifNotNull: typeof import("./methods").ifNotNull;
        ifUndefined: typeof import("./methods").ifUndefined;
        ifNotUndefined: typeof import("./methods").ifNotUndefined;
        ifNullOrUndefined: typeof import("./methods").ifNullOrUndefined;
        ifNotNullAndUndefined: typeof import("./methods").ifNotNullAndUndefined;
        isCompanyNo: typeof import("./methods").isCompanyNo;
        isEmail: typeof import("./methods").isEmail;
        isMobile: typeof import("./methods").isMobileNo;
        isNumericOnlyText: typeof import("./methods").isNumericOnlyText;
        isPersonalNo: typeof import("./methods").isPersonalNo;
        isTel: typeof import("./methods").isTelNo;
        isUrl: typeof import("./methods").isUrl;
    };
    data: {
        lv: typeof import("./methods").lv;
        vl: typeof import("./methods").vl;
        copy: typeof import("./methods").copy;
    };
    date: {
        now: typeof import("./methods").now;
        nowJs: typeof import("./methods").nowJs;
        nowTime: typeof import("./methods").nowTime;
        beginTime: typeof import("./methods").beginTime;
        endTime: typeof import("./methods").endTime;
        format: typeof import("./methods").formatDate;
        extract: typeof import("./methods").extractDate;
        weekdayText: typeof import("./methods").weekdayText;
    };
    delay: {
        nextTick: typeof import("./methods").nextTick;
    };
    id: {
        uuid: typeof import("./methods").uuid;
    };
    korean: {
        isSingleCharacter: typeof import("./methods").isKoreanSingleCharacter;
        ro: typeof import("./methods").koreanRo;
        appendRo: typeof import("./methods").koreanAppendRo;
        rul: typeof import("./methods").koreanRul;
        appendRul: typeof import("./methods").koreanAppendRul;
        isContainsKorean: typeof import("./methods").isContainsKorean;
    };
    number: {
        format: typeof import("./methods").numberFormat;
    };
    url: {
        join: typeof import("./methods").urlJoin;
    };
    masking: {
        batch: typeof import("./methods").maskingBatch;
        name: typeof import("./methods").maskingName;
        email: typeof import("./methods").maskingEmail;
        tel: typeof import("./methods").maskingTel;
        businessNo: typeof import("./methods").maskingBusinessNo;
        personalNo: typeof import("./methods").maskingPersonalNo;
    };
    version: {
        toString: typeof import("./methods").versionString;
    };
    telNo: {
        autoDash: typeof import("./methods").telNoAutoDash;
    };
    businessNo: {
        autoDash: typeof import("./methods").businessNoAutoDash;
    };
    personalNo: {
        autoDash: typeof import("./methods").personalNoAutoDash;
    };
};
export default PdgUtil;
