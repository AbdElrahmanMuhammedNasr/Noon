import Center from "@/Center/Center";
import ProductDetail from "@/ProductDetails/ProductDetail";
import Cart from "@/Cart/Cart";
import Home from "@/Home/Home";
import Login from "@/Login/Login";
import SignUp from "@/SignUp/SignUp";
export const routes =[
    {path:'/login', component: Login},
    {path:'/SignUp', component: SignUp},
    {path: '/home',component: Home},
    {path: '/products',component: Center},
    {path: '/productDetails',component:ProductDetail},
    {path: '/cart',component:Cart}
]
