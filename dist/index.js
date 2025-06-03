'use strict';Object.defineProperty(exports,'__esModule',{value:true});var dayjs=require('dayjs'),uuid$1=require('uuid');/********************************************************************************************************************
 * base64 인코딩 함수
 * @param data 인코딩할 데이터
 * @returns base64 인코딩된 데이터
 * ******************************************************************************************************************/
function base64Encode(data) {
    return Buffer.from(data, 'utf8').toString('base64');
}/********************************************************************************************************************
 * base64 디코딩 함수
 * @param encData 디코딩할 데이터
 * @returns base64 디코딩된 데이터
 * ******************************************************************************************************************/
function base64Decode(encData) {
    return Buffer.from(encData, 'base64').toString('utf8');
}/********************************************************************************************************************
 * 사업자 등록번호에 하이픈 추가하는 함수
 * @param businessNo 사업자등록번호
 * @param allowCharacters 허용할 문자들 (기본값: '*')
 * @returns 하이픈이 추가된 사업자등록번호
 * ******************************************************************************************************************/
function businessNoAutoDash(businessNo, allowCharacters) {
    if (allowCharacters === void 0) { allowCharacters = '*'; }
    var str = businessNo.replace(new RegExp("[^0-9".concat(allowCharacters, "]"), 'g'), '');
    var values = [str.slice(0, 3)];
    if (str.length > 3)
        values.push(str.slice(3, 5));
    if (str.length > 5)
        values.push(str.slice(5));
    return values.join('-');
}/********************************************************************************************************************
 * 값이 비어있는지 확인하는 함수
 * - Array 값이 비어있거나, Object 값이 비어있거나, 문자열이 비어있거나, null 또는 undefined 인 경우 true 반환
 * @param v 확인할 값
 * @returns 값이 비어있는지 여부
 * ******************************************************************************************************************/
function empty(v) {
    var result = false;
    if (v == null) {
        result = true;
    }
    else if (typeof v === 'string') {
        result = v === '';
    }
    else if (typeof v === 'object') {
        if (Array.isArray(v)) {
            result = v.length === 0;
        }
        else if (!(v instanceof Date)) {
            result = Object.entries(v).length === 0;
        }
    }
    return result;
}/********************************************************************************************************************
 * 값이 비어있지 않은지 확인합니다.
 * - Array 값이 비어있지 않거나, Object 값이 비어있지 않거나, 문자열이 비어있지 않거나, null 또는 undefined 가 아닌 경우 true 반환
 * @param v 확인할 값
 * @returns 값이 비어있는지 여부
 * ******************************************************************************************************************/
function notEmpty(v) {
    return !empty(v);
}/********************************************************************************************************************
 * 두 값이 동일한지 확인하는 함수
 * @param v1 비교할 첫 번째 값
 * @param v2 비교할 두 번째 값
 * @returns 두 값이 동일한지 여부
 * ******************************************************************************************************************/
function equal(v1, v2) {
    if (v1 === v2)
        return true;
    if (typeof v1 !== typeof v2)
        return false;
    if (v1 == null || v2 == null)
        return false;
    if (typeof v1 === 'object' && typeof v2 === 'object') {
        return JSON.stringify(v1) === JSON.stringify(v2);
    }
    else {
        return v1 === v2;
    }
}/********************************************************************************************************************
 * 배열에 특정 값이 포함되어 있는지 여부를 반환하는 함수
 * @param list 확인할 배열 또는 문자열
 * @param value 확인할 값
 * @returns 포함 여부
 * ******************************************************************************************************************/
function contains(list, value) {
    var found = false;
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var v = list_1[_i];
        if (v === value) {
            found = true;
            break;
        }
    }
    return found;
}/********************************************************************************************************************
 * 값이 비어있는 경우 대체 값을 반환하는 함수
 * @param v 확인할 값
 * @param v2 대체 값
 * @returns 최종 값
 * ******************************************************************************************************************/
function ifEmpty(v, v2) {
    return empty(v) ? v2 : v;
}/********************************************************************************************************************
 * 값이 비어있지 않은 경우 대체 값을 반환하는 함수
 * @param v 확인할 값
 * @param v2 대체 값
 * @returns 최종 값
 * ******************************************************************************************************************/
