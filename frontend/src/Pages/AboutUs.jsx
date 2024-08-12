import React from "react";
import Navbar from "../components/cor/HomePage/Navbar";
import HighlightText from "../components/cor/HomePage/HighlightText";
import aboutimg1 from "../assets/Images/aboutus1.webp";
import aboutimg2 from "../assets/Images/aboutus2.webp";
import aboutimg3 from "../assets/Images/aboutus3.webp";
import FoundingStoryImg from "../assets/Images/FoundingStory.png";
import Button from "../components/cor/HomePage/Button";
import ContactForm from "../components/cor/About/ContactForm";

function AboutUs() {
  const images = [
    {
      src: aboutimg1,
    },
    {
      src: aboutimg2,
    },
    {
      src: aboutimg3,
    },
  ];
  return (
    <>
      <Navbar color="bg-[#000814]" />
      <div className="w-full min-h-screen ">
        <div className="w-full h-[70vh] bg-[#161D29] pt-[7vh]">
          <div className="w-[52vw] m-auto ">
            <h3 className="text-2xl text-center mb-10 text-[#838894]">
              About Us
            </h3>
            <h1 className="text-4xl w-[50vw] font-bold mb-4">
              Driving Innovation in Online Education for a
              <div className="text-center w-full ">
                {" "}
                <HighlightText text={"Brighter Future"} />
              </div>
            </h1>
            <p className="w-fit text-[#838894]">
              Studynotion is at the forefront of driving innovation in online
              education. We re passionate about creating a brighter future by
              offering cutting edge courses, leveraging emerging technologies,
              and nurturing a{" "}
              <div className="w-full text-center">
                {" "}
                vibrant learning community.
              </div>
            </p>
          </div>
          <div className=" w-[98vw] h-[80vh]">
            <div className="images w-[90vw] h-[40vh] mt-[5vh] flex  m-auto items-center justify-evenly">
              {images.map((item, i) => (
                <div key={i} className="image w-[25vw] h-[40vh] ">
                  <img
                    className="w-full h-full object-cover rounded-lg"
                    src={item.src}
                    alt="img1"
                  />
                </div>
              ))}
            </div>

            <div className="words w-[90vw] h-[40vh]  m-auto flex  items-center justify-center">
              <h1 className="w-full text-4xl text-[#afb2bf] font-bold  text-center leading-[8vh] ] ">
                " We are passionate about revolutionizing the way we learn. Our
                innovative platform,and community to create an{" "}
                <HighlightText text={"combines technology,"} />
                <HighlightText
                  text={"expertise"}
                  text_color="text-[#f57b21]"
                />{" "}
                <HighlightText
                  text={"unparalleled educational experience."}
                  text_color="text-[#f57b21]"
                />
                "
              </h1>
            </div>
          </div>

          <div className="line bg-[#2c333f] w-full h-[2px] mb-[10vh]"></div>
          <div className="w-[100vw] h-[65vh] flex items-center justify-evenly">
            <div className="w-[37vw]  h-[93%] border-blue-500 ">
              <h1 className="text-3xl mb-[3vh]">
                <HighlightText
                  text={"Our Founding Story"}
                  text_color="text-[#f57b21]"
                />
              </h1>
              <p className="text-[#838891] text-[1.2vw] font-medium w-fit">
                Our e learning platform was born out of a shared vision and
                passion for transforming education. It all began with a group of
                educators, technologists, and lifelong learners who recognized
                the need for accessible, flexible, and high-quality learning
                opportunities in a rapidly evolving digital world.
              </p>
              <br />
              <p className="text-[#838891] text-[1.2vw] font-medium w-fit">
                As experienced educators ourselves, we witnessed firsthand the
                limitations and challenges of traditional education systems. We
                believed that education should not be confined to the walls of a
                classroom or restricted by geographical boundaries. We
                envisioned a platform that could bridge these gaps and empower
                individuals from all walks of life to unlock their full
                potential
              </p>
            </div>
            <div className="w-[33vw]  h-[75%] border-blue-500">
              <img
                className="w-full h-full object-cover rounded-lg"
                src={FoundingStoryImg}
                alt="FoundingStory"
              />
            </div>
          </div>
          <div className="w-[100vw] h-[55vh] flex items-center justify-evenly mt-[3vh]">
            <div className="w-[37vw] h-[65%]  ">
              <h1 className="text-3xl mb-[3vh]">
                <HighlightText
                  text={"Our Vision"}
                  text_color="text-[#f57b21]"
                />
              </h1>
              <p className="text-[#838891] text-[1.2vw] font-medium w-fit">
                With this vision in mind, we set out on a journey to create an e
                learning platform that would revolutionize the way people learn.
                Our team of dedicated experts worked tirelessly to develop a
                robust and intuitive platform that combines cutting edge
                technology with engaging content, fostering a dynamic and
                interactive learning experience.
              </p>
            </div>
            <div className="w-[37vw]  h-[65%] ">
              <h1 className="text-3xl mb-[3vh]">
                <HighlightText text={"Our Mission"} />
              </h1>
              <p className="text-[#838891] text-[1.2vw] font-medium w-fit">
                our mission goes beyond just delivering courses online. We
                wanted to create a vibrant community of learners, where
                individuals can connect, collaborate, and learn from one
                another. We believe that knowledge thrives in an environment of
                sharing and dialogue, and we foster this spirit of collaboration
                through forums, live sessions, and networking opportunities.
              </p>
            </div>
          </div>
          <div className="w-full h-[25vh] bg-[#161d29] flex items-center justify-evenly">
            <div className="w-[20vw] h-[8vw]  flex items-center flex-col justify-center gap-3 ">
              <h1 className="text-3xl font-bold">5K</h1>
              <p className="text-[#585d69] font-bold">Active Student</p>
            </div>
            <div className="w-[20vw] h-[8vw]  flex items-center flex-col justify-center gap-3 ">
              <h1 className="text-3xl font-bold">10+</h1>
              <p className="text-[#585d69] font-bold">Mentors</p>
            </div>
            <div className="w-[20vw] h-[8vw]  flex items-center flex-col justify-center gap-3 ">
              <h1 className="text-3xl font-bold">200+</h1>
              <p className="text-[#585d69] font-bold">Courses</p>
            </div>
            <div className="w-[20vw] h-[8vw]  flex items-center flex-col justify-center gap-3 ">
              <h1 className="text-3xl font-bold">50+</h1>
              <p className="text-[#585d69] font-bold">Awards</p>
            </div>
          </div>

          <div className="w-[93vw] h-[55vh] m-auto flex mt-[5vh]">
            <div className="h-[90%] w-[45%] flex flex-col justify-evenly ml-[1vw]">
              <div className="w-full h-fit">
                <h1 className="text-3xl mb-[0.1vw]">
                  World Class Learning for
                </h1>
                <h1 className="text-3xl mb-[2vh]">
                  <HighlightText
                    text={"Anyone, Anywhere"}
                    text_color="text-[#24aefe]"
                  />
                </h1>
              </div>
              <p className="w-[38vw] text-[#585d69] font-medium text-[1.2vw]">
                Studynotion partners with more than 275+ leading universities
                and companies to bring flexible, affordable, job-relevant online
                learning to individuals and organizations worldwide.
              </p>
              <Button text={"Learn More "} color={"yellow"} />
            </div>
            <div className="h-[100%] w-[50%] flex ml-[2.2vw]">
              <div className="w-[50%] h-full bg-[#2c333f] flex flex-col pl-[3vw] rounded-l">
                <h1 className="font-medium text-[3vh] w-fit mt-[4vh]">
                  Curriculum Based on
                </h1>
                <h1 className="font-medium text-[3vh]">Industry Needs</h1>
                <div className="w-[90%] mt-[8vh]">
                  <p className="w-fit">
                    Save time and money! The Belajar curriculum is made to be
                    easier to understand and in line with industry needs.
                  </p>
                </div>
              </div>
              <div className="w-[50%] h-full bg-[#161d29] flex flex-col pl-[3vw] rounded-r">
                <h1 className="font-medium text-[3vh] w-fit mt-[4vh]">
                  Our Learning Methods
                </h1>
                <div className="w-[90%] mt-[8vh]">
                  <p className="w-fit">
                    The learning process uses namely online and offline methods.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[95vw] h-[55vh] flex">
            <div className="w-[25%] h-full flex flex-col pl-[3vw] rounded-l "></div>
            <div className="w-[25%] h-full bg-[#2c333f] flex flex-col pl-[3vw] rounded-l">
              <h1 className="font-medium text-[3vh] w-fit mt-[4vh]">
                Certification
              </h1>
              <div className="w-[90%] mt-[8vh]">
                <p className="w-fit">
                  You will get a certificate that can be used as a certification
                  during job hunting.
                </p>
              </div>
            </div>
            <div className="w-[25%] h-full bg-[#161d29] flex flex-col pl-[3vw]">
              <h1 className="font-medium text-[3vh] w-fit mt-[4vh]">
                Rating "Auto grading"
              </h1>
              <div className="w-[90%] mt-[8vh]">
                <p className="w-fit">
                  You will immediately get feedback during the learning process
                  without having to wait for an answer or response from the
                  mentor.
                </p>
              </div>
            </div>
            <div className="w-[25%] h-full bg-[#2c333f] flex flex-col pl-[3vw]">
              <h1 className="font-medium text-[3vh] w-fit mt-[4vh]">
                Ready to Work
              </h1>
              <div className="w-[90%] mt-[8vh]">
                <p className="w-fit">
                  Connected with over 150+ hiring partners, you will have the
                  opportunity to find a job after graduating from our program.
                </p>
              </div>
            </div>
          </div>
          <ContactForm/>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
