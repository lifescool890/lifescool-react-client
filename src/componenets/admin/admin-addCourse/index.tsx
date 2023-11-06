import {
  Row,
  Typography,
  Form,
  Input,
  DatePicker,
  Upload,
  Button,
} from "antd";
import { useState, useEffect } from "react";
import "../admin-addCourse/style.scss";
import dayjs from "dayjs";
import adminApi from "../../../constants/axios";
import { adminImageApi } from "../../../constants/axios";
import ImgCrop from "antd-img-crop";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "antd/es/form/Form";

const { RangePicker } = DatePicker;
const { TextArea } = Input;
interface CourseData {
  courseName: string;
  courseDesc: string;
  courseOverView: string;
  coursePoints: string[];
  faq: string[];
  promoLink: string;
  tutorDesc: string;
  upComingEndingDate: string;
  upComingStartingDate: string;
}
const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const normFileTutor = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

function index() {
  const [form] = useForm();
  const [courseData, setCourseData] = useState<CourseData>();
  const [display, setDisplay] = useState("");
  const [disable,setDisable] = useState(false)

  const params = useParams();
  const navigate = useNavigate()
  useEffect(() => {
    if (params.display == "edit") {
      setDisplay("edit");
      getOneCourse(Number(params.id));
    } else if (params.display == "view") {
      setDisplay("view");
      getOneCourse(Number(params.id));
      setDisable(true)
    }else{
      setDisplay("new")
    }
  }, []);

  const getOneCourse = (id: number) => {
    adminApi.post("/getOneCourse", { id: id }).then((response) => {
      console.log("reeees", response);
      setCourseData(response.data.data);
      const dataArray = response.data.data;
      form.setFieldsValue(dataArray);
      console.log([
        dataArray.upComingStartingDate,
        dataArray.upComingEndingDate,
      ]);
      form.setFieldValue("upcomingDate", [
        dayjs(dataArray.upComingStartingDate),
        dayjs(dataArray.upComingEndingDate),
      ]);
      setFaq(dataArray.faq);
      setCoursePoints(dataArray.coursePoints);
    });
  };

  console.log("courseeee", courseData?.courseName);

  const pointsArr = [
    {
      type: "text",
      value: "",
    },
  ];
  const faqArr = [
    {
      type: "text",
      question: "",
      answer: "",
    },
  ];

  const [coursePoints, setCoursePoints] = useState(pointsArr);
  const [faq, setFaq] = useState(faqArr);

  const addPoints = () => {
    setCoursePoints((s: any) => {
      return [
        ...s,
        {
          type: "text",
          value: "",
        },
      ];
    });
  };
  const addFaq = () => {
    setFaq((s: any) => {
      return [
        ...s,
        {
          type: "text",
          question: "",
          answer: "",
        },
      ];
    });
  };

  const handlePoints = (e: any) => {
    e.preventDefault();

    const index = e.target.id;
    setCoursePoints((s) => {
      const newArr = s.slice();
      newArr[index].value = e.target.value;
      return newArr;
    });
  };
  const handleFaqQuestion = (e: any) => {
    e.preventDefault();

    const index = e.target.id;
    setFaq((s) => {
      const newArr = s.slice();
      newArr[index].question = e.target.value;
      return newArr;
    });
  };
  const handleFaqAnswers = (e: any) => {
    e.preventDefault();

    const index = e.target.id;
    setFaq((s) => {
      const newArr = s.slice();
      newArr[index].answer = e.target.value;
      return newArr;
    });
  };

  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [tutorImage, setTutorImage] = useState<UploadFile[]>();
  const [coverImage, setCoverImage] = useState<UploadFile[]>();

  const onChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    console.log("filelis");

    console.log(fileList);

    setFileList(newFileList);
  };
  const onTutorImageChange: UploadProps["onChange"] = ({
    fileList: newFileList,
  }) => {
    console.log("tut");

    console.log(tutorImage);

    setTutorImage(newFileList);
  };
  const onCoverImageChange: UploadProps["onChange"] = ({
    fileList: newFileList,
  }) => {
    console.log("tut");

    console.log(coverImage);

    setCoverImage(newFileList);
  };

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as RcFile);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
  const onFinish = (values: object) => {
    console.log(fileList, tutorImage);
    let tutorFormData: any = new FormData();
    let coverFormData: any = new FormData();
    let reviwFormData: any = new FormData();
    if (fileList) {
      console.log("fileList");

      console.log(fileList);

      const data = fileList;

      data.forEach((file) => {
        console.log("file");

        console.log(file);

        reviwFormData.append(`images`, file.originFileObj);
      });
    }
    if (tutorImage) {
      tutorFormData.append("tutorImage", tutorImage[0].originFileObj);
    }
    if (coverImage) {
      coverFormData.append("tutorImage", coverImage[0].originFileObj);
    }
    //Can directly call props here
    values = {
      ...values,
      coursePoints,
      faq,
    };

    if (display== "edit") {
      console.log(params);
      values = {
        ...values,
        id:params.id
      }
      adminApi.post("/updateCourse", values).then(() => {
      
      });
    } else if (display == "new") {
      adminApi.post("/addCourse", values).then(() => {
        adminImageApi.post("/addTutorImage", tutorFormData);
        adminImageApi.post("/addReviewImage", reviwFormData);
        adminImageApi.post("/addCoverImage", coverFormData);
      });
      
    }

    
  };
  const cancel=()=>{
    navigate("/admin/courses")
  }

  return (
    <Row className="formBackground">
      <Row style={{ width: "100%" }}>
        <Typography.Title level={1}>
          {display == "edit"
            ? "Edit Course"
            : display == "view"
            ? "Course"
            : "Add New Course"}
        </Typography.Title>
      </Row>
      <br />
      <Row>
        <Form
          className="form"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          form={form}
          disabled={disable}
        >
          <Form.Item label="Title" name="courseName" >
            <Input name="courseName" id="title"  />
          </Form.Item>
          <Form.Item label="Short description" name="courseDesc">
            <TextArea rows={4} name="courseDesc" />
          </Form.Item>
          <Form.Item label="Promo lnk" name="promoLink">
            <Input />
          </Form.Item>
          <Form.Item label="Upcoming Date" name="upcomingDate">
            <RangePicker />
          </Form.Item>
          <Form.Item
            label="Tutor's images"
            valuePropName="tutorsImage"
            getValueFromEvent={normFileTutor}
            name="tutorsImages"
          >
            <ImgCrop rotationSlider>
              <Upload
                listType="picture-card"
                fileList={tutorImage}
                onChange={onTutorImageChange}
                onPreview={onPreview}
                maxCount={1}
              >
                {fileList.length < 5 && "+ Upload"}
              </Upload>
            </ImgCrop>
          </Form.Item>
          <Form.Item
            label="Cover images"
            valuePropName="coverImage"
            getValueFromEvent={normFileTutor}
            name="coverImages"
          >
            <ImgCrop rotationSlider>
              <Upload
                listType="picture-card"
                fileList={coverImage}
                onChange={onCoverImageChange}
                onPreview={onPreview}
                maxCount={1}
              >
                {fileList.length < 5 && "+ Upload"}
              </Upload>
            </ImgCrop>
          </Form.Item>
          <Form.Item label="Tutor's description" name="tutorDesc">
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item label="Course Overview" name="courseOverView">
            <TextArea rows={8} />
          </Form.Item>
          <Form.Item label="what you learn" name="coursePoints">
            {coursePoints.map((item, i) => {
              return (
                <Input
                  onChange={handlePoints}
                  value={item.value}
                  id={String(i)}
                  type={item.type}
                  className="points"
                />
              );
            })}
            <Button onClick={addPoints}>+</Button>
          </Form.Item>
          <Form.Item
            label="Review images"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            name="reviewImages"
          >
            <ImgCrop rotationSlider>
              <Upload
                listType="picture-card"
                fileList={fileList}
                onChange={onChange}
                onPreview={onPreview}
              >
                {fileList.length < 5 && "+ Upload"}
              </Upload>
            </ImgCrop>
          </Form.Item>
          <Form.Item label="FAQ" name="faq">
            {faq.map((item, i) => {
              return (
                <>
                  <Input
                    onChange={handleFaqQuestion}
                    value={item.question}
                    id={String(i)}
                    type={item.type}
                    className="points"
                    placeholder={`Question: ${i + 1}`}
                  />
                  <TextArea
                    onChange={handleFaqAnswers}
                    value={item.answer}
                    id={String(i)}
                    rows={4}
                    className="faqAns"
                    placeholder={`Answer: ${i + 1}`}
                  />
                </>
              );
            })}
            <Button onClick={addFaq}>+</Button>
          </Form.Item>
          <Form.Item className="button-group">
            <Button className="cancel-button" onClick={cancel}>Cancel</Button>
            <Button htmlType="submit" className="submit-button">Add Course</Button>
          </Form.Item>
        </Form>
      </Row>
    </Row>
  );
}

export default index;
