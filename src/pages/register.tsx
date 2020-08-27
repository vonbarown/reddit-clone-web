import React from "react";
import { Formik, Form } from "formik";

interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {() => (
        <Form>
          <div>Hello World</div>
        </Form>
      )}
    </Formik>
  );
};

export default Register;
