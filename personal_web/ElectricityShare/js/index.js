var app = new Vue({
    el: '#app',
    data: {
        totalElectricity: 0,//总电费
        electricityA:0,//A房间电表数
        electricityB:0,//B房间电表数
        electricityC:0,//C房间电表数
        electricityD:0,//D房间电表数
        daysA:0,//A房间用空调天数
        daysB:0,//A房间用空调天数
        daysC:0,//A房间用空调天数
        daysD:0,//A房间用空调天数
        airConditioningUnit:0.5,//空调多少钱一度
        // averagePublic:null,//每人每天公共电费平均
        spendingA:0,//A房间支出金额
        spendingB:0,//B房间支出金额
        spendingC:0,//C房间支出金额
        spendingD:0,//D房间支出金额

    },
    methods:{
        calculate:function () {
            this.airConditioningUnit=Number(this.airConditioningUnit)
            console.log(this.airConditioningUnit)
            let electricityAll=this.electricityA + this.electricityB + this.electricityC + this.electricityD;
            this.averagePublic= (this.totalElectricity - (this.electricityA + this.electricityB + this.electricityC + this.electricityD)*
                this.airConditioningUnit)/(this.daysA + this.daysB + this.daysC + this.daysD)
        }
    },
    computed:{
        averagePublic: function () {
            return ((this.totalElectricity - (this.electricityA + this.electricityB + this.electricityC + this.electricityD)*
                this.airConditioningUnit)/(this.daysA + this.daysB + this.daysC + this.daysD)).toFixed(2)
        },
        //A房间公共电费
        PublicAreaElectricityA:function(){
               return  this.daysA * this.averagePublic
        },
        //B房间公共电费
        PublicAreaElectricityB:function(){
            return  this.daysB * this.averagePublic
        },
        //C房间公共电费
        PublicAreaElectricityC:function(){
            return  this.daysC * this.averagePublic
        },
        //D房间公共电费
        PublicAreaElectricityD:function(){
            return  this.daysD * this.averagePublic
        },
        //A房间应支付
        spendingShouldA:function () {
            return (this.electricityA * 0.5 + this.PublicAreaElectricityA - this.spendingA).toFixed(2)
        },
        //B房间应支付
        spendingShouldB:function () {
            return (this.electricityB * 0.5 + this.PublicAreaElectricityB - this.spendingB).toFixed(2)
        },
        //C房间应支付
        spendingShouldC:function () {
            return (this.electricityC * 0.5 + this.PublicAreaElectricityC - this.spendingC).toFixed(2)
        },
        //D房间应支付
        spendingShouldD:function () {
            return (this.electricityD * 0.5 + this.PublicAreaElectricityD - this.spendingD).toFixed(2)
        },
    },
})