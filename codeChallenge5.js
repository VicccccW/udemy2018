var johnCal = {
    bills: [124, 48, 268, 180, 42],
    tipCal: function() {
        for(var i = 0; i < this.bills.length; i++) {
            if(this.bills[i] <50) {
                this.tips.push(this.bills[i] * 0.2);
                this.totalPaid.push(this.bills[i] * 1.2);
            } else if (this.bills[i] >= 50 && this.bills[i] <= 200) {
                this.tips.push(this.bills[i] * 0.15);
                this.totalPaid.push(this.bills[i] * 1.15);
            } else {
                this.tips.push(this.bills[i] * 0.1);
                this.totalPaid.push(this.bills[i] * 1.1);
            }
        }
    },
    tips: [],
    totalPaid: []
}