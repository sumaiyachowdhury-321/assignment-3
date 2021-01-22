// https://github.com/sumaiyachowdhury-321/assignment-3
// Kilometer to Meter conversion function 
function kilometerToMeter(kilometerValue){
    //check if input is a negative number
    if(Math.sign(kilometerValue) == -1){
        console.log("Input positive number.");
        return;
    }
    var meter = kilometerValue * 1000;

    return meter;
}
//console.log(kilometerToMeter(3));

// Budget Calculator Function
function budgetCalculator(watch, mobile, laptop){
    //check if input is a negative number
    if(Math.sign(watch) == -1 || Math.sign(mobile) == -1 || Math.sign(laptop) == -1){
        console.log("Please input positive number.");
        return;
    }
    //single fixed prices
    var watchPrice = 50;
    var mobilePrice = 100;
    var laptopPrice = 500;

    // single electronix total price
    var watchTotalPrice = watch * watchPrice;
    var mobileTotalPrice = mobile * mobilePrice;
    var laptopTotalPrice  = laptop * laptopPrice;

    //total price added
    var total = watchTotalPrice + mobileTotalPrice + laptopTotalPrice;

    return total;
}
// console.log(budgetCalculator(2,2, 2));

// Hotel Cost Function
function hotelCost(days){
    //check if input is a negative number
    if(Math.sign(days) == -1){
        console.log("Please input positive number.");
        return;
    }

    //1-10 day cost
    var oneToTenDayCost = 100;
    //11-20 day cost
    var elevenToTwentyDayCost = 80;
    //21-unlimited day cost
    var twentyOneToNextDayCost = 50;

    var totalCost = 0;
    for(var day = 1; day <= days; day++){
        if(day > 0 && day <=10){
            totalCost += oneToTenDayCost;
        }else if(day >= 11 && day <=20){
            totalCost += elevenToTwentyDayCost;
        }else{
            totalCost += twentyOneToNextDayCost; 
        }
    }
    return totalCost;
}
// console.log(hotelCost(20));

// Mega friend Function
function megaFriend(friends){
    var stringLength = 0;
    var longestString;

    for (var i = 0; i < friends.length; i++) {
        if (friends[i].length > stringLength) {
            var lgstringLengthth = friends[i].length;
            longestString = friends[i];
        }
    }

    return longestString;
}
// var friends = ['Rahim', 'Karim', 'Joshim', 'hi', 'amitumise'];
// console.log(megaFriend(friends));