function ifNotEmpty(v, v2) {
    return notEmpty(v) ? v2 : v;
}/********************************************************************************************************************
 * 값이 null 인 경우 대체 값을 반환하는 함수
 * @param v 확인할 값
 * @param v2 대체 값
 * @returns 최종 값
 * ******************************************************************************************************************/
function ifNull(v, v2) {
    return v === null ? v2 : v;
}/********************************************************************************************************************
 * 값이 null 아 아닌 경우 대체 값을 반환하는 함수
 * @param v 확인할 값
 * @param v2 대체 값
 * @returns 최종 값
 * ******************************************************************************************************************/
function ifNotNull(v, v2) {
    return v !== null ? v2 : v;
}/********************************************************************************************************************
 * 값이 undefined 인 경우 대체 값을 반환하는 함수
 * @param v 확인할 값
 * @param v2 대체 값
 * @returns 최종 값
 * ******************************************************************************************************************/
function ifUndefined(v, v2) {
    return v === undefined ? v2 : v;
}/********************************************************************************************************************
 * 값이 undefined 이 아닌 경우 대체 값을 반환하는 함수
 * @param v 확인할 값
 * @param v2 대체 값
 * @returns 최종 값
 * ******************************************************************************************************************/
function ifNotUndefined(v, v2) {
    return v !== undefined ? v2 : v;
}/********************************************************************************************************************
 * 값이 null 또는 undefined 인 경우 대체 값을 반환하는 함수
 * @param v 확인할 값
 * @param v2 대체 값
 * @returns 최종 값
 * ******************************************************************************************************************/
function ifNullOrUndefined(v, v2) {
    return v === null || v === undefined ? v2 : v;
}/********************************************************************************************************************
 * 값이 null 과 undefined 가 아닌 경우 대체 값을 반환하는 함수
 * @param v 확인할 값
 * @param v2 대체 값
 * @returns 최종 값
 * ******************************************************************************************************************/
function ifNotNullAndUndefined(v, v2) {
    return v != null ? v2 : v;
}/********************************************************************************************************************
 * 사업자번호 형식인지 확인하는 함수
 * @param v 확인할 값
 * @returns 사업자번호 형식이면 true, 그렇지 않으면 false 반환
 * ******************************************************************************************************************/
function isCompanyNo(v) {
    return /(([0-9]{3})([0-9]{2})([0-9]{5}))|(([0-9]{3})-([0-9]{2})-([0-9]{5}))/.test(v);
}/********************************************************************************************************************
 * 이메일 형식인지 확인하는 함수
 * @param v 확인할 값
 * @returns 이메일 형식이면 true, 그렇지 않으면 false 반환
 * ******************************************************************************************************************/
function isEmail(v) {
    return new RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/, 'g').test(v);
}/********************************************************************************************************************
 * 휴대전화번호 형식인지 확인하는 함수
 * @param v 확인할 값
 * @returns 휴대전화번호 형식이면 true, 그렇지 않으면 false 반환
 * ******************************************************************************************************************/
function isMobileNo(v) {
    return /(^(01(?:0|1|[6-9]))([0-9]{3,4})([0-9]{4,4})$)|(^(01(?:0|1|[6-9]))-([0-9]{3,4})-([0-9]{4,4})$)|(^\+(?:[-]?[0-9]){8,}$)/.test(v);
}/********************************************************************************************************************
 * 문자열에 숫자만 포함되어 있는지 확인하는 함수
 * @param v 확인할 값
 * @returns 숫자만 포함되어 있으면 true, 그렇지 않으면 false 반환
 * ******************************************************************************************************************/
function isNumericOnlyText(v) {
    return !/[^0-9]/gim.test(v);
}/********************************************************************************************************************
 * 주민등록번호 형식인지 확인하는 함수
 * @param v 확인할 값
 * @returns 주민등록번호 형식이면 true, 그렇지 않으면 false 반환
 * ******************************************************************************************************************/
function isPersonalNo(v) {
    return /(([0-9]{6})([0-9]{7}))|(([0-9]{6})-([0-9]{7}))/.test(v);
}/********************************************************************************************************************
 * 전화번호 형식인지 확인하는 함수
 * @param v 확인할 값
 * @returns 전화번호 형식이면 true, 그렇지 않으면 false 반환
 * ******************************************************************************************************************/
