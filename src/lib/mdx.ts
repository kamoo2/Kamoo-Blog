import { Heading } from '@/types/Heading';

export const parseToc = (content: string) => {
  return content
    .split('\n')
    .filter((line) => line.match(/(^#{2,3})\s/))
    .reduce<Heading[]>((ac, heading) => {
      const nac = [...ac];
      const removeMDX = heading
        .replace(/^#*\s/, '')
        .replace(/[\*,\~]{2,}/g, '')
        .replace(/(?<=\])\((.*?)\)/g, '')
        .replace(/(?<!\S)((http)(s?):\/\/|www\.).+?(?=\s)/g, '');

      const section = {
        flag: removeMDX
          .trim()
          .toLowerCase()
          .replace(/[^a-z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣 -]/g, '')
          .replace(/\s/g, '-'),
        text: removeMDX,
      };

      const isSubTitle = heading.split('#').length - 1 === 3;
      // subHeading인 Item에는 부모 Heading의 flag를 가지는 parent 추가 (HeadingToc에서 현재 위치에 따라 다른 UI를 보여주는데 사용할 듯)
      // 개선 사항 : 삼항연산자를 남발하여 가독성이 좋지 못한 코드를 작성했다. 후에 {section : {flag,text,subsection:[{flag,text},{flag,text}]}}와 같은 형태로 리팩토링 해보자
      const parent = isSubTitle
        ? ac.at(-1)?.isSub
          ? ac.at(-1)?.parent
          : ac.at(-1)?.flag
        : undefined;

      if (ac.length && isSubTitle) {
        nac.push({
          ...section,
          parent,
          isSub: true,
        });
      } else {
        nac.push({ ...section, isSub: false });
      }
      return nac;
    }, []);
};
