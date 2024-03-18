export declare const PdgUtil: {
    compare: {
        empty: typeof import("./methods").empty;
        notEmpty: typeof import("./methods").notEmpty;
        equal: typeof import("./methods").equal;
        contains: typeof import("./methods").contains;
        ifNull: typeof import("./methods").ifNull;
        ifNotNull: typeof import("./methods").ifNotNull;
        ifUndefined: typeof import("./methods").ifUndefined;
        ifNotUndefined: typeof import("./methods").ifNotUndefined;
        ifNullOrUndefined: typeof import("./methods").ifNullOrUndefined;
        ifNotNullAndUndefined: typeof import("./methods").ifNotNullAndUndefined;
    };
    data: {
        lv: typeof import("./methods").lv;
        vl: typeof import("./methods").vl;
        copy: typeof import("./methods").copy;
    };
    date: {
        beginTime: typeof import("./methods").beginTime;
        endTime: typeof import("./methods").endTime;
        format: typeof import("./methods").formatDate;
        extract: typeof import("./methods").extractDate;
    };
    delay: {
        nextTick: typeof import("./methods").nextTick;
    };
    korean: {
        isSingleCharacter: typeof import("./methods").isKoreanSingleCharacter;
        ro: typeof import("./methods").koreanRo;
        appendRo: typeof import("./methods").koreanAppendRo;
        rul: typeof import("./methods").koreanRul;
        appendRul: typeof import("./methods").koreanAppendRul;
    };
    number: {
        format: typeof import("./methods").numberFormat;
    };
    tel: {
        autoDash: typeof import("./methods").telAutoDash;
    };
    url: {
        join: typeof import("./methods").urlJoin;
    };
    companyNo: {
        autoDash: typeof import("./methods").companyNoAutoDash;
    };
    personalNo: {
        autoDash: typeof import("./methods").personalNoAutoDash;
    };
    masking: {
        batch: typeof import("./methods").maskingBatch;
        name: typeof import("./methods").maskingName;
        email: typeof import("./methods").maskingEmail;
        tel: typeof import("./methods").maskingTel;
        companyNo: typeof import("./methods").maskingCompanyNo;
        personalNo: typeof import("./methods").maskingPersonalNo;
    };
    version: {
        toString: typeof import("./methods").versionString;
    };
    base64: {
        encode: typeof import("./methods").base64Encode;
        decode: typeof import("./methods").base64Decode;
    };
};
export default PdgUtil;
