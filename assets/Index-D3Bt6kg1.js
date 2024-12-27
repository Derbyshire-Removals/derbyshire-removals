import{j as e}from"./ui-vendor-3hGaalYV.js";import{b as o,L as x,r as f}from"./react-vendor-CE3g5kWp.js";import{H as j}from"./Helmet-wJj5apoZ.js";import{H as y,F as b}from"./Footer-Ci-0j8G6.js";import{o as N,s as t,b as w,d as k,u as C,t as S,F as T,C as z}from"./ContactFormFields-B9MSW45d.js";import{B as P}from"./button-DRzlghzS.js";import{C as E,a as M,b as W,c as A,d as F}from"./card-DpFwGKjy.js";import{c,P as H,H as u,a as q}from"./index-C5GysoLN.js";import{T as p}from"./truck-JY2PVj6V.js";import{B as O}from"./building-2-KEDICdA1.js";import{C as R}from"./clock-DRLpG8Dc.js";import{C as B}from"./circle-check-big-DP9f25fs.js";import{G as D}from"./GetInTouch-CJ7iBEqK.js";import{C as I}from"./clipboard-check-BfM4KIWb.js";import{S as L,E as h}from"./star-BEu9VPcj.js";import"./query-vendor-CUgj9Mo7.js";/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=c("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=c("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=c("Frame",[["line",{x1:"22",x2:"2",y1:"6",y2:"6",key:"15w7dq"}],["line",{x1:"22",x2:"2",y1:"18",y2:"18",key:"1ip48p"}],["line",{x1:"6",x2:"6",y1:"2",y2:"22",key:"a2lnyx"}],["line",{x1:"18",x2:"18",y1:"2",y2:"22",key:"8vb6jd"}]]),J=N({access_key:t().optional(),botcheck:w().optional(),page:t().optional(),name:t().min(2,{message:"Name must be at least 2 characters."}),email:t().email({message:"Invalid email address."}),phone:t().min(10,{message:"Phone number must be at least 10 digits."}),preferred_callback_date:k({required_error:"Please select a date."}),address:t().min(1,{message:"Address is required."})}),Q=()=>{const[r,s]=o.useState(""),[i,a]=o.useState(!1),[n,d]=o.useState(!1),l=C({resolver:S(J),defaultValues:{access_key:"0d86da93-9d03-48c0-a530-5992b2e26a1b",botcheck:void 0,page:"Homepage",name:"",email:"",phone:"",preferred_callback_date:void 0,address:""}}),g=async v=>{try{if((await(await fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(v,null,2)})).json()).success)s("Thank you for your submission! We appreciate your interest. One of our team members will be in touch with you shortly to discuss your request."),a(!0),d(!1);else throw new Error("Submission failed")}catch(m){d(!0),s("An error has occurred submitting the form. Please contact us directly by calling us or emailing us at info@derbyshireremovals.com"),console.error(m)}};return e.jsxs(T,{...l,children:[e.jsxs("form",{onSubmit:l.handleSubmit(g),className:"space-y-4",children:[e.jsx(z,{form:l}),r&&e.jsx("p",{className:`text-sm mb-4 ${n?"text-red-600":"text-green-600"}`,children:r}),e.jsx(P,{type:"submit",className:"w-full",disabled:i,children:"Submit Enquiry"})]}),e.jsxs("p",{className:"text-sm mt-4",children:["To help assess the move, we may need to visit your home/office. Alternatively, you can send us your videos via"," ",e.jsx("a",{href:"https://wa.me/441332314312?text=Hi!%20I'm%20interested%20in%20your%20removal%20services.%20Can%20you%20help%20me%20with%20a%20move?%20Here%20are%20some%20details:%0A-%20Pickup%20location:%20%5BEnter%20here%5D%0A-%20Delivery%20location:%20%5BEnter%20here%5D%0A-%20Preferred%20date:%20%5BEnter%20here%5D%0A-%20Additional%20information:%20%5BEnter%20here%5D%0ALooking%20forward%20to%20your%20reply!",target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 hover:underline",children:"WhatsApp"}),"."]})]})},V=()=>e.jsxs("section",{className:"relative bg-cover bg-center py-20 mt-[88px]",style:{backgroundImage:"url('images/van.jpg')"},role:"banner","aria-label":"Professional removals in Derbyshire banner",children:[e.jsx("div",{className:"absolute inset-0 bg-black opacity-50"}),e.jsxs("div",{className:"container mx-auto px-4 flex flex-wrap items-center justify-center relative z-10",children:[e.jsxs("div",{className:"w-full lg:w-1/2 mb-10 lg:mb-0 text-white text-center",children:[e.jsx("h1",{className:"text-4xl font-bold mb-4",children:"Professional removals in Derbyshire"}),e.jsx("p",{className:"text-xl mb-6",children:"Handling with care since 1988"}),e.jsx("div",{className:"flex justify-center items-center mt-8",children:e.jsx("a",{href:"https://apps.derbyshire.gov.uk/applications/trusted-trader/profile.asp?tid=56236",children:e.jsx("img",{src:"images/derbyshire-trusted-trader-logo.gif",alt:"Derbyshire County Council Trusted Trader Certification Badge",className:"h-24 w-auto"})})})]}),e.jsx("div",{className:"w-full lg:w-1/2 lg:pl-10",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",role:"region","aria-label":"Get free quote form",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 mb-4",children:"Get Free Quote"}),e.jsx(Q,{})]})})]})]}),$=({icon:r,title:s,description:i,to:a})=>e.jsx(x,{to:a,"aria-label":`Learn more about ${s}`,children:e.jsxs(E,{className:"transition-all duration-300 hover:shadow-lg group cursor-pointer",children:[e.jsx(M,{children:e.jsxs(W,{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center",children:[o.cloneElement(r,{"aria-hidden":"true"}),e.jsx("span",{className:"ml-2",children:s})]}),e.jsx(_,{className:"h-5 w-5 transform transition-transform group-hover:translate-x-1","aria-hidden":"true"})]})}),e.jsx(A,{children:e.jsx(F,{children:i})})]})}),K=()=>{const r=[{icon:e.jsx(p,{size:24}),title:"Home Removals",description:"Full service home moving solutions",to:"/services/home-removals"},{icon:e.jsx(H,{size:24}),title:"Packing Services",description:"Professional packing for a stress-free move",to:"/services/packing-services"},{icon:e.jsx(u,{size:24}),title:"Storage Solutions",description:"Secure storage options for your belongings",to:"/storage"},{icon:e.jsx(G,{size:24}),title:"Move Planning",description:"Comprehensive move planning and management",to:"/services/move-planning"},{icon:e.jsx(O,{size:24}),title:"Office Removals",description:"Efficient relocation services for businesses",to:"/services/office-removals"},{icon:e.jsx(R,{size:24}),title:"Last Minute Removals",description:"Quick and reliable moving solutions for urgent needs",to:"/services/last-minute-removals"},{icon:e.jsx(U,{size:24}),title:"Antique and Fine Arts",description:"Specialized handling for valuable and delicate items",to:"/services/antique-and-fine-arts"}];return e.jsx("section",{id:"services",className:"py-16",children:e.jsxs("div",{className:"container mx-auto px-4",children:[e.jsx("h2",{className:"text-3xl font-bold text-center mb-10",children:"Our Services"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",role:"list","aria-label":"Our services",children:r.map((s,i)=>e.jsx("div",{role:"listitem",children:e.jsx($,{...s})},i))})]})})},Y=()=>{const r=["Over 30 years of experience","Fully insured and licensed","Customized moving plans","Competitive pricing","High-quality packing materials","Excellent customer service"];return e.jsx("section",{id:"why-us",className:"py-16 bg-gray-100",children:e.jsxs("div",{className:"container mx-auto px-4",children:[e.jsx("h2",{className:"text-3xl font-bold text-center mb-10",children:"Why Choose Us"}),e.jsx("div",{className:"max-w-4xl mx-auto",children:e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center md:justify-items-start",children:r.map((s,i)=>e.jsxs("div",{className:"flex items-start w-full max-w-xs",children:[e.jsx(B,{className:"text-green-500 mr-3 flex-shrink-0 mt-1",size:24}),e.jsx("span",{className:"text-lg",children:s})]},i))})})]})})},X=()=>{const r=[{name:"East Midlands",shires:["Derbyshire","Leicestershire","Lincolnshire","Northamptonshire","Nottinghamshire","Rutland"]},{name:"West Midlands",shires:["Herefordshire","Shropshire","Staffordshire","Warwickshire","West Midlands","Worcestershire"]}];return e.jsx("section",{id:"areas",className:"py-16 bg-gray-100",children:e.jsxs("div",{className:"container mx-auto px-4",children:[e.jsx("h2",{className:"text-3xl font-bold text-center mb-10",children:"Areas We Cover"}),e.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:r.map((s,i)=>e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[e.jsx("h3",{className:"text-2xl font-semibold mb-4",children:s.name}),e.jsx("ul",{className:"grid grid-cols-2 gap-2",children:s.shires.map((a,n)=>e.jsx("li",{className:"text-lg",children:a},n))})]},i))}),e.jsxs("p",{className:"text-center mt-10 text-lg",children:["While we specialize in the East and West Midlands, our services extend nationwide. Our extensive network allows us to provide professional removal services across the entire UK. Whether you're moving within the Midlands or to any other part of the country, we've got you covered. For a detailed list of towns we serve, please visit our  ",e.jsx(x,{to:"/areas-we-cover",className:"text-blue-600 hover:underline",children:"areas we cover"})," page. Contact us for more information about our coverage in your specific area."]})]})})},Z=({icon:r,title:s,description:i})=>e.jsxs("div",{className:"flex flex-col items-center text-center",children:[e.jsx("div",{className:"bg-[#071059] text-white p-4 rounded-full mb-4",children:r}),e.jsx("h3",{className:"text-xl font-semibold mb-2",children:s}),e.jsx("p",{children:i})]}),ee=()=>{const r=[{icon:e.jsx(q,{size:24}),title:"1. Initial Contact",description:"Reach out to us for a free quote"},{icon:e.jsx(I,{size:24}),title:"2. Plan Your Move",description:"We'll create a customized moving plan"},{icon:e.jsx(p,{size:24}),title:"3. Moving Day",description:"Our team arrives to handle your move"},{icon:e.jsx(u,{size:24}),title:"4. Settle In",description:"Relax in your new home"}];return e.jsx("section",{className:"py-16 bg-gray-100",children:e.jsxs("div",{className:"container mx-auto px-4",children:[e.jsx("h2",{className:"text-3xl font-bold text-center mb-10",children:"How We Work"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",children:r.map((s,i)=>e.jsx(Z,{...s},i))})]})})},se=[{name:"James Thompson",review:"Great guys, great service. Gave support at a very problematic time."},{name:"Emily Parker",review:"The firm did everything they said they would do on the phone before coming with no stress at all. Excellent job."},{name:"Oliver Wright",review:"A firm that lives up to its reputation as being a truly Trusted Trader. Professional, friendly, genuinely took the pressure off a very emotional move."}],re=()=>e.jsx("section",{className:"py-16 bg-gray-100",children:e.jsxs("div",{className:"container mx-auto px-4",children:[e.jsx("h2",{className:"text-3xl font-bold text-center mb-10",children:"What Our Customers Say"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:se.map((r,s)=>e.jsxs("article",{className:"bg-white p-6 rounded-lg shadow-md",itemScope:!0,itemType:"https://schema.org/Review",children:[e.jsx("div",{className:"flex mb-3",children:[...Array(5)].map((i,a)=>e.jsx(L,{className:"h-5 w-5 text-yellow-400 fill-current"},a))}),e.jsxs("p",{className:"text-gray-600 mb-4 italic",itemProp:"reviewBody",children:['"',r.review,'"']}),e.jsx("p",{className:"font-semibold text-right",itemProp:"author",children:r.name})]},s))}),e.jsx("div",{className:"text-center mt-8",children:e.jsxs("p",{className:"text-gray-600 inline-block",children:["Check out our reviews on: "," ",e.jsxs("a",{href:"https://www.google.com/search?q=derbyshrie+removals#lrd=0x48798e96bb172501:0x823e3a1119d6cc3c,1,,,,",target:"_blank",rel:"noopener noreferrer",className:"text-primary hover:text-primary-dark underline inline-flex items-center gap-1",children:["Google ",e.jsx(h,{className:"h-3 w-3"})]})," ","and"," ",e.jsxs("a",{href:"https://apps.derbyshire.gov.uk/applications/trusted-trader/profile.asp?tid=56236",target:"_blank",rel:"noopener noreferrer",className:"text-primary hover:text-primary-dark underline inline-flex items-center gap-1",children:["Trusted Trader ",e.jsx(h,{className:"h-3 w-3"})]})]})})]})}),ie=()=>e.jsx("section",{className:"py-16 bg-gray-50",children:e.jsx("div",{className:"container mx-auto px-4",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 items-center",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-3xl font-bold mb-4",children:"Professional Moving Services"}),e.jsx("p",{className:"text-gray-600 mb-6",children:"Our experienced team ensures your belongings are handled with the utmost care, making your move stress-free and efficient."})]}),e.jsx("div",{children:e.jsx("img",{src:"/images/business/13.jpg",alt:"Professional movers carefully packing items into boxes",className:"rounded-lg shadow-lg w-full h-auto",loading:"lazy"})})]})})}),ae=()=>e.jsx("section",{className:"py-16",children:e.jsx("div",{className:"container mx-auto px-4",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 items-center",children:[e.jsx("div",{children:e.jsx("img",{src:"/images/business/8.jpg",alt:"Modern office space being prepared for relocation",className:"rounded-lg shadow-lg w-full h-auto",loading:"lazy"})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-3xl font-bold mb-4",children:"Trusted by Businesses"}),e.jsx("p",{className:"text-gray-600 mb-6",children:"From small offices to large corporations, we provide reliable commercial moving services that minimize downtime and protect your valuable assets."})]})]})})}),te=()=>e.jsx("section",{className:"py-16 bg-gray-50",children:e.jsx("div",{className:"container mx-auto px-4",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 items-center",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-3xl font-bold mb-4",children:"Secure Storage Solutions"}),e.jsx("p",{className:"text-gray-600 mb-6",children:"Need temporary storage? Our secure facilities provide the perfect solution for both short-term and long-term storage needs."})]}),e.jsx("div",{children:e.jsx("img",{src:"/images/business/storage.jpg",alt:"Clean and organized storage facility with modern security features",className:"rounded-lg shadow-lg w-full h-auto",loading:"lazy"})})]})})}),we=()=>(f.useEffect(()=>{window.scrollTo(0,0),console.log("Index page mounted")},[]),e.jsxs("div",{className:"min-h-screen bg-gray-100",children:[e.jsxs(j,{children:[e.jsx("title",{children:"Derbyshire Removals - Professional Moving Services Since 1988"}),e.jsx("meta",{name:"description",content:"Trusted removal services across East & West Midlands. Family-run business since 1988 offering home removals, office relocations, packing & storage solutions. Free quotes available."}),e.jsx("meta",{name:"keywords",content:"removals derby, house removals derbyshire, office removals derby, storage solutions derby, packing services derbyshire"}),e.jsx("link",{rel:"canonical",href:"https://derbyshireremovals.com/"})]}),e.jsx(y,{}),e.jsxs("main",{children:[e.jsx(V,{}),e.jsx(re,{}),e.jsx(ie,{}),e.jsx(K,{}),e.jsx(ae,{}),e.jsx(Y,{}),e.jsx(te,{}),e.jsx(ee,{}),e.jsx(X,{}),e.jsx(D,{})]}),e.jsx(b,{})]}));export{we as default};
