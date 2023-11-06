
import AppBar from "../componenets/User/appBar/Index";
import FirstBanner from "../componenets/User/firstBanner/index";
import AchivementBanner from "../componenets/User/achivementsBanner/Index";
import ThirdBanner from "../componenets/User/thirdBanner/Index";
import FourthBanner from "../componenets/User/fourthBanner/Index";
import FifthBanner from "../componenets/User/fifthBanner/index"
import Footer from "../componenets/User/footer/Index"
import OfferBanner from "../componenets/User/offerBanner/index"

function Index(){
    return(
        <>
        <OfferBanner/>
        <AppBar/>
        <FirstBanner/>
        <AchivementBanner/>
        <ThirdBanner/>
        <FourthBanner/>
        <FifthBanner/>
        <Footer/>
        </>
    )
}
export default Index;