function isTelNo(v) {
    return /(^([0-9]{2,3})([0-9]{3,4})([0-9]{4})$)|(^([0-9]{2,3})-([0-9]{3,4})-([0-9]{4})$)|(^([0-9]{4})-([0-9]{4})$)|(^\+(?:[-]?[0-9]){8,}$)/.test(v);
}/********************************************************************************************************************
 * URL 형식인지 확인하는 함수
 * @param v 확인할 값
 * @param allowInnerUrl 내부 URL을 허용할지 여부
 * @returns URL 형식이면 true, 그렇지 않으면 false 반환
 * ******************************************************************************************************************/
function isUrl(v, allowInnerUrl) {
    if (allowInnerUrl) {
        return /^((?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)|\/)+[\w\-._~:/?#[\]@!$&'%()*+,;=.]+$/.test(v);
    }
    else {
        return /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'%()*+,;=.]+$/.test(v);
    }
}/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};/********************************************************************************************************************
 * {label, value, ...other} 객체 생성하여 반환하는 함수
 * @param label - label
 * @param value - value
 * @param other - 기타 속성
 * @returns 생성된 객체
 * ******************************************************************************************************************/
function lv(label, value, other) {
    return __assign({ label: label, value: value }, other);
}/********************************************************************************************************************
 * {value, label, ...other} 객체 생성하여 반환하는 함수
 * @param value - value
 * @param label - label
 * @param other - 기타 속성
 * @returns 생성된 객체
 * ******************************************************************************************************************/
function vl(value, label, other) {
    return __assign({ value: value, label: label }, other);
}/********************************************************************************************************************
 * 객체 복사
 * @param value 복사할 객체
 * @returns 복사된 객체
 * ******************************************************************************************************************/
function copy(value) {
    return JSON.parse(JSON.stringify(value));
}/********************************************************************************************************************
 * 현재 시간의 Date 객체를 반환하는 함수
 * ******************************************************************************************************************/
function now() {
    return new Date();
}/********************************************************************************************************************
 * 현재 시간의 Dayjs 객체를 반환하는 함수
 * ******************************************************************************************************************/
function nowJs() {
    return dayjs();
}/********************************************************************************************************************
 * 현재 시간의 Time 값을 반환하는 함수
 * ******************************************************************************************************************/
function nowTime() {
    return new Date().getTime();
}/********************************************************************************************************************
 * 날짜의 시간을 00:00:00.0 으로 변경해서 반환
 * ******************************************************************************************************************/
function beginTime(dt, format) {
    if (dt === undefined || dt instanceof Date || typeof dt === 'string') {
        return dayjs(dt, format).startOf('day').toDate();
    }
    else {
        return dayjs(dt).startOf('day');
    }
}/********************************************************************************************************************
 * 날짜의 시간을 23:59:59.999 로 변경해서 반환
 * ******************************************************************************************************************/
function endTime(dt, format) {
    if (dt === undefined || dt instanceof Date || typeof dt === 'string') {
        return dayjs(dt, format).endOf('day').toDate();
    }
    else {
        return dayjs(dt).endOf('day');
    }
}/********************************************************************************************************************
 * 날짜를 주어진 형식의 텍스트로 변환
 * - 기본 형식 : YYYY-MM-DD HH:mm:ss
 * @param date 날짜
 * @param format 형식
 * @returns 형식화된 날짜
 * ******************************************************************************************************************/
function formatDate(date, format) {
    if (date === null) {
        return null;
    }
    else if (date === undefined) {
        return undefined;
    }
    else {
        return dayjs(date).format(format === undefined ? 'YYYY-MM-DD HH:mm:ss' : format);
    }
}/********************************************************************************************************************
 * 날짜를 분해하여 반환
 * - date, year, month, day, weekDay, hour, minute, second, millisecond
 * @param dt 날짜
 * @returns 분해된 날짜
 * ******************************************************************************************************************/
function extractDate(dt) {
    var date = dt ? dayjs(dt) : dayjs();
    return {
        date: date.toDate(),
        year: date.year(),
        month: date.month() + 1,
        day: date.date(),
        weekDay: date.day(),
        hour: date.hour(),
        minute: date.minute(),
        second: date.second(),
        millisecond: date.millisecond(),
    };
}/********************************************************************************************************************
 * week day 에 해당하는 요일을 한글로 반환하는 함수
 * ******************************************************************************************************************/
