"use client";

import {
  Bell,
  ChevronsUpDown,
  LogOut,
  LogIn,
  ClipboardCopy,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
  useUser,
} from "@clerk/nextjs";

export function NavUser() {
  const { isMobile } = useSidebar();
  const { user, isSignedIn } = useUser();
  console.log(user);
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              {isSignedIn ? (
                <>
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage src={user.imageUrl} alt="@shadcn" />
                    <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">
                      {user.fullName}
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">Login Please</span>
                  </div>
                </>
              )}

              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuGroup>
              <SignedIn>
                <SignOutButton>
                  <DropdownMenuItem>
                    <LogOut />
                    Log out
                  </DropdownMenuItem>
                </SignOutButton>
              </SignedIn>
              <SignedOut>
                <SignInButton mode="modal">
                  <DropdownMenuItem>
                    <LogIn />
                    Login
                  </DropdownMenuItem>
                </SignInButton>
                <SignUpButton mode="modal">
                  <DropdownMenuItem>
                    <ClipboardCopy />
                    Register
                  </DropdownMenuItem>
                </SignUpButton>
              </SignedOut>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
