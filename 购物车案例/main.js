const app = new Vue({
    el: '#app',
    data: {
        books:[
            {
                id:1,
                name:'《书1》',
                date:'2006-9',
                price:85.00,
                count:1
            },
            {
                id:2,
                name:'《书2》',
                date:'2004-9',
                price:90.00,
                count:1
            },
            {
                id:3,
                name:'《书3》',
                date:'2007-9',
                price:80.00,
                count:1
            },
            {
                id:4,
                name:'《书4》',
                date:'2056-9',
                price:100.00,
                count:1
            },
        ]
    },
    methods: {
        getFinalPrice(price){
            return "￥" +　price.toFixed(2)
        },
        increment(index){
            this.books[index].count++;
        },
        decrement(index){
            if (this.books[index].count <= 1) {
                this.books.splice(index,1)
            }else {
                this.books[index].count--;
            }
        },
        remove(index){
            this.books.splice(index,1)
        }
    },
    filters :{
        showPrice(price){
            return "￥" +　price.toFixed(2)
        }
    },
    computed:{//计算属性
        totalPrice(){
            // let totalPrice = 0;
            // for( let i = 0;i < this.books.length;i++){
            //     totalPrice += this.books[i].price * this.books[i].count;
            // }
            // return totalPrice;

            return this.books.reduce(function (preVlaue,book) {
                return preVlaue + book.price * book.count
            },0)
        }
    }
});