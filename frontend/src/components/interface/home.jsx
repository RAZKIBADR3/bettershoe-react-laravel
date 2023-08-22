import React, { Fragment } from "react";
import Slide from "../../partials/slide";
import ItemsCard from "../shoes/ItemsCard";
import ShoeBg from "../shoes/ShoeBg";
import Spinner from "../../partials/Spinner";
import { useSelector } from "react-redux";

const Home = () => {
    const brands = useSelector(store => store.brands);
    const data = useSelector(store => store.shoes);

    return(
        <div className="home">
            <Slide />
            {(brands==null || data==null)
                ?   <Spinner />
                :   brands.map( brand =>
                    <Fragment key={brand.id}>
                        <ShoeBg bg={`bg/${brand.title}.jpg`}/>
                        <ItemsCard shoes={data} brand={brand.title} state='home'/>
                    </Fragment>
                )
            }
        </div>
    )
}

export default Home;