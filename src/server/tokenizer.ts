function tokenizer(path: string): string[] {
    const out: string[] = [];
    let buf = '';
    let inBracket = false;

    for (const ch of path) {
        if (ch == '['){
            if (buf) out.push(buf);
            buf = '';
            inBracket = true;
        } else if (ch == ']') {
            out.push(buf);
            buf = '';
            inBracket = false;
        } else if (ch == '.' && !inBracket){
            if (buf) out.push(buf);
            buf = '';
        } else if (ch == '"' || ch == "'") {
            continue;
        }else {
            buf += ch;
        }
    }
    if (buf) out.push(buf);
    return out;
}

export function get(ojb: any, path: string): string {
    let cur = ojb;
    for ( const key of tokenizer(path) ){
        if ( cur === null || typeof cur !== 'object') return undefined;
        cur = ( cur as Record<string, unknown>)[key];
    }
    return cur;

}