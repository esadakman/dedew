import { useState } from "react";
import "./Faq.scss";
const faq = [
  {
    id: 1,
    question: "Who are we ?",
    answer: `First, each and every member of this community is coming from various parts of the software sector. In this regard, in our community, our team members' software experience is arithmetically more than fifteen years.\n\nSo, the idea behind this team to come together is to give service to people in the area of software To do so, we are going to analyze our members and we will make some groups as a knowledge Overall, in this concept, our business connections will demand from our members to work with them`,
  },
  {
    id: 2,
    question: "What is our main community target ?",
    answer: `We want to improve our knowledge and share our networks and create income with community projects`,
  },
  {
    id: 3,
    question: "Who should buy bitDevs NFT ?",
    answer: `New learners, who want to have more knowledge about software, who need network for being an employee and who want to come up with new ideas or basically who want to be entrepreneurs`,
  },
  {
    id: 4,
    question: "How can we buy bitDevs NFT ?",
    answer: `You can buy our NFT by using our website.\n\nAlso, if you have any priority for purchasing, you can write the code for it and you can have it in this way.`,
  },
  {
    id: 5,
    question: "Is there any priority for purchase and what is it for ?",
    answer: `Yes, we have some tests for those who have knowledge in software sector.\n\nWhen you finish the exam, the system will give you a code and you can use this code for discount`,
  },
  {
    id: 6,
    question: "What is our aim for examination ?",
    answer: `We want to analyze our community members' knowledge on software and provide some discount to them`,
  },
  {
    id: 7,
    question: "How long does it take to purchase NFT ?",
    answer: `People have one month after examination has finished`,
  },
  {
    id: 8,
    question: "How many NFT will be existing ?",
    answer: `After examination period, we will announce how many nft will be produced`,
  },
  {
    id: 9,
    question: "How much is cost per NFT and how much can we buy ?",
    answer: `Each NFT cost will be 0,** eth and if you have code before purchase, it will show you how much you can buy with discount`,
  },
  {
    id: 10,
    question: "What are we planning to do with the gains and purchases ?",
    answer: `We will reach our targets(roadmap) and develop our community`,
  },
  {
    id: 11,
    question: "Discord and Slack channels explanation",
    answer: `level 1 developer
  -has right to enter and write whole channels


  level 2 developer
  -has right to enter whole channels but just read first
  level


  level 3 developer
  -has right to enter whole channels but just reads the
  first and second levels


  level 4 developer
  -has right to enter whole channels but just reads the
  first, second and third levels


  level 5 developer
  -has right to enter whole channels but just reads the
  first, second, third and fourth levels`,
  },
];
function Faq() {
  const [answer, setAnswer] = useState(faq[0].answer);

  const handleClickFaq = (id) => {
    setAnswer(faq[id - 1].answer);
  };
  return (
    <div className="faq">
      <h2 className="title center">LEARN</h2>
      <div className="faq-container">
        <div className="left">
          <ul className="faq-ul">
            {faq.map((item) => (
              <li
                key={item.id}
                className="faq-question"
                onClick={() => {
                  handleClickFaq(item.id);
                }}
              >
                {item.question}
              </li>
            ))}
          </ul>
        </div>
        <div className="right">
          <div className="answer display-linebreak">{answer}</div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
