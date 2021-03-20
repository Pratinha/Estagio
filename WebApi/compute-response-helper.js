
module.exports = {
    computeResponse: function(resArr) {
        let weight = 0;

        for (let res of resArr) 
            weight = Math.max(weight, parseInt(res.machine.weight));
        
        return resArr.filter(res => parseInt(res.machine.weight) === weight)[0];
    }
}
