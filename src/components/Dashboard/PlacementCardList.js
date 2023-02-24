import React from "react";
import { v4 } from "uuid";
import PlacementCard from "./PlacementCard";

const PlacementCardList = () => {
  const placementData = [
    {
      name: "Google",
      description:
        "Google LLC is an American multinational technology company focusing on search engine technology, online advertising, cloud computing, computer software, quantum computing, e-commerce, artificial intelligence, and consumer electronics.",
      ctc: "32 lpa",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK5q0FP74VV9wbfwP378_7kj7iDomHuKrxkXsxDdUT28V9dlVMNUe-EMzaLwaFhneeuZI&usqp=CAU",
      branch: ["CSE", "IT", "ECE"],
    },
    {
      name: "Josh Technology Group (Frontend Developer)",
      description:
        "Please note that all the rounds are elimination rounds, the students will be moved to the next phase only after clearing the previous one. Students are requested to wear appropriate clothing while taking the test and their webcam should be in working condition.",
      ctc: "14.75 lpa",
      img: "https://1.bp.blogspot.com/-qEzltrzx16g/X94QlInN84I/AAAAAAAACAE/JbaRbrDekTMasykox2U8Xqw3ZxYQkfX_wCLcBGAsYHQ/s570/Screenshot%2B2020-12-19%2Bat%2B8.09.04%2BPM.png",
      branch: ["CSE", "IT", "ECE", "Civil"],
    },
    {
      name: "IBM",
      description:
        "We bring together all the necessary technology and services, regardless of where those solutions come from, to help clients solve the most pressing business problems. We enable clients to leverage the full power of hybrid cloud and AI, with strong demand for open source innovation.",
      ctc: "4.75 lpa",
      img: "https://www.ibm.com/brand/experience-guides/developer/b1db1ae501d522a1a4b49613fe07c9f1/01_8-bar-positive.svg",
      branch: ["CSE", "IT", "ECE"],
    },
    {
      name: "Simplify Workforce Technologies Pvt. Ltd.",
      description:
        "Simplify Workforce Private Limited is a Private incorporated on 11 May 2021. It is classified as Non-govt company and is registered at Registrar of Companies, Hyderabad. Its authorized share capital is Rs. 35,000,000 and its paid up capital is Rs. 30,000,000. It is inolved in Software publishing, consultancy and supply [Software publishing includes production, supply and documentation of ready-made (non-customized) software, operating systems software, business & other applications software, computer games software for all platforms.",
      ctc: "6 lpa",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_VrDv-ft5teNUGWgTziIQgxE_IpXXke2ZzwXzUio8erJhCuusnnm2IKdRka08DMZfV04&usqp=CAU",
      branch: ["CSE", "IT"],
    },
    {
      name: "Knocial - Graduate Software Engineer",
      description:
        "Knocial India Limited is a 2 years 2 months old Public Company incorporated on 02 Nov 2020. Its registered office is in Gurgaon, Haryana, india.The Company's status is Active, and it has filed its Annual Returns and Financial Statements up to 31 Mar 2021 (FY 2020-2021). It's a company limited by shares having an authorized capital of Rs 10.00 lakh and a paid-up capital of Rs 10.00 lakh as per MCA.",
      ctc: "10 lpa",
      img: "https://knocialindia.com/assets/images/logo/logo.png",
      branch: ["CSE"],
    },
    {
      name: "GeeksforGeeks- Mentor Role ",
      description:
        "Profiles that we are offering: Mentor Role Please note: We are looking for candidates who can join immediately. The Duration of the internship will be 6 months. For all the profiles the selection process will consist of 3 Rounds Salary Offered : Upto 6 LPA (Mentor Role). Interested students are required to share a 5 minute video of them teaching a particular topic from DSA subject and all these videos are to be shared with us with their respective student names in a drive.",
      ctc: "6 lpa",
      img: "https://media.geeksforgeeks.org/wp-content/uploads/20210224040124/JSBinCollaborativeJavaScriptDebugging6-300x160.png",
      branch: ["CSE", "IT", "ECE", "EEE"],
    },
    {
      name: "CETPA Infotech Pvt. Ltd.",
      description:
        " After compeltion of internship , selected candidate will get package upto 5 lac. Offering for selected candidate: If the candidate scores 90% and above, then the selected candidate will get a stipend of upto 15000. If the candidate scores less than 90%, the candidate will get Internship with zero stipend.",
      ctc: "5 lpa",
      img: "https://www.cetpainfotech.com/images/logosc.png",
      branch: ["CSE", "IT", "ECE"],
    },
  ];
  const list = placementData.map((el, idx) => (
    <PlacementCard isRev={idx % 2 === 0} key={v4()} {...el} />
  ));

  return <div>{list}</div>;
};

export default PlacementCardList;