function weekdayText(weekDay) {
    switch (weekDay) {
        case 0:
            return '일';
        case 1:
            return '월';
        case 2:
            return '화';
        case 3:
            return '수';
        case 4:
            return '목';
        case 5:
            return '금';
        case 6:
            return '토';
        default:
            return '';
    }
}/********************************************************************************************************************
 * 다음 틱에서 콜백을 실행합니다.
 * @param callback - 콜백입니다.
 * @param delay - 지연(milliseconds) 시간입니다. (기본값 : 1)
 * ******************************************************************************************************************/
function nextTick(callback, delay) {
    return setTimeout(callback, delay === undefined ? 1 : delay);
}/********************************************************************************************************************
 * UUID 생성하는 함수
 * @param removeDash 하이픈 제거 여부
 * @returns UUID
 * ******************************************************************************************************************/
function uuid(removeDash) {
    var id = uuid$1.v4();
    if (removeDash) {
        return id.replace(/-/g, '');
    }
    else {
        return id;
    }
}function isKoreanSingleCharacter(text) {
    var strGa = 44032; // 가
    var strHih = 55203; // 힣
    var lastStrCode = text.charCodeAt(text.length - 1);
    if (lastStrCode < strGa || lastStrCode > strHih) {
        return false; //한글이 아닐 경우 false 반환
    }
    return (lastStrCode - strGa) % 28 == 0;
}/********************************************************************************************************************
 * 주어진 한글의 로/으로 조사를 반환하는 함수입니다.
 * @param text 문자열
 * @returns 변환된 문자열
 * ******************************************************************************************************************/
function koreanRo(text) {
    if (empty(text))
        return '';
    return isKoreanSingleCharacter(text) ? '로' : '으로';
}/********************************************************************************************************************
 * 주어진 한글의 로/으로 조사를 추가하는 함수입니다.
 * @param text 문자열
 * @param addSpace 공백을 추가할지 여부
 * @returns 변환된 문자열
 * ******************************************************************************************************************/
function koreanAppendRo(text, addSpace) {
    if (empty(text))
        return '';
    return "".concat(text).concat(addSpace ? ' ' : '').concat(isKoreanSingleCharacter(text) ? '로' : '으로');
}/********************************************************************************************************************
 * 주어진 한글의 를/을 조사를 반환하는 함수입니다.
 * @param text 문자열
 * @returns 변환된 문자열
 * ******************************************************************************************************************/
function koreanRul(text) {
    if (empty(text))
        return '';
    return isKoreanSingleCharacter(text) ? '를' : '을';
}/********************************************************************************************************************
 * 주어진 한글의 를/을 조사를 추가하는 함수입니다.
 * @param text 문자열
 * @param addSpace 공백을 추가할지 여부
 * @returns 변환된 문자열
 * ******************************************************************************************************************/
function koreanAppendRul(text, addSpace) {
    if (empty(text))
        return '';
    return "".concat(text).concat(addSpace ? ' ' : '').concat(isKoreanSingleCharacter(text) ? '를' : '을');
}/********************************************************************************************************************
 * 한글이 포함되어 있는지 확인하는 함수
 * ******************************************************************************************************************/
function isContainsKorean(text) {
    var korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    return korean.test(text);
}/********************************************************************************************************************
 * 이름 마스킹
 * ******************************************************************************************************************/
function maskingName(name) {
    var newName = name;
    if (notEmpty(name)) {
        if (name.length === 1) {
            newName = '*';
        }
        else if (name.length === 2) {
            newName = "".concat(name[0], "*");
        }
        else {
            newName = "".concat(name[0]).concat('*'.repeat(name.length - 2)).concat(name[name.length - 1]);
        }
    }
    return newName;
}/********************************************************************************************************************
 * 이메일 마스킹
 * ******************************************************************************************************************/
function maskingEmail(email) {
    var newEmail = email;
    if (notEmpty(email)) {
        var emails = email.split('@');
        var emailMaskingLength = Math.ceil(emails[0].length / 2);
        emails[0] = "".concat(emails[0].substr(0, emails[0].length - emailMaskingLength)).concat('*'.repeat(emailMaskingLength));
        newEmail = emails.join('@');
    }
    return newEmail;
}/********************************************************************************************************************
 * 전화번호에 자동으로 하이픈 추가하는 함수
 * @param v 전화번호
 * @param allowCharacters 허용할 문자들 (기본값: '*')
 * @returns 하이픈 추가된 전화번호
 * ******************************************************************************************************************/
