// functions are here-------------------------------------
function inputValue(id){
    const inputField=document.getElementById(id);
    const inputString=inputField.value;
    const inputQuantity=parseInt(inputString);
    inputField.value='';
    return inputQuantity;
}
function elementValue(text){
    const elementField=document.getElementById(text);
    const elementString=elementField.innerText;
    const elementTotalPrice=parseInt(elementString);
    return elementTotalPrice;
}
function setValue(id,total){
    document.getElementById(id).innerText=total;
}
function totalPriceForAll(){
    const chocolateField=elementValue('chocolate');
    const roseField=elementValue('rose');
    const diaryField=elementValue('diary');
    const PriceTotal=chocolateField+roseField+diaryField;
    setValue('total',PriceTotal);
}
function validation(num){
if(isNaN(num) || num<0){
    return false;
}
else{
    return true;
}
}
// function done------------------------------

document.getElementById('kitkat-buy-btn').addEventListener('click',function(){
    const kitkatQuantity=inputValue('kitkat-quantity');
    const errorHandle=validation(kitkatQuantity);
    if(errorHandle==false){
        alert('Enter a positive number');
    }
    else{
        const kitkatTotalPrice=kitkatQuantity*200;
        const chocolateField=elementValue('chocolate');
        const chocolateTotalPrice=kitkatTotalPrice+chocolateField;
        setValue('chocolate',chocolateTotalPrice);
        totalPriceForAll();
    }
  
})
document.getElementById('rose-buy-btn').addEventListener('click',function(){
    const roseQuantity=inputValue('rose-quantity');
    const errorHandle=validation(roseQuantity);
    if(errorHandle==false){
        alert('Enter a positive number');
    }
    else{
        const roseTotalPrice=roseQuantity*100;
    const roseField=elementValue('rose');
    const roseFieldTotalPrice=roseTotalPrice+roseField;
    setValue('rose',roseFieldTotalPrice);
    totalPriceForAll();
    }
})
document.getElementById('diary-buy-btn').addEventListener('click',function(){
    const diaryQuantity=inputValue('diary-quantity');
    const errorHandle=validation(diaryQuantity);
    if(errorHandle==false){
        alert('Enter a positive number');
    }
   else{
    const diaryTotalPrice=diaryQuantity*100;
    const diaryField=elementValue('diary');
    const diaryFieldTotalPrice=diaryTotalPrice+diaryField;
    setValue('diary',diaryFieldTotalPrice);
    totalPriceForAll();
   }
})
document.getElementById('apply').addEventListener('click',function(){
    const allPriceTotal=elementValue('total');
    const promoField=document.getElementById('promo-code');
    if(promoField.value=='valen10'){
        promoField.value='';
        const discountPrice=allPriceTotal-(allPriceTotal*0.1);
        setValue('all-total',discountPrice);
        setValue('valentine-budget',discountPrice);
    }
    else{
        promoField.value='';
        setValue('all-total',allPriceTotal);
        setValue('valentine-budget',allPriceTotal);
        alert('Use the valid copon for discount');
    }
})