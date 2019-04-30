$(document).ready(function(){
    new Vue({
        el:'#app',
        data:{
            message:'Hello World!'
        }
    });

    var app2 = new Vue({
        el: '#app-2',
        data:{
            message: '页面加载于 ' + new Date().toLocaleString()
        }
    })
    
    // 控制顯示不顯示
    var app3 = new Vue({
        el: '#app-3',
        data: {
            seen: true
        }
    })

    var app4 = new Vue({
        el: '#app-4',
        data: {
            todos: [
                { text: '学习 JavaScript' },
                { text: '学习 Vue' },
                { text: '整个牛项目' }
            ]
        }
    })

    app4.todos.push({ text: '新项目' })

    var app5 = new Vue({
        el: '#app-5',
        data: {
            message: 'Hello Vue.js!'
        },
        methods: {
            reverseMessage: function () {
                this.message = this.message.split('').reverse().join('')
            }
        }
    })
})
