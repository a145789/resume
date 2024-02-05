import type { StepProps } from 'rc-steps/lib/Step';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { Fragment } from 'react';
import CompanyIcon from '@/components/company-icon';
import EducationalIcon from '@/components/educational-icon';
import type { ProjectProps } from '@/components/project';
import CopyIcon from '@/components/copy-icon';

const phone = '15662777798' as const;
const email = 'clencat@163.com' as const;

export default function useResume() {
  function copyToast(_text: string, result: boolean) {
    if (result) {
      toast.success('复制成功!');
    } else {
      toast.error('复制失败!');
    }
  }
  /** 个人信息 */
  const information = [
    '男 / 1998 · 7',
    <Fragment key="phone">
      <span>手机：{phone}</span>
      <CopyToClipboard text={phone} onCopy={copyToast}>
        <CopyIcon size="20" fill="#eee" className="ml-2 cursor-pointer" />
      </CopyToClipboard>
    </Fragment>,
    <Fragment key="email">
      <span>邮箱：</span>
      <a href={`mailto:${email}`} className="text-blue-600">
        {email}
      </a>
      <CopyToClipboard text={email} onCopy={copyToast}>
        <CopyIcon size="20" fill="#eee" className="ml-2 cursor-pointer" />
      </CopyToClipboard>
    </Fragment>,
  ];

  /** 教育背景 */
  const educational: StepProps[] = [
    {
      title: '山东电子职业技术学院',
      subTitle: '2016/9 - 2019/7',
      description: '计算机科学与技术',
      icon: <EducationalIcon />,
    },
    {
      title: '西安工业大学（函授）',
      subTitle: '2021/4 - 2023/7',
      description: '计算机科学与技术',
      icon: <EducationalIcon />,
    },
  ];

  /** 工作经历 */
  const workExperience: StepProps[] = [
    {
      title: '繁翰信息技术（上海）有限公司',
      subTitle: '2023年6月 - 至今',
      description: '前端工程师',
      icon: <CompanyIcon />,
    },
    {
      title: '纬创软件有限公司',
      subTitle: '2021/9 - 2023/3',
      description: '前端工程师',
      icon: <CompanyIcon />,
    },
    {
      title: '上海微创软件股份有限公司',
      subTitle: '2021/3 - 2021/9',
      description: '前端工程师',
      icon: <CompanyIcon />,
    },
    {
      title: '杨凌农业云',
      subTitle: '2019/9 - 2021/2',
      description: '前端工程师',
      icon: <CompanyIcon />,
    },
  ];

  /** 技术技能 */
  const skills = [
    '熟练掌握 HTML、CSS、JavaScript 等前端端基础知识',
    '熟练掌握 Vue2、Vue3 全家桶，了解 Vue3 响应式源码',
    '熟练使用 React 全家桶开发后台、H5 项目',
    '熟练掌握 TypeScript ，能够应对复杂的类型体系',
    '熟练使用 ElementUI，VantUI，Arco Design 等 PC、移动端 UI 框架，熟悉 TailwindCss UnoCss 等 CSS 框架',
    '熟悉 Node.js，具备编写各类脚本和开发 Node.js 库的经验',
    <>
      负责{' '}
      <a
        href="https://github.com/varletjs/varlet-release"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#3a7afe] underline underline-offset-8"
      >
        varlet-release
      </a>{' '}
      的基础维护，可以便捷的发布前端库版本号及生成changelog
    </>,
  ];

  /** 技能评分 */
  const skillRating = [
    {
      skill: 'HTML',
      percent: 100,
    },
    {
      skill: 'CSS',
      percent: 100,
    },
    {
      skill: 'JavaScript',
      percent: 100,
    },
    {
      skill: 'TypeScript',
      percent: 80,
    },
    {
      skill: 'Vue',
      percent: 90,
    },
    {
      skill: 'React',
      percent: 60,
    },
    {
      skill: 'Node',
      percent: 40,
    },
  ];

  const projects: ProjectProps[] = [
    {
      name: '大数据模型管理系统',
      time: '2021 年 9 月 – 2023 年 3 月',
      stack: 'Vue2 + Composition-API + Pinia + Vite + Tailwindcss + TypeScript',
      introduction:
        '用于大数据模型代码调试，纠错，试运行以及维护，模型上线审核，批量发布等功能。',
      highlights: [
        '引入 unplugin-auto-import unplugin-vue-components 减少重复代码，解决了 unplugin-auto-import import 顺序不一致无法正确解析的问题。',
        '封装 sortablejs 为 hooks 方便使用。',
        '使用 Selection API 封装文字溢出时展示 Tooltip 组件。',
        '解决 Vue Class 迁移至 Vite 时， Typescript 对 Class 兼容问题。',
        '使用 node.js 封装了一些实用脚本。',
      ],
    },
    {
      name: '抖音青少年运营后台+家长后台周报',
      time: '2021 年 3 月 – 2021 年 9 月',
      stack: 'React Hook + Typescript + Reduck + Arco Design',
      introduction:
        '满足运营人员对抖音青少年内容整合分发。划分频道推送，行为记录。对相关视频定制化整理。动态周报服务于家长对于孩子每周使用青少年模式的详细总结。',
      highlights: [
        '独立维护及开发项目。',
        '编写脚本实现自动化生成业务模板，减少重复工作，提高了30%的开发效率。',
        '优化 Context 使用，减少组件遍历次数。',
        '监听浏览器关闭事件时，单路由页面退出埋点请求不一定会准确发送，设计了一个中转页面桥接。',
      ],
    },
    {
      name: 'vue3-script-to-setup',
      url: 'https://github.com/a145789/vue3-script-to-setup',
      introduction:
        '在 Vue3 的 script-setup 模式稳定之前，我们的项目中采用了大量普通的 Composition-API 写法。后来转向使用 setup 写法，但是在代码迁移的过程中文件数量过多，也很繁琐。为了避免重构带来的成本，我开发了一个插件来解决这个问题。',
      highlights: [
        '使用 SWC 作为 parse 工具，速度更快，支持单文件转换及多文件批量转换。',
        '解决 Rust 与 Node 对 Unicode 字符长度不一致问题导致转换失败问题。',
        '核心代码无关 Node 暴露核心 API 可在 Node 以及 浏览器中使用。',
      ],
    },
  ];

  return {
    information,
    educational,
    skills,
    workExperience,
    skillRating,
    projects,
  };
}
