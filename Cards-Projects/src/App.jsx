import React from 'react'
import Card from './Component/Card/Card'


const App = () => {
  const positioninfo = [
    {
      company:"TechNova",
      logo: "https://cdn.sanity.io/images/rn4tswnp/production/701c93f19c501de365d167e88aae6d09802cb629-1675x1103.jpg?h=320&auto=format&dpr=2",
      position: "Frontend Developer",
      posted_days_ago: 2,
      tags: ["remote", "full-time"],
      location: "Delhi, India",

    },
    {
      company: "PixelCraft",
      logo:"https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
      position: "UI/UX Designer",
      posted_days_ago: 5,
      tags: ["contract", "flexible"],
      location: "Mumbai, India",

    },
    {
      company: "CodeBase",
      logo: "https://images.unsplash.com/photo-1562783912-21ad31ee2a83?q=80&w=948&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      position: "Backend Engineer",
      posted_days_ago: 1,
      tags: ["full-time", "remote"],
      location: "Bangalore, India",

    },
    {
      company: "VisionX",
      logo: "https://images.unsplash.com/photo-1496200186974-4293800e2c20?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      position: "AI Engineer",
      posted_days_ago: 10,
      tags: ["full-time", "flexible"],
      location: "Hyderabad, India",

    },
    {
      company: "FrameFlow",
      logo: "https://plus.unsplash.com/premium_photo-1668902224245-0f09f90a7a15?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      position: "Video Editor",
      posted_days_ago: 3,
      tags: ["remote", "contract"],
      location: "Delhi, India",

    },
    {
      company: "NextEdge",
      logo: "https://images.unsplash.com/photo-1619551734325-81aaf323686c?q=80&w=449&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      position: "Full Stack Developer",
      posted_days_ago: 7,
      tags: ["full-time", "remote"],
      location: "Pune, India",

    },
    {
      company: "ByteWave",
      logo: "https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      position: "DevOps Engineer",
      posted_days_ago: 12,
      tags: ["full-time", "flexible"],
      location: "Chennai, India",

    },
    {
      company: "SnapMedia",
      logo: "https://plus.unsplash.com/premium_photo-1667354097023-4b8d9c3f7767?q=80&w=426&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      position: "Content Creator",
      posted_days_ago: 4,
      tags: ["remote", "hourly"],
      location: "Delhi, India",

    },
    {
      company: "CloudAxis",
      logo: "https://logo.clearbit.com/cloudaxis.com",
      position: "Cloud Engineer",
      posted_days_ago: 15,
      tags: ["full-time", "remote"],
      location: "Noida, India",

    },
    {
      company: "DesignHive",
      logo: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      position: "Graphic Designer",
      posted_days_ago: 6,
      tags: ["contract", "flexible"],
      location: "Delhi, India",

    },

    {
      company: "AlgoWorks",
      logo: "https://images.unsplash.com/photo-1662057168154-89300791ad6e?q=80&w=860&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      position: "Software Engineer",
      posted_days_ago: 9,
      tags: ["full-time", "remote"],
      location: "Gurgaon, India",

    },
    {
      company: "InnoSoft",
      logo: "https://images.unsplash.com/photo-1662052955282-da15376f3919?q=80&w=862&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      position: "QA Tester",
      posted_days_ago: 2,
      tags: ["contract", "remote"],
      location: "Delhi, India",

    },
    {
      company: "MotionLab",
      logo: "https://plus.unsplash.com/premium_photo-1674571895797-3ca2aaf89eed?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      position: "Motion Designer",
      posted_days_ago: 11,
      tags: ["remote", "flexible"],
      location: "Mumbai, India",

    },
    {
      company: "DevSphere",
      logo: "https://images.unsplash.com/photo-1627843563095-f6e94676cfe0?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      position: "React Developer",
      posted_days_ago: 1,
      tags: ["full-time", "remote"],
      location: "Delhi, India",

    },
    {
      company: "StackBridge",
      logo: "https://images.unsplash.com/photo-1687523327554-fa9f50423489?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      position: "Node.js Developer",
      posted_days_ago: 8,
      tags: ["full-time", "flexible"],
      location: "Bangalore, India",

    },
    {
      company: "BrandForge",
      logo: "https://plus.unsplash.com/premium_photo-1668051040456-24c63abd95b4?q=80&w=376&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      position: "Brand Strategist",
      posted_days_ago: 13,
      tags: ["contract", "remote"],
      location: "Delhi, India",

    },
    {
      company: "ClipStudio",
      logo: "https://images.unsplash.com/photo-1618588429012-0559f1cbc5aa?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      position: "Video Editor",
      posted_days_ago: 3,
      tags: ["remote", "hourly"],
      location: "Lucknow, India",

    },
    {
      company: "DataNest",
      logo: "https://images.unsplash.com/photo-1562705121-e624542c7b9b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      position: "Data Analyst",
      posted_days_ago: 5,
      tags: ["full-time", "remote"],
      location: "Delhi, India",
        },
    {
      company: "Appify",
      logo: "https://images.unsplash.com/photo-1662052955282-da15376f3919?q=80&w=862&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      position: "Mobile App Developer",
      posted_days_ago: 6,
      tags: ["full-time", "flexible"],
      location: "Hyderabad, India",
        },
    {
      company: "RenderX",
      logo: "https://images.unsplash.com/photo-1597979732130-9d2ad18df38b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      position: "3D Artist",
      posted_days_ago: 14,
      tags: ["contract", "remote"],
      location: "Delhi, India",
        }
  ]

  return (
    <div className='Section1'>
      {positioninfo.map(function(data,idx){
         return <Card key={idx} carData={data}/>
      })}
    </div>
  )
}

export default App