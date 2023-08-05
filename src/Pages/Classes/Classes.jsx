import ClassCard from "../../components/ClassCard/ClassCard";
import useAllClasses from "../../hooks/useAllClasses";
import {Helmet} from "react-helmet-async";
import {useNavigation} from "react-router-dom";
import Loader from "../Shared/Loader";
import {Fade} from "react-awesome-reveal";

const Classes = () => {
  const [classes] = useAllClasses();
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loader />;
  }

  const bgStyle = {
    backgroundImage: `url('https://img.freepik.com/free-photo/yoga-vrikshasana-pose-tropical-location_1163-3366.jpg?size=626&ext=jpg&ga=GA1.2.947883390.1663212112&semt=ais')`,
    backgroundPosition: "top",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundBlendMode: "multiply",
    backgroundColor: "#606060",
    marginTop: "60px",
  };
  return (
    <>
      <Helmet>
        <title>Core Power | All Classes</title>
      </Helmet>
      <section style={bgStyle}>
        <div className="px-4 mx-auto max-w-screen-xl text-left py-24 lg:py-56">
          <div className="text-center lg:text-left">
            {/*<Fade>*/}
            <h1
              className="mb-4 text-3xl font-bold text-white md:text-5xl lg:text-"
              style={{lineHeight: "1.8"}}
            >
              Tune your body <br />
              and soul with our yoga classses
            </h1>
            <p className="mb-8 text-lg font-semibold text-gray-300 lg:text-2xl">
              Find your peace into yoga that helps you heal your body and soul
            </p>
            {/*</Fade>*/}
          </div>
        </div>
      </section>
      <Fade cascade>
        {/*<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-container">*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-20 lg:px-8 lg:py-10">
          {classes?.map((singleClass) => (
            <ClassCard key={singleClass._id} singleClass={singleClass} />
          ))}
        </div>
      </Fade>
    </>
  );
};

export default Classes;
