import React, {useEffect} from "react";
import {useState} from "react";
import {Helmet} from "react-helmet-async";
import ClassList from "../../ClassList/ClassList";
import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";

const ManageClasses = () => {
  const {user, loading} = useAuth();
  const [classes, setClasses] = useState([]);
  const role = useRole();
  const [reload, setReload] = useState(true);
  //const [userRole, setUserRole] = useState("");
  const [feedbackId, setFeedbackId] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  //const [temp, setTemp] = useState(1);
  console.log(role);
  //todo : aro onk kaj ekhane bake ase

  //useEffect(() => {
  //  // console.log(user.email);
  //  fetch(`${import.meta.env.VITE_API_URL}/role/email/${user?.email}`)
  //    .then((res) => res.json())
  //    .then((data) => setUserRole(data.role));
  //}, [user?.email]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/selected/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (role === "Student") {
          setClasses(data);
        }
      });
  }, [user?.email, role]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/myClasses/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (role === "Instructor") {
          setClasses(data);
        }
      });
  }, [user?.email, role]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/classes`)
      .then((res) => res.json())
      .then((data) => {
        //if (role === "admin") {
        setClasses(data);
        console.log(classes);
        //}
      });
  }, [user?.email, classes]);

  return (
    <>
      {role === "admin" && (
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
                  {/*{role === "admin" && <th>Available Seats</th>}*/}
                  {role === "admin" && <th className=" text-center">Price</th>}
                  <th>Seats</th>
                  {role === "Instructor" ||
                    (role === "admin" && (
                      <th className=" text-center">Enrolled</th>
                    ))}
                  {(role === "admin" || role === "Instructor") && (
                    <th className="pl- text-center">Status</th>
                  )}
                  {role === "Student" && <th className="pl-16">Price</th>}
                  {role === "Student" && (
                    <th className="pl- text-center">Pay</th>
                  )}
                  {role === "Student" && (
                    <th className="pl- text-center">Delete</th>
                  )}
                  {role === "admin" && (
                    <th className="!pl- text-center">Approve</th>
                  )}
                  {role === "Instructor" && (
                    <th className="!pl- text-center">Feedback</th>
                  )}
                  {role === "admin" && (
                    <th className="!pl- text-center">Deny</th>
                  )}
                  {role === "Instructor" && (
                    <th className="!pl- text-center">Update</th>
                  )}
                  {role === "admin" && (
                    <th className="!pl- text-center">Feedback</th>
                  )}
                </tr>
              </thead>
              <tbody>
                {classes.map((classData, index) => (
                  <ClassList
                    key={classData._id}
                    reload={reload}
                    setReload={setReload}
                    classData={classData}
                    index={index}
                  ></ClassList>
                ))}
              </tbody>
              <tbody
                className={`divide-y ${role !== "Instructor" && "hidden"}`}
              >
                {/*{
    classes.map((classData, index) => <InstructorClassList key={classData._id} openModal={openModal} openClassUpdate={openClassUpdate} reload={reload} setReload={setReload} classData={classData} index={index} ></InstructorClassList>)
}*/}
              </tbody>
              {role === "Student" && (
                <tbody className={`divide-y ${role !== "Student" && "hidden"}`}>
                  {/*{
    classes.map((classData, index) => <MySelectedClass key={classData._id} handleDelete={handleDelete} classData={classData} index={index} />)
}*/}
                </tbody>
              )}
            </table>
          </div>
        </div>
      )}
    </>
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
