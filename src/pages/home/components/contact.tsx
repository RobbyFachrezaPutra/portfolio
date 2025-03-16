"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactSchema = Yup.object().shape({
  name: Yup.string().min(3, "Minimal 3 karakter").required("Wajib diisi"),
  email: Yup.string().email("Format email salah").required("Wajib diisi"),
  message: Yup.string().min(10, "Minimal 10 karakter").required("Wajib diisi"),
});

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full px-4 md:px-8 lg:px-12 py-16 md:py-24"
    >
      <div className="container">
        <div className="w-full">
          <h2 className="text-lg md:text-xl lg:text-xl font-bold text-stone-50 pb-8">
            CONTACT
          </h2>
          <p className="text-base sm:text-lg lg:text-xl justify-center text-zinc-300 pb-4">
            Silakan isi form di bawah ini untuk menghubungi saya.
          </p>
        </div>

        <div className="bg-white p-6 shadow-md rounded-lg max-w-lg mx-auto">
          <Formik
            initialValues={{ name: "", email: "", message: "" }}
            validationSchema={ContactSchema}
            onSubmit={(values, { resetForm }) => {
              alert("Form berhasil dikirim!");
              console.log(values);
              resetForm();
            }}
          >
            {({ handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block font-semibold">Nama:</label>
                  <Field
                    type="text"
                    name="name"
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="mb-4">
                  <label className="block font-semibold">Email:</label>
                  <Field
                    type="email"
                    name="email"
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="mb-4">
                  <label className="block font-semibold">Pesan:</label>
                  <Field
                    as="textarea"
                    name="message"
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                    rows="4"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                >
                  Kirim
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
}
