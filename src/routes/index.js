import  Home  from  '../views/home'
import   Wallet  from '../views/wallet'
import  Cinema from  '../views/cinema'
import  My  from  '../views/my'
export default  [
    {
        path:'/',
        exact:true,
        component:Home
    },
    {
        path:'/wallet',
        component:Wallet
    },
    {
        path:'/cinema',
        component:Cinema
    },
    {
        path:'/my',
        component:My
    },
]