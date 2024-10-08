import React, { Suspense } from 'react';
import { HomeIcon, CheckSquare, Package, Box, MessageSquare, HelpCircle, PhoneCall, MapPin } from "lucide-react";
import Index from "./pages/Index.jsx";
import MoveChecklist from "./pages/MoveChecklist.jsx";
import Storage from "./pages/Storage.jsx";
const Testimonials = React.lazy(() => import("./pages/Testimonials.jsx"));
import FAQ from "./pages/FAQ.jsx";
import Contact from "./pages/Contact.jsx";
import AreasWeCover from "./pages/AreasWeCover.jsx";

const PackagingMaterial = React.lazy(() => import("./pages/PackagingMaterial.jsx"));

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Move Checklist",
    to: "/move-checklist",
    icon: <CheckSquare className="h-4 w-4" />,
    page: <MoveChecklist />,
  },
  {
    title: "Storage",
    to: "/storage",
    icon: <Package className="h-4 w-4" />,
    page: <Storage />,
  },
  {
    title: "Packaging Material",
    to: "/packaging-material",
    icon: <Box className="h-4 w-4" />,
    page: <Suspense fallback={<div>Loading...</div>}><PackagingMaterial /></Suspense>,
  },
  {
    title: "Areas We Cover",
    to: "/areas-we-cover",
    icon: <MapPin className="h-4 w-4" />,
    page: <AreasWeCover />,
  },
  {
    title: "Testimonials",
    to: "/testimonials",
    icon: <MessageSquare className="h-4 w-4" />,
    page: <Suspense fallback={<div>Loading...</div>}><Testimonials /></Suspense>,
  },
  {
    title: "FAQ",
    to: "/faq",
    icon: <HelpCircle className="h-4 w-4" />,
    page: <FAQ />,
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <PhoneCall className="h-4 w-4" />,
    page: <Contact />,
  },
];
