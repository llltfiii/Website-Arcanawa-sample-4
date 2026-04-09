"use client";

import * as React from "react";
import { Command as CommandPrimitive } from "cmdk";
import { SearchIcon } from "lucide-react";

import { cn } from "./utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./dialog";

/* ================= ROOT ================= */

function Command({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive>) {
  return (
    <CommandPrimitive
      data-slot="command"
      className={cn(
        "flex h-full w-full flex-col overflow-hidden rounded-md",
        "bg-popover text-popover-foreground",
        className
      )}
      {...props}
    />
  );
}

/* ================= DIALOG ================= */

function CommandDialog({
  title = "Command Palette",
  description = "Search for a command to run...",
  children,
  ...props
}: React.ComponentProps<typeof Dialog> & {
  title?: string;
  description?: string;
}) {
  return (
    <Dialog {...props}>
      <DialogHeader className="sr-only">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>

      <DialogContent className="overflow-hidden p-0">
        <Command
          className={cn(
            // Group heading
            "**:[cmdk-group-heading]:px-2",
            "**:[cmdk-group-heading]:text-muted-foreground",
            "**:[cmdk-group-heading]:font-medium",

            // Group container
            "**:[cmdk-group]:px-2",
            "**:[cmdk-group]:not([hidden])~[cmdk-group]:pt-0",

            // Input wrapper & icon
            "**:[cmdk-input-wrapper_svg]:h-5",
            "**:[cmdk-input-wrapper_svg]:w-5",

            // Input
            "**:[cmdk-input]:h-12",

            // Items
            "**:[cmdk-item]:px-2",
            "**:[cmdk-item]:py-3",

            // Item icons
            "**:[cmdk-item_svg]:h-5",
            "**:[cmdk-item_svg]:w-5",

            // Custom slot fix (IMPORTANT FIX)
            "**:[data-slot=command-input-wrapper]:h-12"
          )}
        >
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
}

/* ================= INPUT ================= */

function CommandInput({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Input>) {
  return (
    <div
      data-slot="command-input-wrapper"
      className="flex h-9 items-center gap-2 border-b px-3"
    >
      <SearchIcon className="size-4 shrink-0 opacity-50" />

      <CommandPrimitive.Input
        data-slot="command-input"
        className={cn(
          "flex h-10 w-full rounded-md bg-transparent py-3 text-sm",
          "placeholder:text-muted-foreground",
          "outline-hidden",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    </div>
  );
}

/* ================= LIST ================= */

function CommandList({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.List>) {
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={cn(
        "max-h-75 overflow-y-auto overflow-x-hidden scroll-py-1",
        className
      )}
      {...props}
    />
  );
}

/* ================= EMPTY ================= */

function CommandEmpty(
  props: React.ComponentProps<typeof CommandPrimitive.Empty>
) {
  return (
    <CommandPrimitive.Empty
      data-slot="command-empty"
      className="py-6 text-center text-sm"
      {...props}
    />
  );
}

/* ================= GROUP ================= */

function CommandGroup({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Group>) {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cn(
        "text-foreground overflow-hidden p-1",

        "**:[cmdk-group-heading]:px-2",
        "**:[cmdk-group-heading]:py-1.5",
        "**:[cmdk-group-heading]:text-xs",
        "**:[cmdk-group-heading]:font-medium",
        "**:[cmdk-group-heading]:text-muted-foreground",

        className
      )}
      {...props}
    />
  );
}

/* ================= SEPARATOR ================= */

function CommandSeparator({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>) {
  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      className={cn("bg-border -mx-1 h-px", className)}
      {...props}
    />
  );
}

/* ================= ITEM ================= */

function CommandItem({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Item>) {
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={cn(
        "relative flex cursor-default items-center gap-2 rounded-sm",
        "px-2 py-1.5 text-sm select-none outline-hidden",

        // states
        "data-[selected=true]:bg-accent",
        "data-[selected=true]:text-accent-foreground",
        "data-[disabled=true]:pointer-events-none",
        "data-[disabled=true]:opacity-50",

        // icon rules
        "**:svg:pointer-events-none",
        "**:svg:shrink-0",
        "**:svg:not([class*='size-']):size-4",
        "**:svg:not([class*='text-']):text-muted-foreground",

        className
      )}
      {...props}
    />
  );
}

/* ================= SHORTCUT ================= */

function CommandShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="command-shortcut"
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}

/* ================= EXPORT ================= */

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};