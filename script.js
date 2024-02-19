const getSet = document.getElementsByClassName('kbd');
let clickedSeats = 0;
let totalSet = 40;
let incrementSeat = 0;
let initialPrice = 0;
let grandPrice = 0;

for (let i = 0; i < getSet.length; i++) {
    const set = getSet[i];

    set.addEventListener('click', function() {
        if (clickedSeats < 5) {
            clickedSeats++;
            if (clickedSeats === 5) {
                alert('You have selected four seats.');
            } else {
                if (set === getSet[0]) {
                    alert('This is Driver seat');
                } else {
                    // Toggle background color of the clicked button
                    if (set.style.backgroundColor === 'green') {
                        set.style.backgroundColor = ''; // Remove background color
                    } else {
                        set.style.backgroundColor = 'green'; // Set background color
                        totalSet -= 1;
                        document.getElementById('Total-seat').innerText = totalSet;
                        incrementSeat += 1;
                        document.getElementById('set-seat').innerText = incrementSeat;

                        // Append elements
                        const append = document.getElementById('append-set');
                        const createDiv = document.createElement('div');
                        const PEle1 = document.createElement('p');
                        const PEle2 = document.createElement('p');
                        const PEle3 = document.createElement('p');
                        createDiv.appendChild(PEle1);
                        createDiv.appendChild(PEle2);
                        createDiv.appendChild(PEle3);
                        append.appendChild(createDiv);
                        initialPrice += 550;
                        PEle1.innerText = set.innerText;
                        PEle2.innerText = "Economic";
                        PEle3.innerText = 550;
                        createDiv.style.display = 'flex';
                        createDiv.style.justifyContent = 'space-between';
                        createDiv.style.alignItems = 'center';
                        document.getElementById('tp').innerText = initialPrice;
                        document.getElementById('gt').innerText = initialPrice;
                    }
                }
            }
        }
    });
}

// Apply coupon code
const couponInput = document.getElementById('coupon');
const couponButton = document.getElementById('coupon-click');
couponButton.addEventListener('click', function() {
    const couponValue = couponInput.value;
    if (couponValue === "NEW15") {
        grandPrice = initialPrice * (1 - 0.15); // Apply 15% discount
        document.getElementById('gt').innerText = grandPrice;
        const removeElement =document.getElementById('Input-box')
        removeElement.remove()
    }  else if (couponValue === "Couple 20") {
        grandPrice = initialPrice * (1 - 0.20); // Apply 20% discount
        document.getElementById('gt').innerText = grandPrice;
        const removeElement =document.getElementById('Input-box')
        removeElement.remove()
    } 
    else {
        // Reset grand price if coupon is invalid or empty
        grandPrice = initialPrice;
        document.getElementById('gt').innerText = grandPrice;
        alert('your coupon is not valid')
    }
});

// Jump next button
function nextButtonClicked(){
    const Divs = document.querySelector('divs')
    Divs.classList.add('hidden')
    const successful =document.querySelector('section')
    successful.classList.remove('hidden') 
}
