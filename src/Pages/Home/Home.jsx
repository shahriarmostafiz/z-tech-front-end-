import Banner from "../../Components/Banner/Banner";
import Brands from "../../Components/Brands/Brands";
import Categories from "../../Components/Categories/Categories";
import Featured from "../../Components/Featured Products/Featured";

const Home = () => {
    return (
        <div className="space-y-8">
            <Banner></Banner>
            <Categories></Categories>
            <Featured></Featured>
            <Brands></Brands>
        </div>
    );
};

export default Home;