 import React from "react";
 
 const customers = [
   {
     name: "Ralph Edwards",
     phone: "(405) 555-0128",
     status: "Open",
     rate: "$78.00",
     balance: "-$105.55",
     deposit: "$293.01",
   },
   {
     name: "Floyd Miles",
     phone: "(480) 555-0103",
     status: "Paid",
     rate: "$40.00",
     balance: "$275.43",
     deposit: "$710.68",
   },
   {
     name: "Darlene Robertson",
     phone: "(808) 555-0111",
     status: "Open",
     rate: "$77.00",
     balance: "-$778.35",
     deposit: "$169.43",
   },
   {
     name: "Albert Flores",
     phone: "(316) 555-0116",
     status: "Inactive",
     rate: "$85.00",
     balance: "$928.41",
     deposit: "$779.58",
   },
   {
     name: "Devon Lane",
     phone: "(217) 555-0113",
     status: "Paid",
     rate: "$56.00",
     balance: "$256.35",
     deposit: "$896.65",
   },
 ];
 
 const statusStyle = (status) => {
   if (status === "Paid")
     return "bg-green-100 text-green-600";
   if (status === "Open")
     return "bg-indigo-100 text-indigo-600";
   return "bg-gray-200 text-gray-600";
 };
 
 const balanceStyle = (balance) => {
   return balance.includes("-")
     ? "text-red-500"
     : "text-green-600";
 };
 
 export default function Page() {
   return (
     <div className="min-h-screen bg-gray-300 flex items-center justify-center p-20">
       <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg overflow-hidden">
         
         {/* Header */}
         <div className="bg-slate-500 text-white grid grid-cols-5 px-2 py-2 text-sm font-semibold tracking-wider">
           <p>CUSTOMER</p>
           <p>STATUS</p>
           <p>RATE</p>
           <p>BALANCE</p>
           <p>DEPOSIT</p>
         </div>
 
         {/* Rows */}
         {customers.map((c, index) => (
           <div
             key={index}
             className="grid grid-cols-5 px-2 py-2 items-center border-b bg-gray-100 even:bg-white"
           >
             {/* Customer */}
             <div>
               <p className="font-semibold text-lg">{c.name}</p>
               <p className="text-white-400 text-sm">{c.phone}</p>
             </div>
 
             {/* Status */}
             <div>
               <span
                 className={`px-6 py-2 rounded-full text-sm font-small ${statusStyle(
                   c.status
                 )}`}
               >
                 {c.status}
               </span>
             </div>
 
             {/* Rate */}
             <div className="text-gray-600 font-small">
               {c.rate}
               <div className="text-xs text-gray-400">USD</div>
             </div>
 
             {/* Balance */}
             <div className={`font-semibold ${balanceStyle(c.balance)}`}>
               {c.balance}
               <div className="text-xs text-gray-600">USD</div>
             </div>
 
             {/* Deposit */}
             <div className="text-gray-600 font-small">
               {c.deposit}
               <div className="text-xs text-gray-400">USD</div>
             </div>
           </div>
         ))}
 
         {/* Footer */}
         <div className="flex justify-between items-center px-8 py-4 text-gray-500 text-sm">
           <p>1-10 of 97</p>
           <div className="flex items-center gap-3">
             <p>Rows per page: 10</p>
             <div className="flex gap-2">
               <button className="w-8 h-8 border rounded-md">&lt;</button>
               <button className="w-8 h-8 border rounded-md">&gt;</button>
             </div>
           </div>
         </div>
 
       </div>
     </div>
   );
 }