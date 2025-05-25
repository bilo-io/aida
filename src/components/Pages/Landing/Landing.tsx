/* eslint-disable array-callback-return */
import { AppTopBarPublic } from '@/components/AppTopBarPublic';
// import { Footer } from 'components/App/Footer/Footer';
import { View } from '@/components/ui/View';
import { useTheme } from '@/context/ThemeContext';
import React from 'react';

import LandingHeader from './Sections/LandingHeader';
import LandingBenefits from './Sections/LandingBenefits';
import LandingCTAReminder from './Sections/LandingCTAReminder';
// import LandingEarlyAccess from './Sections/LandingEaryAccess';
// import LandingFAQs from './Sections/LandingFAQs';
// import LandingFeatures from './Sections/LandingFeatures';
// import LandingMarquee from './Sections/LandingMarquee';
// import LandingTestimonials from './Sections/LandingTestimonials';

export const Landing: React.FC = () => {
  // #region HOOKS
  const { name: themeName } = useTheme();
  // #endregion

  return (
    <View className={`page ${themeName} text-center pt-12`} style={{}}>

      <AppTopBarPublic />

      <LandingHeader />
      <LandingBenefits />
      {/* <LandingMarquee /> */}
      {/* <LandingFeatures /> */}
      <LandingCTAReminder />
      {/* <LandingTestimonials /> */}
      {/* <LandingFAQs /> */}
      {/* <LandingEarlyAccess /> */}

      {/* <Footer /> */}

    </View>
  );
};

export default Landing;