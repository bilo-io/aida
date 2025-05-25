import { Typography } from '@/components/ui/Typography';
import { View } from '@/components/ui/View';
import Section from '@/components/Pages/Landing/Sections/Section';
import React from 'react';

import { ISection, sections } from '../Landing.utils';
import { useTheme } from '@/context/ThemeContext';

export const LandingBenefits: React.FC = () => {
  const { theme, name: themeName } = useTheme();
  // const navigate = useNavigate();
  // const { language } = useAppLanguage();

  const landingSections: ISection[] = sections(themeName, theme);
  const section = landingSections?.find((s: ISection) => s.type === 'benefits') as ISection;

  return (
    <Section isCentered>

      <View className='mt-12'>
        <Typography size="2xl">{section?.titles}</Typography>
      </View>
      <View className="w-full h-fit py-8 flex flex-col md:flex-row items-center justify-between">
        {
          section?.items?.map((item: {
            image: string,
            name: string,
            text: string
          }) => (
            <View key={`${item.name}`} className="w-80 m-8 flex flex-col items-center justify-center">
              <img
                src={item?.image}
                className="w-24 h-auto"
                alt="user"
              />
              <Typography align="center" className='text-center my-6 w-64' size="lg">
                {item.name}
              </Typography>
              <Typography size="md" align="center" className="text-justify">{item.text}</Typography>
            </View>
          ))
        }
      </View>
    </Section>
  );
};

export default LandingBenefits;