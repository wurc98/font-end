
export default ({ app, redirect,$axios }: any) => {
    app.router.beforeEach((to: any, from: any, next: Function) => {
        console.log(to.path)
        if(to.path!= "/login"){   //如果不加这个条件，重定向至/login页时，又会触发重定向，从而导致死循环溢出。
            redirect('/login')
        }
        next()
    })
}