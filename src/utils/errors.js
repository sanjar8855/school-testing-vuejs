const  ERROR_CODES = {
    '400' : 'Login yoki parol noto`g`ri',
    'INVALID_PASSWORD' : 'PAROL XATO',
    'auth': 'ILTIMOS TIZIMGA KIRING',
    'Network Error' : 'Internetda XATOLIK!'
}


export function errors(CODE){
    return ERROR_CODES[CODE] ? ERROR_CODES[CODE] : 'Nomalum xatolik'
}