function telNoAutoDash(v, allowCharacters) {
    if (allowCharacters === void 0) { allowCharacters = '*'; }
    if (v === undefined)
        return undefined;
    if (v === null)
        return null;
    var str = v.replace(new RegExp("[^0-9".concat(allowCharacters, "]"), 'g'), '');
    var isLastDash = v.substring(v.length - 1, v.length) === '-';
    if (str.substring(0, 1) !== '0' && !['15', '16', '18'].includes(str.substring(0, 2))) {
        return str;
    }
    var tmp = '';
    var preLen;
    switch (str.substring(0, 2)) {
        case '02':
            preLen = 2;
            break;
        case '15':
        case '16':
        case '18':
            preLen = 4;
            break;
        default:
            preLen = 3;
    }
    if (['15', '16', '18'].includes(str.substring(0, 2))) {
        if (str.length <= preLen) {
            tmp = str;
        }
        else if (str.length <= preLen + 4) {
            tmp += str.substring(0, preLen);
            tmp += '-';
            tmp += str.substring(preLen);
        }
        else {
            tmp = str;
        }
    }
    else if (str.length <= preLen) {
        tmp = str;
    }
    else if (str.length <= preLen + 3) {
        tmp += str.substring(0, preLen);
        tmp += '-';
        tmp += str.substring(preLen);
    }
    else if (str.length <= preLen + 7) {
        tmp += str.substring(0, preLen);
        tmp += '-';
        tmp += str.substring(preLen, preLen + 3);
        tmp += '-';
        tmp += str.substring(preLen + 3);
    }
    else if (str.length <= preLen + 8) {
        tmp += str.substring(0, preLen);
        tmp += '-';
        tmp += str.substring(preLen, preLen + 4);
        tmp += '-';
        tmp += str.substring(preLen + 4);
    }
    else {
        tmp = str;
    }
    if (isLastDash) {
        if (str.length === preLen) {
            tmp += '-';
        }
    }
    return tmp;
}/********************************************************************************************************************
 * 전화번호 마스킹
 * ******************************************************************************************************************/
function maskingTel(tel) {
    var newTel = tel;
    if (notEmpty(tel)) {
        var authDash = tel.includes('-');
        var mobileNums = telNoAutoDash(tel).split('-');
        switch (mobileNums.length) {
            case 1:
                mobileNums[0] = "".concat(mobileNums[0].substring(0, 3)).concat('*'.repeat(mobileNums[0].length - 3));
                break;
            default:
                mobileNums[1] = '*'.repeat(mobileNums[1].length);
                break;
        }
        newTel = mobileNums.join('');
        if (authDash) {
            newTel = telNoAutoDash(newTel);
        }
    }
    return newTel;
}/********************************************************************************************************************
 * 사업자등록번호 마스킹
 * ******************************************************************************************************************/
function maskingBusinessNo(businessNo) {
    var newCompanyNo = businessNo;
    if (notEmpty(businessNo)) {
        var autoDash = businessNo.includes('-');
        var newCompanyNos = businessNoAutoDash(businessNo).split('-');
        if (businessNo.length > 2) {
            newCompanyNos[2] = '*'.repeat(newCompanyNos[2].length);
        }
        newCompanyNo = newCompanyNos.join('');
        if (autoDash) {
            newCompanyNo = businessNoAutoDash(newCompanyNo);
        }
    }
    return newCompanyNo;
}/********************************************************************************************************************
 * 주민등록번호에 하이픈 추가하는 함수
 * @param personalNo 주민등록번호
 * @param allowCharacters 허용할 문자들 (기본값: '*')
 * @returns 하이픈 추가된 주민등록번호
 * ******************************************************************************************************************/
function personalNoAutoDash(personalNo, allowCharacters) {
    if (allowCharacters === void 0) { allowCharacters = '*'; }
    var str = personalNo.replace(new RegExp("[^0-9".concat(allowCharacters, "]"), 'g'), '');
    var values = [str.slice(0, 6)];
    if (str.length > 6)
        values.push(str.slice(6));
    return values.join('-');
}/********************************************************************************************************************
 * 주민등록번호 마스킹
 * ******************************************************************************************************************/
