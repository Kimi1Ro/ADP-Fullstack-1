function onBtnDemoClick(){
    const divResult = document.getElementById("divResult");
    try {
        const multiplier = parseInt(document.getElementById('txtMultiplier').value)
        const divisor = parseInt(document.getElementById('txtDivisor').value)
        performDivide(multiplier, divisor)
    } catch (e){
        divResult.innerText = e.message
    } finally {
         document.getElementById("txtMultiplier").value = 0;
         document.getElementById("txtDivisor").value = 0;
    }
}

function performDivide(multiplier, divisor){
    try {
        let { quotient: q, remainder: r } = divide(multiplier, divisor);
        divResult.innerText = `quotient = ${q} and remainder = ${r}`;
    }
    catch (e){
        console.log(e)
        throw new Error(`Dividing ${multiplier} by ${divisor}, err : ${e.message}`)
    }
}

function divide(multiplier, divisor){
    if (divisor === 0){
        throw new Error('divisor cannot be 0')
    }
    const quotient = Math.round(multiplier/divisor)
    const remainder = multiplier % divisor
    return {quotient, remainder}
}
const btnDemo = document.getElementById('btnDemo');
btnDemo.addEventListener('click', onBtnDemoClick)