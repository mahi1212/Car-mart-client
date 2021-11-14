import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import ShowReview from '../ShowReview/ShowReview';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Products></Products>
            <ShowReview></ShowReview>
            <Footer></Footer>
        </div>
    );
};

export default Home;