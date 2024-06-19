import TeammateInfo from "../components/TeammateInfo";

import mikhail from "./../images/mikhail.jpg"
import nikolai from "./../images/nikolai.jpg"
import mike from "./../images/mike.jpg"
import dima from "./../images/dima.jpg"
import igor from "./../images/igor.jpg"
import ilnaz from "./../images/ilnaz.jpg"
import yaroslava from "./../images/yaroslava.jpg"


const About = () => {
  return (
      <div className="TeammatesList">
          <TeammateInfo
              photo={mike}
              name="Mike Tezin"
              desc="Teamleader"
              tg="MikeTezin"
          />
          <TeammateInfo
              photo={mikhail}
              name="Mikhail Stepanov"
              desc="Front-end developer"
              tg="MichaelStep"
          />
          <TeammateInfo
              photo={nikolai}
              name="Nikolai Petukhov"
              desc="Front-end developer"
              tg="Nickolaus_SDR"
          />
          <TeammateInfo
              photo={dima}
              name="Dmitriy Kuzmin"
              desc="AI developer"
              tg="ikkiren"
          />
          <TeammateInfo
              photo={igor}
              name="Igor Borutya"
              desc="Backend developer"
              tg="scrofx"
          />
          <TeammateInfo
              photo={yaroslava}
              name="Yaroslava Bryukhanova"
              desc="AI developer"
              tg="YaroslavaYara159"
          />
          <TeammateInfo
              photo={ilnaz}
              name="Ilnaz Magizov"
              desc="Backend developer"
              tg="mazik_il"
          />
      </div>
  )
}

export default About;
