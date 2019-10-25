const fs = require('fs');

const solution = [];

class Language{
    constructor(lang) {
        this.base = lang.length;
        this.dictionary = {};
        this.codex = {};
        lang
        .forEach(
            (letter,index) => { 
                this.dictionary[letter] = index.toString(lang.length);
                this.codex[index.toString(lang.length)] = letter;
            }
        );
    }
    getNum(alienNum){
        let num = [...alienNum].map( (digit) => { return this.dictionary[digit] } ).join('');
        return parseInt(num, this.base);
    }
    translate(num){
        return [...num].map( (digit) => { return this.codex[digit] } ).join('');
    }
}

function translate(alienNum, source, target, i){
    const sourceLang = new Language(source);
    const targetLang = new Language(target);
    
    let asEnglish = sourceLang.getNum(alienNum);
    let asTargetBase = asEnglish.toString(targetLang.base);
    let result = targetLang.translate(asTargetBase);

    solution.push(`Case #${i}: ${result}`);
}

try{
    const filePath = process.argv[2];
    const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');  
    for(let i=1;i<input.length;i++){
        let temp = input[i].split(/\s/);
        translate(temp[0],[...temp[1]],[...temp[2]], i);
    }

    try{
        const output = solution.join('\n');
        fs.writeFileSync(`${__dirname}/output.txt`, output);
    } catch(err){
        console.log(err);
    }

} catch(err){
    console.log(err);
}
