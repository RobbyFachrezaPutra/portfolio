"use client";

import { useState, useEffect } from "react";
import axios from "axios";

interface IProject {
  id: number;
  title: string;
  description: string;
  image: string;
}

export default function Portfolio() {
  const [project, setProject] = useState<IProject[]>([]);

  async function fetchProject() {
    try {
      const response = await axios.get("/portfolio/portfolio.json");
      console.log("Fetch data : ", response.data);
      const data: IProject[] = response.data.projects;

      if (data.length === 0) throw new Error("data kosong");
      setProject(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchProject();
  }, []);

  return (
    <section
      id="portfolio"
      className="w-full px-4 md:px-8 lg:px-12 py-16 md:py-24"
    >
      <div className="container">
        <div className="w-full">
          <h2 className="text-base md:text-lg lg:text-xl font-bold text-stone-50 pb-8">
            PORTFOLIO
          </h2>
        </div>

        <div className="w-full px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {project.map((item, index) => (
            <div key={index} className=" p-4">
              <div className="w-full h-[500px] bg-stone-50 rounded-lg shadow-lg overflow-hidden pb-4">
                <div className="relative h-80 overflow-hidden rounded-t-lg flex justify-center items-center py-8 px-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full object-cover rounded-md"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 px-4 pb-2">
                  {item?.title || "No title"}
                </h3>
                <p className="px-4">{item?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
