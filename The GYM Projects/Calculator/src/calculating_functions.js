 export function deleter(){
        let temp = data;
        if(temp.length >=1) setData(temp.slice(0,-1));
        
    }

export function calculate(){
        let temp = data;
        let allCalc = temp.split(' ')
        console.log(allCalc)
        //Taking all the operators at once
        let operators = allCalc.filter(el => (['/','-','+','x'].includes(el)))
        //Aranging the operators to make sure the are aranged according to bodmas
        let myOperators = bodmas(operators)
        console.log(allCalc)
        for(let i = 0;i< operators.length;i++){
            let a = allCalc[allCalc.indexOf(operators[i]) - 1]
            let b = allCalc[allCalc.indexOf(operators[i]) + 1]
            let c = 0;
            allCalc[allCalc.indexOf(operators[i]) - 1] = ""
            allCalc.splice(allCalc.indexOf(operators[i]),2)
            switch(operators[i]){
                case('/'):
                    c = Number(a)/Number(b)
                    break;
                case('x'):
                    c = Number(a)*Number(b)
                    break;
                case('+'):
                    c = Number(a)+Number(b)
                    break;
                case('-'):
                    c = Number(a)-Number(b)
                    break;
            }
            allCalc[allCalc.indexOf("")] = c;
            console.log(allCalc)
        }
        setData(allCalc[0]);


    }
    export function clearFunc(){
        setData([])
    }
    export function bodmas(op){
        if(op.includes('/') && !op.includes('x')){
            let slash_len = op.filter(e => e !== "/").length
            let newOp = op.filter(e => e !== "/")
            let slashes = "/".repeat(slash_len);
            slashes = slashes.split('')
            return [...slashes,...newOp];
        }
        else if(op.includes('x') && !op.includes('/')){
            let prodx_len = op.filter(e => e !== "x").length
            let newOp = op.filter(e => e !== "x")
            let prodx = "x".repeat(prodx_len);
            prodx = prodx.split('')
            return [...prodx,...newOp];
        }
        else if(op.includes('x') && op.includes('/')){
            let slash_len = op.filter(e =>e === '/').length
            let newOp = op.filter(e => e !== "x" && e !== '/')
            let slashes = "/".repeat(slash_len);
            slashes = slashes.split('')
            console.log("These are slashes",slashes)
            let prodx_len = op.filter(e => e === "x").length
            let prodx = "x".repeat(prodx_len);
            prodx = prodx.split('')
            return [...prodx,...slashes,...newOp];
        }
        else return op
    }