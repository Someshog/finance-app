"use client";

import { Check, ChevronsUpDown, ShieldCheck, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRole, Role } from "@/hooks/use-role";

export const RoleSwitcher = () => {
  const { role, setRole } = useRole();

  const onSelect = (newRole: Role) => {
    setRole(newRole);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="h-9 w-full bg-white/10 text-white border-none hover:bg-white/20 hover:text-white lg:w-auto"
        >
          {role === "admin" ? (
            <ShieldCheck className="mr-2 size-4" />
          ) : (
            <User className="mr-2 size-4" />
          )}
          <span className="capitalize">{role}</span>
          <ChevronsUpDown className="ml-2 size-4 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[150px]">
        <DropdownMenuItem
          onClick={() => onSelect("admin")}
          className="flex items-center justify-between"
        >
          <div className="flex items-center">
            <ShieldCheck className="mr-2 size-4" />
            Admin
          </div>
          {role === "admin" && <Check className="size-4" />}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => onSelect("viewer")}
          className="flex items-center justify-between"
        >
          <div className="flex items-center">
            <User className="mr-2 size-4" />
            Viewer
          </div>
          {role === "viewer" && <Check className="size-4" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
