import Link from "next/link";

interface MenuListProps { addListing: boolean }
const MenuList = (props: MenuListProps) => {
  return (
    <ul>
      <li className="menu-icon">
        <Link href="/">
          الرئيسية
        </Link>


      </li>
      <li className="menu-icon">
        <Link href="/about">
          من نحن
        </Link>


      </li>
      <li className="menu-icon">
        <Link href="/aqarat">
          العقارات
        </Link>
      </li>
      <li>
        <Link href="/contact">تواصل معنا</Link>
      </li>
    </ul>
  );
};

export default MenuList;
