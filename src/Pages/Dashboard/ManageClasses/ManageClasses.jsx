import React from "react";
import {useState} from "react";
import {Helmet} from "react-helmet-async";
import ClassList from "../../ClassList/ClassList";
import useAuth from "../../../hooks/useAuth";

const ManageClasses = () => {
  const {user, loading} = useAuth();
  const [classes, setClasses] = useState([]);
  const [reload, setReload] = useState(true);
  const [role, setRole] = useState("");
  const [feedbackId, setFeedbackId] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  //const [temp, setTemp] = useState(1);

  return (
    <div>
      <Helmet>
        <title>CorePower Yoga || Dashboard||ManageClasses</title>
      </Helmet>
      <div className=" overflow-x-scrol">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Picture</th>
              <th>Class Name</th>
              {role !== "Instructor" && (
                <th className="pl- text-center">Instructor</th>
              )}
              {role === "Instructor" && (
                <th className="pl- text-center">Price</th>
              )}
              <th>Instructor Email</th>
              <th>Available Seats</th>
              {role === "Admin" && <th className=" text-center">Price</th>}
              {role === "Instructor" && (
                <th className=" text-center">Enrolled</th>
              )}
              {(role === "Admin" || role === "Instructor") && (
                <th className="pl- text-center">Status</th>
              )}
              {role === "Student" && <th className="pl-16">Price</th>}
              {role === "Student" && <th className="pl- text-center">Pay</th>}
              {role === "Student" && (
                <th className="pl- text-center">Delete</th>
              )}
              {role === "Admin" && (
                <th className="!pl- text-center">Approve</th>
              )}
              {role === "Instructor" && (
                <th className="!pl- text-center">Feedback</th>
              )}
              {role === "Admin" && <th className="!pl- text-center">Deny</th>}
              {role === "Instructor" && (
                <th className="!pl- text-center">Update</th>
              )}
              {role === "Admin" && (
                <th className="!pl- text-center">Feedback</th>
              )}
            </tr>
          </thead>
          <tbody>
            {classes.map((classData, index) => (
              <ClassList
                key={classData._id}
                openModal={openModal}
                reload={reload}
                setReload={setReload}
                classData={classData}
                index={index}
              ></ClassList>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;

//?test purpose

{
  /*<Table.HeadCell className=' text-center'>
Class Name
</Table.HeadCell>



























</Table.Head>}
<Table.Body className={`divide-y ${role !== 'Admin' && 'hidden'}`} >

{
classes.map((classData, index) => <ClassList key={classData._id} openModal={openModal} reload={reload} setReload={setReload} classData={classData} index={index} ></ClassList>)
}

</Table.Body>
<Table.Body className={`divide-y ${role !== 'Instructor' && 'hidden'}`} >

{
classes.map((classData, index) => <InstructorClassList key={classData._id} openModal={openModal} openClassUpdate={openClassUpdate} reload={reload} setReload={setReload} classData={classData} index={index} ></InstructorClassList>)
}

</Table.Body>
{role === "Student" && <Table.Body className={`divide-y ${role !== 'Student' && 'hidden'}`} >

{
classes.map((classData, index) => <MySelectedClass key={classData._id} handleDelete={handleDelete} classData={classData} index={index} />)
}

</Table.Body>}*/
}
