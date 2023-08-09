import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { ProductCard } from "../../components/ProductCard";
import { LeftMenu } from "../../components/LeftMenu";
import { Container, FrontAds, Main } from "./style";

export const MainPage = () => {
    return (
        <>
            <Navbar />
            <Main>
                <FrontAds />
                <Container>
                    <LeftMenu />
                    <ProductCard />
                </Container>
            </Main>
            <Footer />
        </>
    );
};
