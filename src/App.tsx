import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';
import './index.css';
import { Toaster } from 'react-hot-toast';
import Steps from 'rc-steps';
import resumePdf from '@/assets/孟国栋-简历.pdf';
import GithubIcon from '@/components/github-icon';
import HomePageIcon from '@/components/home-page-icon';
import 'rc-steps/assets/index.css';
import SectionBox from '@/components/section-box';
import useResume from '@/hooks/useResume';
import Progress from '@/components/progress';
import Project from '@/components/project';
import DownloadIcon from '@/components/download-icon';

const App = () => {
  const {
    information,
    educational,
    skills,
    workExperience,
    skillRating,
    projects,
  } = useResume();

  return (
    <>
      <Toaster
        toastOptions={{
          className: '!rounded',
        }}
      />
      <div className="w-full h-full overflow-y-auto bg-[#eee]">
        <div className="md:w-[60%] md:mx-auto">
          <div className="p-[30px] bg-[#00bc8a] text-[#fff] flex flex-col justify-center items-center">
            <div className="py-2 px-4 text-[36px] font-[500]">孟国栋</div>

            <div className="text-[22px] py-2 px-4 border-solid border-t-[1px] border-[#00a982]">
              前端开发工程师
            </div>

            <div className="border-solid border-t-[1px] border-[#00a982] font-[18px] flex flex-col items-center mt-2">
              {information.map(item => (
                <div
                  className="my-0.5 flex items-center"
                  key={typeof item === 'string' ? item : item.key}
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="flex mt-1">
              <a
                href="https://github.com/a145789"
                target="_blank"
                rel="noopener noreferrer"
                title="github"
                className="mx-1.5"
              >
                <GithubIcon size="22" fill="#fff" />
              </a>
              <a
                href="https://a145789.github.io/aboutme/"
                target="_blank"
                rel="noopener noreferrer"
                title="home page"
                className="mx-1.5"
              >
                <HomePageIcon size="22" fill="#fff" />
              </a>

              <a
                href={resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                title="download resume pdf"
                className="mx-1.5"
              >
                <DownloadIcon size="22" fill="#fff" />
              </a>
            </div>
          </div>

          <div className="w-full flex flex-wrap bg-[#fff] pt-4">
            <SectionBox title="工作经历" pcMode="half">
              <Steps direction="vertical" items={workExperience} />
            </SectionBox>

            <SectionBox title="教育背景" pcMode="half">
              <Steps direction="vertical" items={educational} />
            </SectionBox>

            <SectionBox title="技术技能">
              <ul>
                {skills.map((item, index) => (
                  <li key={index} className="list-disc list-inside mb-1.5">
                    {item}
                  </li>
                ))}
              </ul>
            </SectionBox>

            <SectionBox title="项目经历">
              {projects.map(item => (
                <Project key={item.name} {...item} />
              ))}
            </SectionBox>

            <SectionBox title="技能评分">
              <div className="flex flex-wrap justify-around">
                {skillRating.map(item => (
                  <Progress key={item.skill} percent={item.percent}>
                    {item.skill}
                  </Progress>
                ))}
              </div>
            </SectionBox>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
