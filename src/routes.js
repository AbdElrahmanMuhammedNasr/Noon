import Center from "@/Center/Center";
import ProductDetail from "@/ProductDetails/ProductDetail";
import Cart from "@/Cart/Cart";
import Home from "@/Home/Home";
import Login from "@/Login/Login";
import SignUp from "@/SignUp/SignUp";
import Profile from "@/profile/Profile";
export const routes =[
    {path:'/login', component: Login},
    {path:'/SignUp', component: SignUp},
    {path: '/home',component: Home, name:'Home'},
    {path: '/products',component: Center, name:'Products'},
    {path: '/productDetails',component:ProductDetail, name: 'ProductDetails'},
    {path: '/cart',component:Cart},
    {path: '/profile',component:Profile},
]
