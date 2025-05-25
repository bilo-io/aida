import { Button, Typography, View } from '@/components/ui';
// import TypingAnimation from 'components/Core/TypingAnimation/TypingAnimation';
import Section from '@/components/Pages/Landing/Sections/Section';
import React, { useEffect, useState } from 'react';
import { ISection, sections } from '../Landing.utils';
import { useTheme } from '@/context/ThemeContext';

const videoDark = 'https://static.vecteezy.com/system/resources/previews/006/995/865/mp4/dark-liquid-beautiful-motion-flow-animation-black-wavy-moving-background-free-video.mp4';
const videoLight = 'https://static.vecteezy.com/system/resources/previews/041/715/954/mp4/ai-generated-white-milk-calm-waves-in-motion-free-video.mp4';

export const LandingHeader: React.FC = () => {
  const { name: themeName, theme } = useTheme();


  const landingSections: ISection[] = sections(themeName, theme);
  const section = landingSections?.find((s: ISection) => s.type === 'header') as ISection;

  // #region STYLES
  // const sectionHeight = '80vh'
  const parallaxBgStyle = {
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  };
  // #endregion

  return (
    <Section
      // isBlurred
      isCentered
      variant={'dark'}
      style={{
        background: section?.img ? `url(${section?.img})` : 'none',
        marginTop: '-1.3rem',
        ...(section.img ? parallaxBgStyle : {})
      }}>

      <BackgroundVideo
        videoDark={videoDark}
        videoLight={videoLight}
        videoUrl='https://static.vecteezy.com/system/resources/previews/020/060/759/mp4/artificial-intelligence-a-i-technology-machine-learning-futuristic-innovation-3d-rendering-free-video.mp4'
      // videoUrl='https://static.vecteezy.com/system/resources/previews/046/431/177/mp4/flying-through-glowing-neon-triangle-tunnel-made-of-morphing-digital-patterns-abstract-background-for-music-performances-science-fiction-and-high-technology-visualizations-animation-4k-30-fps-video.mp4'
      />


      {/* <RandomBackground className={'transition-all duration-100 ease-in-out'}> */}
      <View style={{
        alignSelf: 'center',
        backdropFilter: 'blur(3px)',
        height: 'inherit',
        margin: 'auto',
        minHeight: 'auto',
        // backgroundColor: `${theme?.BACKGROUND}99`
      }}>
        <View className={'page-content flex items-center'} style={{
          // display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
        }}>

          <View className="w-fit mx-auto mb-12 pt-12">
            {section?.icon}
          </View>
          <Typography align="center" size="2xl" className="z-50" children={undefined}>
            {/* <TypingAnimation
              hasCaret
              texts={section?.titles}
              delay={2000}
            /> */}
          </Typography>

          <br />
          <View className="mb-4" />
          <Typography align="center" size="lg" className="z-50">
            {/* <TypingAnimation texts={[section?.description as string]} /> */}
            {section?.description as string}
          </Typography>
          <View className="mb-12" />
          <View>
            {/* Hero Image */}
            <img
              alt="heroImage"
              className='rounded-xl card'
              src={section?.images?.[0]}
              style={{
                boxShadow: `0px 12px 50px 4px ${theme?.TEXT}66`,
                height: 'auto',
                marginLeft: 'auto',
                marginRight: 'auto',
                maxWidth: 'calc(100% - 2rem)',
                width: '40rem'
              }}
            />
          </View>
          <View className="mb-24" />
          {section?.cta && (
            <View className="flex flex-row z-50">
              <Button
                size="lg"
                className="mx-auto mr-2"
                onClick={section?.cta?.onClick}
                style={{
                  fontSize: '1rem'
                }}
              >
                {section?.cta?.name}
              </Button>
              {/* <VideoModal text={t.landing.watchVideo} url={'https://youtube.com/embed/hfw-8WmhsiM'} /> */}
              {/* <Button
                        size="lg"
                        variant="secondary"
                        onClick={() => console.log('https://youtu.be/hfw-8WmhsiM')}
                      >
                        <FontAwesome name="play" className="mr-2" />Watch video
                      </Button> */}
            </View>
          )}
          <View className="mb-24" />
        </View>
      </View>
      {/* </RandomBackground> */}
    </Section>
  );
};

export default LandingHeader;

interface BackgroundVideoProps {
  videoDark: string;
  videoLight: string;
} // Adjust the import to your actual hook path

interface BackgroundVideoProps {
  videoDark: string;
  videoLight: string;
  videoUrl: string,
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ videoDark, videoLight, videoUrl }) => {
  const { theme, name: themeName } = useTheme();
  const [url, setUrl] = useState<string>(videoUrl as string);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    setUrl(
      themeName === 'dark'
        ? videoDark
        : themeName === 'light'
          ? videoLight
          : videoUrl as string
    );
  }, [themeName, videoLight, videoDark, videoUrl]);

  const handleVideoLoad = (): void => {
    setIsVideoLoaded(true);
  };

  return (
    <View className="absolute left-0 top-0 w-full h-full overflow-hidden">
      {!isVideoLoaded && (
        <View className="absolute left-0 top-0 w-full h-full flex items-center justify-center" style={{ backgroundColor: theme?.BACKGROUND || '#000' }}>
          <View style={{ color: '#fff' }}>Loading video...</View>
        </View>
      )}
      <video
        autoPlay
        playsInline
        muted
        loop
        preload="auto"
        onCanPlayThrough={handleVideoLoad}
        className={`w-full h-full object-cover ${isVideoLoaded ? '' : 'hidden'}`}
      >
        <source src={url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <View className="absolute left-0 top-0 w-full h-full" style={{
        backdropFilter: 'blur(5px)',
        backgroundColor: `${theme?.BACKGROUND}77`
      }} />
    </View>
  );
};



