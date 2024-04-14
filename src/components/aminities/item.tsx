import Link from "next/link";

interface AminitiesItemProps {
  data: {
    icon: string,
    title: string,
  }
}
const AminitiesItem = ({ data }: AminitiesItemProps) => {
  return (
    <>
      <div className="ltn__category-item ltn__category-item-5 text-center">
        <Link href="/aqar">
          <span className="category-icon">
            <i className={`${data.icon}`}></i>
          </span>
          <span className="category-title">{data.title}</span>
          <span className="category-btn">
            <i className="flaticon-right-arrow"></i>
          </span>
        </Link>
      </div>
    </>
  );
};

export default AminitiesItem;
