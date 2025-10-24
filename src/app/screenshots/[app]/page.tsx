import Marquee from "react-fast-marquee";

type Screenshot = { caption: string; image: string };

const apps: Record<string, Screenshot[]> = {
  quizmaster: [
    { caption: "Login Page", image: "/app2-login.png" },
    { caption: "Landing Page", image: "/app2-landing.png" },
    { caption: "Quizzes Page", image: "/app2-quizzes.png" },
    { caption: "AI Quiz Generate Page", image: "/app2-ai-generate.png" },
    { caption: "Manual Quiz Create Page", image: "/app2-manual.png" },
    { caption: "Summary Page 1", image: "/app2-summary1.png" },
    { caption: "Summary Page 2", image: "/app2-summary2.png" },
    { caption: "Flashcards", image: "/app2-flashcard.png" },
    { caption: "Exam Page", image: "/app2-exam.png" },
    { caption: "Practice Page", image: "/app2-prac.png" },
  ],

  gcam: [
    { caption: "Login", image: "/app3-login.png" },
    { caption: "Login(Dark Mode)", image: "/app3-login-dark.png" },
    { caption: "Home", image: "/app3-home.png" },
    { caption: "Home(Dark Mode)", image: "/app3-home-dark.png" },
    { caption: "Transaction History", image: "/app3-txhistory.png" },
    {
      caption: "Transaction History(Dark Mode)",
      image: "/app3-txhistory-dark.png",
    },
    { caption: "Transaction Details", image: "/app3-txdetails.png" },
    {
      caption: "Transaction Details(Dark Mode)",
      image: "/app3-txdetails-dark.png",
    },
  ],
};

export default function ScreenshotPage({
  params,
}: {
  params: { app: string };
}) {
  const screenshots = apps[params.app];
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-8 capitalize">
        {params.app} Screenshots
      </h1>
      <div className="flex justify-center items-center ">
        <Marquee direction="right">
          {screenshots.map((d) => (
            <div
              key={d.caption}
              className="mx-5 flex flex-col items-center md:max-w-lg"
            >
              <p className="mb-2 text-center">{d.caption}</p>
              <img
                src={d.image}
                alt={d.caption}
                className={`border rounded-2xl object-contain 
    ${
      params.app === "gcam"
        ? "h-[500px] md:h-[400px]"
        : "h-[350px] md:h-[300px]"
    }
    max-w-[200px] md:max-w-none
  `}
              />
            </div>
          ))}
        </Marquee>
        {/* <Marquee direction="left">
        {data.map((d) => (
          <div
            key={d.caption}
            className="mx-5 flex flex-col items-center md:max-w-2xl"
          >
            <p className="mb-2 text-center">{d.caption}</p>
            <img src={d.image} alt={d.caption} className="border rounded-2xl" />
          </div>
        ))}
      </Marquee> */}
      </div>
    </div>
  );
}
