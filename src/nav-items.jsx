import React, { lazy } from 'react';
import { HomeIcon, CheckSquare, Package, Box, MessageSquare, HelpCircle, PhoneCall, MapPin, Info } from "lucide-react";

// Lazy load all pages
const Index = lazy(() => import("./pages/Index.jsx"));
const MoveChecklist = lazy(() => import("./pages/MoveChecklist.jsx"));
const Storage = lazy(() => import("./pages/Storage.jsx"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions.jsx"));
const AboutUs = lazy(() => import("./pages/AboutUs.jsx"));
const HomeRemovals = lazy(() => import("./pages/services/HomeRemovals.jsx"));
const PackingServices = lazy(() => import("./pages/services/PackingServices.jsx"));
const StorageSolutions = lazy(() => import("./pages/services/StorageSolutions.jsx"));
const MovePlanning = lazy(() => import("./pages/services/MovePlanning.jsx"));
const OfficeRemovals = lazy(() => import("./pages/services/OfficeRemovals.jsx"));
const LastMinuteRemovals = lazy(() => import("./pages/services/LastMinuteRemovals.jsx"));
const AntiqueAndFineArts = lazy(() => import("./pages/services/AntiqueAndFineArts.jsx"));
const Derby = lazy(() => import("./pages/locations/Derby.jsx"));
const Matlock = lazy(() => import("./pages/locations/Matlock.jsx"));
const Chesterfield = lazy(() => import("./pages/locations/Chesterfield.jsx"));
const Alfreton = lazy(() => import("./pages/locations/Alfreton.jsx"));
const Testimonials = lazy(() => import("./pages/Testimonials.jsx"));
const FAQ = lazy(() => import("./pages/FAQ.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const AreasWeCover = lazy(() => import("./pages/AreasWeCover.jsx"));
const PackagingMaterial = lazy(() => import("./pages/PackagingMaterial.jsx"));

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
    page: <PackagingMaterial />,
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
    page: <Testimonials />,
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
