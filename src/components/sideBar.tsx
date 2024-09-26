import { Link } from "lucide-react";
import { useEffect, useState } from "react";
import { GrFormDown, GrFormUp } from "react-icons/gr";
import { MdOutlineSportsMartialArts } from "react-icons/md";
import { GiLeatherArmor, GiHoodedAssassin, GiFootTrip } from "react-icons/gi";
import { IoIosShirt } from "react-icons/io";
import { MdOutlineSwitchAccessShortcutAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setStateValue, setValue } from "@/feature/createSlice";
import { animate, motion } from "framer-motion";

const categories = [
  {
    title: "Sports Wears",
    subcategories: [
      "Hoodies", "Polo Shirts", "Jackets", "Shorts", "Tracksuits", 
      "Trousers", "Sweat Shirts", "T-Shirts", "Varsity Jackets", 
      "Cycling Wear", "Gloves", "Footballs", "Footwears",
    ],
    icon: <MdOutlineSportsMartialArts size={20} />,
  },
  {
    title: "Leather Wears",
    subcategories: [
      "Fashion Jackets Men", "Fashion Jackets Women", "Motorbike Jackets & Pants",
      "Leather Vest", "Leather Coat", "Uniforms",
    ],
    icon: <GiLeatherArmor size={20} />,
  },
  {
    title: "Denim Wears",
    subcategories: ["Denim Jackets", "Denim Pants", "Denim Skirts", "Customized"],
    icon: <IoIosShirt size={20} />,
  },
  {
    title: "Accessories",
    subcategories: ["Wallets", "Hand Bags", "Saddle Bags", "Belts", "Laptop Bags"],
    icon: <GiHoodedAssassin size={20} />,
  },
  {
    title: "Footwears",
    subcategories: [
      "Dressing Shoes", "Casual Shoes", "Sneakers Shoes", "Sports Shoes", 
      "Long Boots", "Dancing Shoes", "Sandals", "Night Slippers",
    ],
    icon: <GiFootTrip size={20} />,
  },
  {
    title: "Additional Category",
    subcategories: [
      "SR#", "Domain", "Hosting", "Business Emails", "Google Analytics Account", 
      "Mobile Friendly", "Google Business Profile", "Google Search Console",
    ],
    icon: <MdOutlineSwitchAccessShortcutAdd size={20} />,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export default function Sidebar() {
  const [openCategory, setOpenCategory] = useState<string | null>("Sports Wears");
  const [clickedSubcategory, setClickedSubcategory] = useState<string | null>("Hoodies");
  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const dispatch = useDispatch();

  return (
    <div className="p-2">
      <ul>
        {categories.map((category) => (
          <li key={category.title}>
            <div
              onClick={() => toggleCategory(category.title)}
              className={`w-full text-left font-bold p-2 bg-gray-200 mb-2 mt-2 outfit-bold flex justify-between items-center scrollBar`}
            >
              <h5 className="flex items-center gap-3">
                {category.icon} {category.title}
              </h5>
              {openCategory === category.title ? <GrFormUp /> : <GrFormDown />}
            </div>
            {openCategory === category.title && (
              <ul className="pl-4">
                {category.subcategories.map((sub, index) => (
                  <motion.ol
                    variants={container}
                    initial="hidden"
                    animate="show"
                    key={index}
                  >
                    <a
                      key={index}
                      onClick={() => {
                        setClickedSubcategory(sub); // Track clicked subcategory
                        dispatch(setValue(sub));
                      }}
                      className="cursor-pointer"
                    >
                      <motion.li
                        variants={item}
                        transition={{ delay: index * 0.04 }}
                        key={index}
                        className={`flex text-primary p-1 outfit-regular relative ${
                          clickedSubcategory === sub
                            ? "bg-gray-100 underline-offset-4 text-yellow-500 w-full"
                            : ""
                        } group`} // Added 'group' for hover styling
                      >
                        <p className="block py-1 w-full px-3 group-hover:text-yellow-500 relative">
                          {sub}
                          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 ease-out group-hover:w-full"></span> {/* Animated underline */}
                        </p>
                      </motion.li>
                    </a>
                  </motion.ol>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
