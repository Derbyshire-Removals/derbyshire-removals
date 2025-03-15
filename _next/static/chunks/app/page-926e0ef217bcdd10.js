(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8974],{1334:(e,s,r)=>{"use strict";r.d(s,{default:()=>h});var t=r(5155),a=r(2115),i=r(2177),l=r(221),o=r(5594),n=r(2219),m=r(6119),c=r(6932);let d=o.Ik({access_key:o.Yj().optional(),botcheck:o.zM().optional(),page:o.Yj().optional(),name:o.Yj().min(2,{message:"Name must be at least 2 characters."}),email:o.Yj().email({message:"Invalid email address."}),phone:o.Yj().min(10,{message:"Phone number must be at least 10 digits."}),preferred_callback_time:o.Yj({required_error:"Please select a preferred time."}),moving_from:o.Yj().min(1,{message:"Moving From address is required."}),moving_to:o.Yj().optional()}),u=()=>{let[e,s]=a.useState(""),[r,o]=a.useState(!1),[u,h]=a.useState(!1),b=(0,i.mN)({resolver:(0,l.u)(d),defaultValues:{access_key:"0d86da93-9d03-48c0-a530-5992b2e26a1b",botcheck:void 0,page:"Homepage",name:"",email:"",phone:"",preferred_callback_time:"anytime",moving_from:"",moving_to:""}}),p=async e=>{try{let r=await fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e,null,2)});if((await r.json()).success)s("Thank you for your submission! We appreciate your interest. One of our team members will be in touch with you shortly to discuss your request."),o(!0),h(!1);else throw Error("Submission failed")}catch(e){h(!0),s("An error has occurred submitting the form. Please contact us directly by calling us or emailing us at info@derbyshireremovals.com"),console.error(e)}};return(0,t.jsxs)(m.lV,{...b,children:[(0,t.jsxs)("form",{onSubmit:b.handleSubmit(p),className:"space-y-4",children:[(0,t.jsx)(c.A,{form:b}),e&&(0,t.jsx)("p",{className:"text-sm mb-4 ".concat(u?"text-red-600":"text-green-600"),children:e}),(0,t.jsx)(n.$,{type:"submit",className:"w-full",disabled:r,children:"Submit Enquiry"})]}),(0,t.jsxs)("p",{className:"text-sm mt-4",children:["To help assess the move, we may need to visit your home/office. Alternatively, you can send us your videos via"," ",(0,t.jsx)("a",{href:"https://wa.me/447425557000?text=Hi!%20I'm%20interested%20in%20your%20removal%20services.%20Can%20you%20help%20me%20with%20a%20move?%20Here%20are%20some%20details:%0A-%20Pickup%20location:%20%5BEnter%20here%5D%0A-%20Delivery%20location:%20%5BEnter%20here%5D%0A-%20Preferred%20date:%20%5BEnter%20here%5D%0A-%20Additional%20information:%20%5BEnter%20here%5D%0ALooking%20forward%20to%20your%20reply!",target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 hover:underline",children:"WhatsApp"}),"."]})]})},h=()=>(0,t.jsxs)("section",{className:"relative bg-cover bg-center py-20 mt-[88px]",style:{backgroundImage:"url('/images/van.jpg')"},role:"banner","aria-label":"Professional removals in Derbyshire banner",children:[(0,t.jsx)("div",{className:"absolute inset-0 bg-black opacity-50"}),(0,t.jsxs)("div",{className:"container mx-auto px-4 flex flex-wrap items-center justify-center relative z-10",children:[(0,t.jsxs)("div",{className:"w-full lg:w-1/2 mb-10 lg:mb-0 text-white text-center",children:[(0,t.jsx)("h1",{className:"text-4xl font-bold mb-4",children:"Professional removals in Derbyshire"}),(0,t.jsx)("p",{className:"text-xl mb-6",children:"Handling with care since 1988"}),(0,t.jsx)("div",{className:"flex justify-center items-center mt-8",children:(0,t.jsx)("a",{href:"https://apps.derbyshire.gov.uk/applications/trusted-trader/profile.asp?tid=56236",children:(0,t.jsx)("img",{src:"/images/derbyshire-trusted-trader-logo.gif",alt:"Derbyshire County Council Trusted Trader Certification Badge",className:"h-24 w-auto"})})})]}),(0,t.jsx)("div",{className:"w-full lg:w-1/2 lg:pl-10",children:(0,t.jsxs)("div",{className:"bg-white p-6 rounded-lg shadow-md",role:"region","aria-label":"Get free quote form",children:[(0,t.jsx)("h2",{className:"text-2xl font-semibold text-gray-800 mb-4",children:"Get Free Quote"}),(0,t.jsx)(u,{})]})})]})]})},8250:(e,s,r)=>{Promise.resolve().then(r.t.bind(r,6874,23)),Promise.resolve().then(r.bind(r,1028)),Promise.resolve().then(r.bind(r,1334))}},e=>{var s=s=>e(e.s=s);e.O(0,[8150,3926,9387,8441,1684,7358],()=>s(8250)),_N_E=e.O()}]);