function maskingPersonalNo(personalNo) {
    var newPersonalNo = personalNo;
    if (notEmpty(personalNo)) {
        var autoDash = personalNo.includes('-');
        var newPersonalNos = personalNoAutoDash(personalNo).split('-');
        if (personalNo.length > 1) {
            newPersonalNos[1] = '*'.repeat(newPersonalNos[1].length);
        }
        newPersonalNo = newPersonalNos.join('');
        if (autoDash) {
            newPersonalNo = personalNoAutoDash(newPersonalNo);
        }
    }
    return newPersonalNo;
}/********************************************************************************************************************
 * 일괄 마스킹
 * @param data 데이터
 * @param names 마스킹 처리 할 데이터 이름(key)
 * @returns 마스킹 처리된 데이터
 * ******************************************************************************************************************/
function maskingBatch(data, names) {
    var newData = __assign({}, data);
    var maskData = function (key, maskFunc) {
        var name = names[key];
        if (name) {
            if (Array.isArray(name)) {
                name.forEach(function (name) {
                    if (newData[name] && typeof newData[name] === 'string') {
                        newData[name] = maskFunc(newData[name]);
                    }
                });
            }
            else {
                if (newData[name] && typeof newData[name] === 'string') {
                    newData[name] = maskFunc(newData[name]);
                }
            }
        }
    };
    if (names.name)
        maskData('name', maskingName);
    if (names.email)
        maskData('email', maskingEmail);
    if (names.tel)
        maskData('tel', maskingTel);
    if (names.businessNo)
        maskData('businessNo', maskingBusinessNo);
    if (names.personalNo)
        maskData('personalNo', maskingPersonalNo);
    return newData;
}/********************************************************************************************************************
 * 숫자 또는 문자열로 주어진 숫자에 콤마 추가하는 함수
 * @param num - 숫자 또는 문자열
 * @returns 콤마 추가된 문자열
 * ******************************************************************************************************************/
function numberFormat(num) {
    var numValue = typeof num === 'number' ? num.toString() : num.replace(/^0+(?=\d)/, '');
    var isInteger = /^\d+$/.test(numValue);
    if (!isInteger && numValue.includes('.')) {
        var _a = numValue.split('.'), integerPart = _a[0], decimalPart = _a[1];
        var formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        if (decimalPart) {
            return "".concat(formattedIntegerPart, ".").concat(decimalPart.replace(/\.?0+$/, ''));
        }
        return formattedIntegerPart;
    }
    return numValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}/********************************************************************************************************************
 * URL을 조합해서 반환
 * @param parts URL 조각
 * ******************************************************************************************************************/
function urlJoin() {
    var parts = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        parts[_i] = arguments[_i];
    }
    return parts.reduce(function (acc, part) {
        if (acc === '') {
            return part;
        }
        else if (part.startsWith('?')) {
            return "".concat(acc).concat(part);
        }
        else if (acc.endsWith('/')) {
            return "".concat(acc).concat(part.startsWith('/') ? part.substring(1) : part);
        }
        else {
            return "".concat(acc).concat(part.startsWith('/') ? part : "/".concat(part));
        }
    });
}/********************************************************************************************************************
 * 버전을 비교할 수 있는 텍스트로 변경하는 함수
 * @param v 버전
 * @param vl 각 항목의 길이 (나머지는 0으로 채워짐) (v값이 1.2 일때, vl 값이 3=001.002, 4=0001.0002)
 * @param l 총 항목 수 (3=x.x.x, 5=x.x.x.x.x)
 * ******************************************************************************************************************/
