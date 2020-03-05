timehist = [0,1,2,4,8,8,8,7,7,6,6,6,5,4,4,3,3,4,4,4,3,3,2,2,2,2,1,1,2,3,2,1,1,1,1,1,1];
timedist = [];

timehist.forEach(function(el, ind) {
    for (let i = 0; i < el; ++i) {
        timedist.push(ind);
    }
});
