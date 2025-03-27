import HeroSection from "./HeroSection";
import Product from '../pages/Product';
import BuyNow from "../../services/buy_now/BuyNow";

const Home = () => {
    return (
        <div>
            <HeroSection />
            <Product />
            <BuyNow />
        </div>
    );
}

export default Home;