const styles = {
    paddingX: "sm:px-3 px-3",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-16 py-10",
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
    flexStart2: "flex justify-left items-start",
    boxWidth: "xl:max-w-[1280px] w-full",
    heroHeadText:
      "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[30px] lg:leading-[98px] mt-2",
    heroHeadText2:
      "font-black text-white lg:text-[40px] sm:text-[60px] xs:text-[50px] text-[30px] lg:leading-[98px] mt-2",
    heroSubText:
      "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",
    heroSubText2:
      "text-[#dfd9ff] font-medium lg:text-[19px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",
    sectionHeadText:
      "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
    sectionSubText:
      "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
    heroHeadText3:
    "font-bold text-blue-900 lg:text-[35px] sm:text-[20px] xs:text-[30px] text-[30px] lg:leading-[45px] mt-2",
    heroHeadText4:
    "font-bold text-orange-500 lg:text-[30px] sm:text-[20px] xs:text-[30px] text-[30px] lg:leading-[45px] mt-2",
    heroHeadText5:
      "font-medium text-blue-900 lg:text-[40px] sm:text-[20px] xs:text-[30px] text-[30px] lg:leading-[65px] mt-2",
    heroHeadText6:
      "font-medium text-orange-500 lg:text-[40px] sm:text-[20px] xs:text-[30px] text-[30px] lg:leading-[65px] mt-2",
    heroHeadText7:
      "font-medium text-white lg:text-[40px] sm:text-[60px] xs:text-[50px] text-[30px] lg:leading-[98px] mt-2",
    heroHeadText8:
      "font-bold text-blue-900 lg:text-[30px] sm:text-[20px] xs:text-[30px] text-[30px] lg:leading-[45px] mt-2",
    heroHeadText9:
      "font-bold text-orange-500 lg:text-[30px] sm:text-[20px] xs:text-[30px] text-[30px] lg:leading-[45px] mt-2",
    heroSubText10:
      "text-[#dfd9ff] font-medium lg:text-[18px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

    title:"font-poppins font-medium text-gray-300 text-[16px] leading-[30.8px] text-left",
    title2:"font-poppins font-bold xs:text-[30px] text-[18px] text-orange-500 xs:leading-[40.8px] leading-[30.8px] w-full",
    title3:"font-poppins font-bold xs:text-[30px] text-[18px] text-blue-900 xs:leading-[40.8px] leading-[30.8px] w-full",
    paragraph2: "font-poppins font-medium text-gray-700 text-[19px] leading-[30.8px] text-left",  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
    positionHeading: "font-poppins font-bold xs:text-[35px] text-[40px] text-orange-500 xs:leading-[50.8px] leading-[66.8px] w-full",
    positionHeading3: "font-medium font-bold xs:text-[25px] text-[20px] text-orange-500 xs:leading-[50.8px] leading-[50.8px] w-full",
    positionHeading4: "font-medium xs:text-[17px] text-[20px] text-blue-900 xs:leading-[36.8px] leading-[40.8px] w-full",
    positionHeading2: "font-medium xs:text-[20px] text-[20px] text-blue-900 xs:leading-[36.8px] leading-[36.8px] w-full",
    paragraph6: "font-poppins text-left font-medium text-gray-700 text-[15px] leading-[30.8px]",
    paragraph12: "font-poppins font-medium text-gray-700 text-[16px] leading-[30.8px]"

  };

  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
    sectionImg2: `flex-1 flex  ${styles.flexCenter} flex-col md:ml-10 ml-0 md:mt-0 mt-10 relative xl:px-0 sm:px-16 px-6 `, 
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export { styles };