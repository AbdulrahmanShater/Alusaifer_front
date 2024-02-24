import Link from "next/link";

const CallToAction = () => {
  return (
    <>
      <div className="call-to-action-inner call-to-action-inner-6 ltn__secondary-bg position-relative"dir="rtl">
        <div className="coll-to-info text-color-white">
          <h1>تدور على بيت العمر؟</h1>
          <p>نقدر نساعدك في تحقيق حلمك بمنزل العمر</p>
        </div>
        <div className="btn-wrapper">
          <Link className="btn btn-effect-3 btn-white" href="contact">
          اكتشف العقارات 
          </Link>
        </div>
      </div>
    </>
  );
};

export default CallToAction;
