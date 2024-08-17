
document.addEventListener('DOMContentLoaded', function() {
    const qtyInput = document.getElementById('quantity');
    const qtyMinus = document.querySelector('.qty-minus');
    const qtyPlus = document.querySelector('.qty-plus');
    
    qtyMinus.addEventListener('click', function() {
        let currentValue = parseInt(qtyInput.value, 10);
        if (currentValue > 1) {
            qtyInput.value = currentValue - 1;
        }
    });

    qtyPlus.addEventListener('click', function() {
        let currentValue = parseInt(qtyInput.value, 10);
        qtyInput.value = currentValue + 1;
    });
});


//checkout page - different shipping address feature
const choice = document.querySelector('#choice');

if(choice){

    choice.addEventListener('change',()=>{
        if(choice.checked){
            document.querySelector('.js-shipping-details').classList.remove('invisible');
        }
        else{
            document.querySelector('.js-shipping-details').classList.add('invisible');
        }
    });
}


//cart page - to change the quantity of the certain cart item
const quantityModifier = Array.from(document.getElementsByClassName('qty-mod'));

if(quantityModifier && quantityModifier.length>0){
    quantityModifier.forEach(function(qtyMod){
        const minusButton =qtyMod.children[0]; 
        const plusButton = qtyMod.children[2];
        const input = qtyMod.children[1];
        minusButton.addEventListener('click',function(){
            if(input.value==1){
                input.setAttribute('disabled','true');
                minusButton.setAttribute('disabled','true');
            }
            else{
                if(input.hasAttribute('disabled'))
                    input.removeAttribute('disabled');
                if(plusButton.hasAttribute('disabled'))
                    plusButton.removeAttribute('disabled');
                input.value = parseInt(input.value)-1;
            }
        });
        plusButton.addEventListener('click',function(){
            if(input.value==10){
                input.setAttribute('disabled','true');
                plusButton.setAttribute('disabled','true');
            }
            else{
                if(input.hasAttribute('disabled'))
                    input.removeAttribute('disabled');
                if(minusButton.hasAttribute('disabled'))
                    minusButton.removeAttribute('disabled');
                input.value = parseInt(input.value)+1;
            }
        });
    });
}
