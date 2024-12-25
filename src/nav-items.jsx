import React, { Suspense } from 'react';
import { HomeIcon, CheckSquare, Package, Box, MessageSquare, HelpCircle, PhoneCall, MapPin, Info } from "lucide-react";
import Index from "./pages/Index.jsx";
import MoveChecklist from "./pages/MoveChecklist.jsx";
import Storage from "./pages/Storage.jsx";
import TermsAndConditions from "./pages/TermsAndConditions.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import HomeRemovals from "./pages/services/HomeRemovals.jsx";
import PackingServices from "./pages/services/PackingServices.jsx";
import StorageSolutions from "./pages/services/StorageSolutions.jsx";
import MovePlanning from "./pages/services/MovePlanning.jsx";
import OfficeRemovals from "./pages/services/OfficeRemovals.jsx";
import LastMinuteRemovals from "./pages/services/LastMinuteRemovals.jsx";
import AntiqueAndFineArts from "./pages/services/AntiqueAndFineArts.jsx";
import Derby from "./pages/locations/Derby.jsx";
import Matlock from "./pages/locations/Matlock.jsx";
import Chesterfield from "./pages/locations/Chesterfield.jsx";
import Alfreton from "./pages/locations/Alfreton.jsx";
const Testimonials = React.lazy(() => import("./pages/Testimonials.jsx"));
import FAQ from "./pages/FAQ.jsx";
import Contact from "./pages/Contact.jsx";
import AreasWeCover from "./pages/AreasWeCover.jsx";

const PackagingMaterial = React.lazy(() => import("./pages/PackagingMaterial.jsx"));

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
    title: "About Us",
    to: "/about-us",
    icon: <Info className="h-4 w-4" />,
    page: <AboutUs />,
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
  {
    title: "Terms & Conditions",
    to: "/terms-and-conditions",
    page: <TermsAndConditions />,
  },
  {
    title: "Home Removals",
    to: "/services/home-removals",
    page: <HomeRemovals />,
  },
  {
    title: "Packing Services",
    to: "/services/packing-services",
    page: <PackingServices />,
  },
  {
    title: "Storage Solutions",
    to: "/services/storage-solutions",
    page: <StorageSolutions />,
  },
  {
    title: "Move Planning",
    to: "/services/move-planning",
    page: <MovePlanning />,
  },
  {
    title: "Office Removals",
    to: "/services/office-removals",
    page: <OfficeRemovals />,
  },
  {
    title: "Last Minute Removals",
    to: "/services/last-minute-removals",
    page: <LastMinuteRemovals />,
  },
  {
    title: "Antique and Fine Arts",
    to: "/services/antique-and-fine-arts",
    page: <AntiqueAndFineArts />,
  },
  {
    title: "Derby",
    to: "/locations/derby",
    page: <Derby />,
  },
  {
    title: "Matlock",
    to: "/locations/matlock",
    page: <Matlock />,
  },
  {
    title: "Chesterfield",
    to: "/locations/chesterfield",
    page: <Chesterfield />,
  },
  {
    title: "Alfreton",
    to: "/locations/alfreton",
    page: <Alfreton />,
  },
];
