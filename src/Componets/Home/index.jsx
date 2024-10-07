import  {useState} from "react";
import data from "../../Data/productData";
import ProductData from "../../Data/productData";


export const Home = () => {
    
    const [openMenu, setOpenMenu] = useState(false);
    const [menuActive, setMenuActive] = useState(false);


    const toogleMenu = () =>{
        setOpenMenu(!openMenu);
        setMenuActive(!menuActive);

    }

    const handlerclick = () => {
        setOpenMenu(false);
        setMenuActive(false);
    }

    
    
}