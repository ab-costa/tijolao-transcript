const code = "333 666 666 3 555 666 888 33 777 7777"

const codeBlocks = code.split(' ')

const word = []

for (const block of codeBlocks) {
        switch (block[0]) {
        case '1':
            break
        case '2':
            if(block.length === 1) {
                word.push('A')                
            } else if(block.length === 2){
                word.push('B')
            } else {
                word.push('C')
            }
            break    
        case '3':
            if(block.length === 1) {
                word.push('D')                
            } else if(block.length === 2){
                word.push('E')
            } else {
                word.push('F')
            }
            break    
        case '4':
            if(block.length === 1) {
                word.push('G')                
            } else if(block.length === 2){
                word.push('H')
            } else {
                word.push('I')
            }
            break    
        case '5':
            if(block.length === 1) {
                word.push('J')                
            } else if(block.length === 2){
                word.push('K')
            } else {
                word.push('L')
            }
            break    
        case '6':
            if(block.length === 1) {
                word.push('M')                
            } else if(block.length === 2){
                word.push('N')
            } else {
                word.push('O')
            }
            break    
        case '7':
            if(block.length === 1) {
                word.push('P')                
            } else if(block.length === 2){
                word.push('Q')
            } else if(block.length === 3) {
                word.push('R')
            } else {
                word.push('S')
            }
            break    
        case '8':
            if(block.length === 1) {
                word.push('T')                
            } else if(block.length === 2){
                word.push('U')
            } else {
                word.push('V')
            }
            break    
        case '9':
            if(block.length === 1) {
                word.push(' W')                
            } else if(block.length === 2){
                word.push('X')
            } else if(block.length === 3) {
                word.push('Y')
            } else {
                word.push('Z')
            }
            break    
    } 
}

console.log(word.join(''))