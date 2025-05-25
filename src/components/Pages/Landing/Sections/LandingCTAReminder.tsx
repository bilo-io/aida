'use client'
import React from 'react';
import { Button, Typography, View } from '@/components/ui';

// import TypingAnimation from 'components/Core/TypingAnimation/TypingAnimation';
import Section from '@/components/Pages/Landing/Sections/Section';
import { ISection, sections } from '../Landing.utils';
import { useTheme } from '@/context/ThemeContext';

const imgPlaceholder = `https://www.kurin.com/wp-content/uploads/placeholder-square-300x300.jpg`

export const LandingCTAReminder: React.FC = () => {
  const { name: themeName, theme } = useTheme();

  const landingSections: ISection[] = sections(themeName, theme, imgPlaceholder);
  const section = landingSections?.find((s: ISection) => s.type === 'cta-reminder') as ISection;

  return (
    <View>
      {/* <RandomBackground hasBlur> */}
        <Section isCentered>

          <View className="flex flex-col items-center justify-center p-12 py-40">
            <View className="pt-12">
            <Typography size="2xl">
              Hello
                {/* <TypingAnimation texts={section.titles} /> */}
              </Typography>
            </View>
            <br />
            <Typography>
              {section.description}
            </Typography>
            <br />
            <Button
              size="lg"
              color={theme?.PRIMARY}
              className="mx-auto"
              onClick={section?.cta?.onClick}>
            <Typography size="md" color={'#FFF'}>{
              'Get Started'
            }</Typography>
            </Button>
          </View>
        </Section>
      {/* </RandomBackground> */}
    </View>
  );
};

export default LandingCTAReminder;