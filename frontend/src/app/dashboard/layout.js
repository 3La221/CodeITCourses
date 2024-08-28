"use client"
import { DashboardSideBar } from "./(components)/DashboardSideBar";





export default function DashboardLayout({ children }) {
  

  return (
      <DashboardSideBar>
      {children}
    </DashboardSideBar>
    
     
    
  );
}
