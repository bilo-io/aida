// import { Accordion, Typography, View } from '@/components/ui';
// import Section from 'components/Domain/Landing/Section';
// import { useAppLanguage, useAppTheme } from 'hooks';
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ISection, sections, } from '../Landing.utils';

// export const LandingFAQs: React.FC = () => {
//   const { name: themeName, theme } = useAppTheme();
//   const navigate = useNavigate();
//   const { language } = useAppLanguage();

//   const landingSections: ISection[] = sections(themeName, theme, navigate, language, []);
//   const section = landingSections?.find((s: ISection) => s.type === 'faq');

//   return (
//     <Section isCentered>
//       <View className="py-28">
//         <Typography size="2xl">FAQs</Typography>
//         <br />
//         <br />
//         <br />
//         {section?.items?.map((faq: { question: string, answer: string }) => (
//           <View key={faq.question} style={{
//             color: theme?.TEXT
//           }}>
//             <Accordion title={
//               <Typography color={theme?.TEXT}>
//                 {faq.question}
//               </Typography>
//             } openIcon='minus' closedIcon='plus'>
//               <View className="pb-12">
//                 <Typography color={theme?.TEXT}>
//                   {faq.answer}
//                 </Typography>
//               </View>
//             </Accordion>
//             <hr />
//           </View>
//         ))}
//       </View>
//     </Section>
//   );
// };

// export default LandingFAQs;