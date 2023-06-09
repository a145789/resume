export interface ProjectProps {
  name: string;
  url?: string;
  time?: string;
  stack?: string;
  introduction: string;
  highlights?: string[];
}

export default function Project({
  name,
  url,
  time,
  stack,
  introduction,
  highlights,
}: ProjectProps) {
  return (
    <div className="mb-3 p-2">
      <div className="mb-2 text-[20px] font-bold">
        {url ? (
          <a
            href={url}
            className="text-[#3a7afe] underline underline-offset-8"
            target="_blank"
            rel="noopener noreferrer"
          >
            {name}
          </a>
        ) : (
          name
        )}
      </div>
      {time && <div className="mb-2 text-[12px] text-[#aaa]">{time}</div>}
      <div className="mb-2">
        <span className="font-bold">项目简介：</span>
        <span>{introduction}</span>
      </div>
      {stack && (
        <div className="mb-2">
          <span className="font-bold">技术栈：</span>
          <span>{stack}</span>
        </div>
      )}
      {highlights && (
        <>
          <div className="mb-1 font-bold">技术亮点：</div>
          <ul>
            {highlights.map((item, index) => (
              <li key={item} className="mb-1.5">
                {index + 1}.&nbsp;{item}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
