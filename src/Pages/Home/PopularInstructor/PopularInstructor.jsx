import InstructorView from "../../../components/InstructorView/InstructorView";
import SectionTitle from "../../../components/SectionTitle";
import useAllInstructors from "../../../hooks/useAllInstructors";

const Popularinstructor = () => {
  const [instructors] = useAllInstructors();
  return (
    <div>
      <SectionTitle
        heading={"Popular Instructor"}
        subHeading={"Our most favourite"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {instructors.slice(0, 6).map((teacher) => (
          <InstructorView key={teacher._id} teacher={teacher} />
        ))}
      </div>
    </div>
  );
};

export default Popularinstructor;
