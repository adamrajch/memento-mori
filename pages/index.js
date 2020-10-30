import Head from "next/head";
import { usetState } from "react";
// import styles from "../styles/Home.module.css";
import Title from "../components/Header";
import Quote from "../components/Quote";
import Square from "../components/Square";
export default function Home() {
  // const user = {age:}
  const cal = [];

  const past = new Date(1993, 5, 29);
  let today = new Date();
  let result = today.getTime() - past.getTime();
  //get milliseconds in day
  let inDay = 1000 * 3600 * 24;
  let daysPassed = result / inDay;
  let weeksPassed = daysPassed / 7;
  console.log(past);
  console.log(today);

  console.log(daysPassed % 7);
  console.log("days left: ", 29200 - daysPassed);
  for (let i = 1; i <= 4000; i++) {
    cal.push(i);
  }
  return (
    <div className="lg:container lg:mx-auto px-4">
      <Head>
        <title>Memento Mori</title>
      </Head>
      <Title />
      <div className="flex flex-wrap">
        {cal.map((week, i) => {
          if (i < weeksPassed) {
            return <Square num={i + 1} passed={true} />;
          } else return <Square num={i + 1} passed={false} />;
        })}
      </div>
      <Quote />
    </div>
  );
}
