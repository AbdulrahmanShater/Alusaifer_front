interface TitleSectionProps {
  titleSectionData: {
    title: string
    subTitle: string,
    additionalClassName: string,
  },
  sectionClasses: string,
  headingClasses: string
}

const TitleSection = ({ titleSectionData, sectionClasses, headingClasses }: TitleSectionProps) => {
  return (
    <>
      <div className={`section-title-area ${sectionClasses}`}>
        <h6
          className={`section-subtitle ${headingClasses} ltn__secondary-color`}
        >
          {titleSectionData.subTitle}
        </h6>
        <h1 className="section-title"> {titleSectionData.title}</h1>
      </div>
    </>
  );
};

export default TitleSection;