function versionString(v, vl, l) {
    var va = v.toString().split('.');
    var vsa = [];
    for (var i = 0; i < l; i += 1) {
        if (va.length >= i + 1) {
            vsa.push(va[i].padStart(vl, '0'));
        }
        else {
            vsa.push(''.padStart(vl, '0'));
        }
    }
    return vsa.join('.');
}var base64 = {
    encode: base64Encode,
    decode: base64Decode,
};var compare = {
    empty: empty,
    notEmpty: notEmpty,
    equal: equal,
    contains: contains,
    ifEmpty: ifEmpty,
    ifNotEmpty: ifNotEmpty,
    ifNull: ifNull,
    ifNotNull: ifNotNull,
    ifUndefined: ifUndefined,
    ifNotUndefined: ifNotUndefined,
    ifNullOrUndefined: ifNullOrUndefined,
    ifNotNullAndUndefined: ifNotNullAndUndefined,
    isCompanyNo: isCompanyNo,
    isEmail: isEmail,
    isMobile: isMobileNo,
    isNumericOnlyText: isNumericOnlyText,
    isPersonalNo: isPersonalNo,
    isTel: isTelNo,
    isUrl: isUrl,
};var data = {
    lv: lv,
    vl: vl,
    copy: copy,
};var date = {
    now: now,
    nowJs: nowJs,
    nowTime: nowTime,
    beginTime: beginTime,
    endTime: endTime,
    format: formatDate,
    extract: extractDate,
    weekdayText: weekdayText,
};var delay = {
    nextTick: nextTick,
};var id = {
    uuid: uuid,
};var korean = {
    isSingleCharacter: isKoreanSingleCharacter,
    ro: koreanRo,
    appendRo: koreanAppendRo,
    rul: koreanRul,
    appendRul: koreanAppendRul,
    isContainsKorean: isContainsKorean,
};var number = {
    format: numberFormat,
};var telNo = {
    autoDash: telNoAutoDash,
};var url = {
    join: urlJoin,
};var businessNo = {
    autoDash: businessNoAutoDash,
};var personalNo = {
    autoDash: personalNoAutoDash,
};var masking = {
    batch: maskingBatch,
    name: maskingName,
    email: maskingEmail,
    tel: maskingTel,
    businessNo: maskingBusinessNo,
    personalNo: maskingPersonalNo,
};var version = {
    toString: versionString,
};var PdgUtil = {
    base64: base64,
    compare: compare,
    data: data,
    date: date,
    delay: delay,
    id: id,
    korean: korean,
    number: number,
    url: url,
    masking: masking,
    version: version,
    telNo: telNo,
    businessNo: businessNo,
    personalNo: personalNo,
};exports.PdgUtil=PdgUtil;exports.base64Decode=base64Decode;exports.base64Encode=base64Encode;exports.beginTime=beginTime;exports.businessNoAutoDash=businessNoAutoDash;exports.contains=contains;exports.copy=copy;exports.default=PdgUtil;exports.empty=empty;exports.endTime=endTime;exports.equal=equal;exports.extractDate=extractDate;exports.formatDate=formatDate;exports.ifEmpty=ifEmpty;exports.ifNotEmpty=ifNotEmpty;exports.ifNotNull=ifNotNull;exports.ifNotNullAndUndefined=ifNotNullAndUndefined;exports.ifNotUndefined=ifNotUndefined;exports.ifNull=ifNull;exports.ifNullOrUndefined=ifNullOrUndefined;exports.ifUndefined=ifUndefined;exports.isCompanyNo=isCompanyNo;exports.isContainsKorean=isContainsKorean;exports.isEmail=isEmail;exports.isKoreanSingleCharacter=isKoreanSingleCharacter;exports.isMobileNo=isMobileNo;exports.isNumericOnlyText=isNumericOnlyText;exports.isPersonalNo=isPersonalNo;exports.isTelNo=isTelNo;exports.isUrl=isUrl;exports.koreanAppendRo=koreanAppendRo;exports.koreanAppendRul=koreanAppendRul;exports.koreanRo=koreanRo;exports.koreanRul=koreanRul;exports.lv=lv;exports.maskingBatch=maskingBatch;exports.maskingBusinessNo=maskingBusinessNo;exports.maskingEmail=maskingEmail;exports.maskingName=maskingName;exports.maskingPersonalNo=maskingPersonalNo;exports.maskingTel=maskingTel;exports.nextTick=nextTick;exports.notEmpty=notEmpty;exports.now=now;exports.nowJs=nowJs;exports.nowTime=nowTime;exports.numberFormat=numberFormat;exports.personalNoAutoDash=personalNoAutoDash;exports.telNoAutoDash=telNoAutoDash;exports.urlJoin=urlJoin;exports.uuid=uuid;exports.versionString=versionString;exports.vl=vl;exports.weekdayText=weekdayText;