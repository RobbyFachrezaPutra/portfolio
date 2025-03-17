"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
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
          <p className="text-base sm:text-lg lg:text-xl justify-center text-zinc-300 pb-8">
            Silakan isi form di bawah ini untuk menghubungi saya.
          </p>
        </div>

        <div className="bg-gray-100 p-6 shadow-xl rounded-lg max-w-lg mx-auto mb-10">
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
                  <label className="block font-semibold text-black">
                    Nama:
                  </label>
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
                  <label className="block font-semibold text-black">
                    Email:
                  </label>
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
                  <label className="block font-semibold text-black">
                    Pesan:
                  </label>
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

                <div className="flex justify-center items-center">
                  <button
                    type="submit"
                    className="w-32 md:w-44 bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                  >
                    Kirim
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <p className="text-base sm:text-lg lg:text-xl justify-center text-zinc-300 pb-4">
          Atau hubungi saya melalui platform berikut:
        </p>
        <div className="flex border-b-2 border-b-slate-50 pb-2 rounded-lg w-40 gap-4 justify-center items-center mt-6 mx-auto">
          <a
            href="https://github.com/RobbyFachrezaPutra"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              size={32}
              className="text-stone-50 hover:text-stone-500 transition"
            />
          </a>
          <a
            href="https://linkedin.com/in/username"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              size={32}
              className="text-cyan-400 hover:text-cyan-800 transition"
            />
          </a>
          <a href="mailto:robbyfachrezaputra@gmail.com">
            <FaEnvelope
              size={32}
              className="text-red-500 hover:text-red-700 transition"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
