export default function romanToInteger(s){
    const singleSymbol = [{
        symbols: 'M',
        value: 1000
    },
    {
        symbols: 'D',
        value: 500
    },
    {
        symbols: 'C',
        value: 100
    },
    {
        symbols: 'L',
        value: 50
    },
    {
        symbols: 'X',
        value: 10
    },
    {
        symbols: 'V',
        value: 5
    },
    {
        symbols: 'I',
        value: 1
    }
    ];
    const pairedSymbols = [{
        symbols: 'IV',
        value: 4
    },
    {
        symbols: 'IX',
        value: 9
    },
    {
        symbols: 'XL',
        value: 40
    },
    {
        symbols: 'XC',
        value: 90
    },
    {
        symbols: 'CD',
        value: 400
    },
    {
        symbols: 'CM',
        value: 900
    }
    ];
    let result=0;
    let i=0;
    while(i<s.length){
        const current = s[i];
        const next = i<s.length-1?s[i+1]:'';
        const pair = current+next;
        const currentPairedSymbols = pairedSymbols.find(item=>item.symbols === pair);
        if(currentPairedSymbols){        
            result+=currentPairedSymbols.value;
            i+=2;
        }else{
            const currentSingleSymbol = singleSymbol.find(item=>item.symbols === current);
            if(currentSingleSymbol){
                result+=currentSingleSymbol.value;
            }
            i++;
        }
    }
    return result;
}