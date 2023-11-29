import OfferBanner from "../componenets/User/offerBanner/index";
import AppBAr from "../componenets/User/appBar/Index";
import CourseBannerOne from "../componenets/User/courseDetailBannerOne/index";
import CourseBannerTwo from "../componenets/User/courseDetailBannerTwo/index";
import CourseBannerThree from "../componenets/User/courseDetailBannerThree/index";
import CourseBannerFour from "../componenets/User/courseDetailBannerFour/index";
import CourseBannerFive from "../componenets/User/courseDetailBannerFive/index";
import CourseBannerSix from "../componenets/User/courseDetailBannerSix/index";
import Footer from "../componenets/User/footer/Index";
import { userApi } from "../constants/axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Spin } from "antd";

function CourseDetails() {
  const [courseData, setCourseData] = useState({});
  const [courseImages, setCourseImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  useEffect(() => {
    console.log("hoo");
    setLoading(true);
    getData(Number(params.id));
  }, []);

  console.log("cd", courseData);

  const getData = async (id: number) => {
    console.log("oooohhhaaa");

    await userApi.post("/getOneCourse", { id: id }).then((response) => {
      setCourseData(response.data.data.data);
      setCourseImages(response.data.data.images);
      setLoading(false);
      console.log("res", response.data.data);
    });
  };

  return (
    <>
      <Spin spinning={loading} >
      <OfferBanner />
      <AppBAr />
      <CourseBannerOne data={courseData} />
      <CourseBannerTwo data={courseData} />
      <CourseBannerThree data={courseData} />
      <CourseBannerFour data={courseData} />
      <CourseBannerFive data={courseData} />
      <CourseBannerSix images={courseImages} />
      <Footer />
      </Spin>
    </>
  );
}

export default CourseDetails;
