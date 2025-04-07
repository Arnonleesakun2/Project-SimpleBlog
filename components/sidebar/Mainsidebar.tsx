import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Theme from "./Theme";

const Mainsidebar = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 sticky top-0 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center justify-between px-4 w-full">
            <div className="">
              <SidebarTrigger className="-ml-1" />
            </div>
            <Theme />
          </div>
        </header>
        <main className="maincontainer">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Mainsidebar;
