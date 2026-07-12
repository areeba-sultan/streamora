'use client';

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import {
  FaHome,
  FaPlus,
  FaFilm,
  FaEdit,
  FaTrash,
  FaSignOutAlt,
  FaUserShield,
  FaUserPlus,
  FaUsers,
  FaChevronDown,
  FaChevronRight,
} from "react-icons/fa";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const [logoutModal, setLogoutModal] = useState(false);

  const [adminOpen, setAdminOpen] = useState(false);
  const [currentAdmin, setCurrentAdmin] = useState(null);

  useEffect(() => {
    const admin = JSON.parse(
      localStorage.getItem("admin")
    );

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentAdmin(admin);
  }, []);

  const menu = [
    { name: "Dashboard", route: "/panel/admindashboard", icon: FaHome },
    { name: "Add Movies", route: "/panel/admindashboard/add", icon: FaPlus },
    { name: "All Movies", route: "/panel/admindashboard/movies", icon: FaFilm },
    { name: "Update Movies", route: "/panel/admindashboard/update", icon: FaEdit },
    { name: "Delete Movies", route: "/panel/admindashboard/delete", icon: FaTrash },
  ];

 const logout = () => {
  localStorage.removeItem("adminKey");
  localStorage.removeItem("admin");
  router.push("/panel/adminlogin");
};


  return (
    <div className="w-64 min-h-screen bg-black/80 backdrop-blur-xl border-r border-white/10 p-6 flex flex-col">


      {/* LOGO */}
      <h1 className="text-2xl font-bold text-red-600 mb-10 tracking-wide">
        Streamora
      </h1>


      {/* MENU */}
      <div className="flex flex-col gap-2 flex-1">

        {menu.map((item, i) => {

          const Icon = item.icon;
          const active = pathname === item.route;

          return (
            <button
              key={i}
              onClick={() => router.push(item.route)}
              className={`
                flex items-center gap-3 px-4 py-3 rounded-xl
                transition-all duration-300
                text-left group

                ${
                  active
                  ? "bg-red-600/30 text-white shadow-md"
                  : "text-gray-400 hover:text-white hover:bg-red-600/10"
                }
              `}
            >

              <Icon className="text-lg group-hover:scale-110 transition" />

              <span className="text-sm font-medium">
                {item.name}
              </span>

            </button>
          );
        })}

      </div>


      {/* ADMIN SETTINGS ONLY FOR SUPERADMIN */}

      {currentAdmin?.role === "SUPERADMIN" && (

      <div className="mt-2">

        <button
          onClick={() => setAdminOpen(!adminOpen)}
          className="
          w-full
          flex
          items-center
          justify-between
          px-4
          py-3
          rounded-xl
          text-gray-400
          hover:text-white
          hover:bg-red-600/10
          transition-all
          duration-300
          group
          "
        >

          <div className="flex items-center gap-3">

            <FaUserShield className="text-lg group-hover:scale-110 transition" />

            <span className="text-sm font-medium">
              Admin Settings
            </span>

          </div>


          {adminOpen 
          ? <FaChevronDown className="text-xs"/>
          : <FaChevronRight className="text-xs"/>
          }

        </button>



        {adminOpen && (

        <div className="ml-6 mt-2 flex flex-col gap-1">


          <button
            onClick={() => router.push("/panel/admin/add")}
            className="
            flex items-center gap-3 px-3 py-2 rounded-lg
            text-sm text-gray-400
            hover:bg-red-600/10 hover:text-white
            transition
            "
          >
            <FaUserPlus />
            Add Admin
          </button>



          <button
            onClick={() => router.push("/panel/admin/alladmin")}
            className="
            flex items-center gap-3 px-3 py-2 rounded-lg
            text-sm text-gray-400
            hover:bg-red-600/10 hover:text-white
            transition
            "
          >
            <FaUsers />
            All Admins
          </button>



          <button
            onClick={() => router.push("/panel/admindashboard/admin/update")}
            className="
            flex items-center gap-3 px-3 py-2 rounded-lg
            text-sm text-gray-400
            hover:bg-red-600/10 hover:text-white
            transition
            "
          >
            <FaEdit />
            Update Admin
          </button>



          <button
            onClick={() => router.push("/panel/admindashboard/admin/delete")}
            className="
            flex items-center gap-3 px-3 py-2 rounded-lg
            text-sm text-gray-400
            hover:bg-red-600/10 hover:text-white
            transition
            "
          >
            <FaTrash />
            Delete Admin
          </button>


        </div>

        )}

      </div>

      )}



      {/* LOGOUT */}

      <div className="mt-6 border-t border-white/10 pt-4">

        <button
         onClick={() => setLogoutModal(true)}
         className="flex items-center gap-3 text-red-500 hover:text-red-400 transition">
       <FaSignOutAlt />
           Logout
       </button>

      </div>

    {logoutModal &&
  typeof window !== "undefined" &&
  createPortal(
    <div
      className="
      fixed
      inset-0
      bg-black/70
      backdrop-blur-sm
      flex
      items-center
      justify-center
      z-[9999]
      "
    >

      <div
        className="
        w-full
        max-w-sm
        bg-[#111]
        border
        border-white/10
        rounded-2xl
        p-6
        shadow-2xl
        text-center
        "
      >

        <div
          className="
          w-14
          h-14
          mx-auto
          rounded-full
          bg-red-600/20
          flex
          items-center
          justify-center
          mb-4
          "
        >
          <FaSignOutAlt className="text-red-500 text-2xl"/>
        </div>


        <h2 className="text-xl font-bold text-white">
          Logout Confirmation
        </h2>


        <p className="text-gray-400 text-sm mt-2">
          Are you sure you want to logout?
        </p>


        <div className="flex gap-3 mt-6">

          <button
            onClick={() => setLogoutModal(false)}
            className="
            flex-1
            py-2.5
            rounded-xl
            bg-white/10
            hover:bg-white/20
            transition
            "
          >
            Cancel
          </button>


          <button
            onClick={logout}
            className="
            flex-1
            py-2.5
            rounded-xl
            bg-red-600
            hover:bg-red-700
            transition
            font-semibold
            "
          >
            Logout
          </button>

        </div>

      </div>

    </div>,
    document.body
  )
}
      </div>
      
      
  );
}