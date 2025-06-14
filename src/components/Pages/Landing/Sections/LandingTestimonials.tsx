// import { FlagIcon, Typography, View } from 'components/Core';
// import Section from 'components/Domain/Landing/Section';
// import { useAppLanguage, useAppTheme } from 'hooks';
// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// import { ISection, sections } from '../Landing.utils';

// export const LandingTestimonials: React.FC = () => {
//   const { name: themeName, theme } = useAppTheme();
//   const navigate = useNavigate();
//   const { language } = useAppLanguage();

//   const landingSections: ISection[] = sections(themeName, theme, navigate, language, []);
//   const section = landingSections?.find((s: ISection) => s.type === 'testimonial') as ISection;

//   return (
//     <Section
//       isCentered={false}
//       isSecondary
//       variant={themeName}>
//       {/* <Marquee> */}
//       <View className="w-full flex flex-row py-20 overflow-x-auto no-scrollbar">
//         {
//           section?.items?.map((item: any, i: number) => (
//             <View key={`${i}-${item.name}`} className="w-full flex flex-col-reverse md:flex-row items-center md:justify-center mx-8 mr-24 md:mr-48">
//               <View className="mx-2" style={{ maxWidth: 'calc(100% - 6rem)', width: '36rem' }}>
//                 <Typography
//                   className="italic"
//                   size="lg"
//                   color={`${theme?.TEXT_LIGHT}`}
//                 >
//                   {`"${item.text}"`}
//                 </Typography>
//                 <br />
//                 <br />
//               </View>
//               <View className="w-fit flex flex-col justify-center">
//                 <img
//                   src={item?.image}
//                   className="rounded-full w-48 md:w-60 h-auto"
//                   alt="user"
//                 />
//                 <View className="my-2 flex flex-row items-center">
//                   <FlagIcon alpha2={item.country} size={16} />
//                   <View className="mr-2" />
//                   <View className="w-full">
//                     <Typography
//                       size={'xl'}
//                       className='w-fit'>
//                       {item.name}
//                     </Typography>
//                   </View>
//                 </View>
//                 <View className="my-2 mb-4">
//                   <Typography
//                     size={'md'} className='w-fit'
//                     color={theme?.PRIMARY}
//                   >
//                     {item.role}
//                   </Typography>
//                 </View>
//               </View>
//             </View>
//           ))
//         }
//       </View>
//       {/* </Marquee> */}
//     </Section>
//   );
// };

// export default LandingTestimonials;