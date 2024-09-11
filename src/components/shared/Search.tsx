import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command";

  import {
    CalendarIcon,
    EnvelopeClosedIcon,
    BackpackIcon,
    GearIcon,
    PersonIcon
  } from "@radix-ui/react-icons";
import { useState } from "react";

const Search = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Command className="rounded-lg border shadow-md md:min-w-[350px]"
    onBlur={() => setIsFocused(false)}>
      <CommandInput placeholder="Type a command or search..."
      onFocus={() => setIsFocused(true)} />
      {isFocused && (
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <CalendarIcon className="mr-2 h-4 w-4" />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <BackpackIcon className="mr-2 h-4 w-4" />
            <span>Assignments</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <PersonIcon className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <EnvelopeClosedIcon className="mr-2 h-4 w-4" />
            <span>Mail</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <GearIcon className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
      )}
    </Command>
  );
};

export default Search