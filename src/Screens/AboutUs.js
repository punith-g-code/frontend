import React from 'react';
import Head from '../Components/Head';
import Layout from './../Layout/Layout';

function AboutUs() {
  return (
    <Layout>
      <div className="min-height-screen container mx-auto px-2 my-6">
        <Head title="About Us" />
        <div className="xl:py-20 py-10 px-4">
          <div className="grid grid-flow-row xl:grid-cols-2 gap-4 xl:gap-16 items-center">
            <div>
              <h3 className="text-xl lg:text-3xl mb-4 font-semibold">
                Welcome to our Non stop movies
              </h3>
              <div className="mt-3 text-sm leading-8 text-text">
                <p>:
                **Introducing "Non-Stop Movies" - Your Ultimate Destination for Seamless Indian Language Movie Streaming**
                In the ever-evolving world of digital entertainment, where diversity and culture take center stage,
                we are thrilled to introduce "Non-Stop Movies" - the app that redefines the way you experience cinema,
                exclusively designed for the discerning Indian audience. 
                "Non-Stop Movies" is your go-to destination for an unrivaled cinematic adventure,
                celebrating the rich linguistic tapestry of India.
                </p>
                <p>
                In the ever-evolving world of digital entertainment, where diversity and culture take center stage,
                we are thrilled to introduce "Non-Stop Movies" - the app that redefines the way you experience cinema,
                exclusively designed for the discerning Indian audience. 
                "Non-Stop Movies" is your go-to destination for an unrivaled cinematic adventure,
                celebrating the rich linguistic tapestry of India.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="p-8 bg-dry rounded-lg">
                  <span className="text-3xl block font-extrabold">10K</span>
                  <h4 className="text-lg font-semibold my-2">Listed Movies</h4>
                  <p className="mb-0 text-text leading-7 text-sm">
                  Your Ultimate Destination for Seamless Indian Language Movie Streaming
                  </p>
                </div>
                <div className="p-8 bg-dry rounded-lg">
                  <span className="text-3xl block font-extrabold">8K</span>
                  <h4 className="text-lg font-semibold my-2">Lovely Users</h4>
                  <p className="mb-0 text-text leading-7 text-sm">
                    Completely free, without registration! Your Ultimate Destination for Seamless Indian Language Movie Streaming
                  </p>
                </div>
              </div>
            </div>
            <img
              src="/images/about.jpg"
              alt="aboutus"
              className="w-full xl:block hidden h-header rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AboutUs;
