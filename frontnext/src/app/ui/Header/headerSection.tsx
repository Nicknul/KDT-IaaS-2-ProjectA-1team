import React from 'react';
import ButtonClick from './headerComponent/headerBtn';
import SpanTag from './headerComponent/headerSpanTag';
import ConDiv from './headerComponent/headerConDiv';
import HeaderTags from './headerComponent/headerTag';
import { useRouter } from 'next/navigation';
import { TABMENUTEXTS, TABROUTES } from './headerComponent/RoutePath';
import { useLanguage } from '../SettingMoules/LanguageContext';

// styles
import {
  Header,
  HeaderLeft,
  HeaderCenter,
  HeaderRight,
  HeaderButton,
  HeaderButtonFirst,
  HeaderButtonLogout,
  HeaderSpan,
} from './styles/styles';

/**
 * * 리터럴값은 RouthPath.tsx에서 관리.
 * @returns
 */
const HeaderSection: React.FC = () => {
  const router = useRouter();
  const { language } = useLanguage();

  const handleClick = (route: keyof typeof TABROUTES) => {
    router.push(TABROUTES[route]);
  };

  const localizedTexts = TABMENUTEXTS[language];

  return (
    <HeaderTags className={Header}>
      <ConDiv className={HeaderLeft}>
        <ButtonClick
          clickFunc={() => handleClick('TAB_ONE')}
          className={`${HeaderButtonFirst}`}
          textNode={localizedTexts.TABMENUONE}
        />
        <ButtonClick
          clickFunc={() => handleClick('TAB_TWO')}
          className={`${HeaderButton}`}
          textNode={localizedTexts.TABMENUTWO}
        />
      </ConDiv>
      <ConDiv className={HeaderCenter}>
        <ButtonClick
          clickFunc={() => handleClick('TAB_THREE')}
          className={`${HeaderButton}`}
          textNode={localizedTexts.TABMENUTHREE}
        />
      </ConDiv>
      <ConDiv className={HeaderRight}>
        <SpanTag className={HeaderSpan} textNode={`admin`} />
        <ButtonClick
          clickFunc={() => handleClick('TAB_FOUR')}
          className={HeaderButtonLogout}
          textNode={localizedTexts.TABMENUFOUR}
        />
      </ConDiv>
    </HeaderTags>
  );
};

export default HeaderSection;
