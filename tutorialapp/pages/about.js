import Image from "next/image";

const About = () => {
  return (
    <div>
      <h1>MC Donald's Menu:</h1>
      <div>
        <div>
          <Image src="/mcdonalds.jpg" width={700} height={600} />
        </div>
      </div>
    </div>
  );
};

export default About;
