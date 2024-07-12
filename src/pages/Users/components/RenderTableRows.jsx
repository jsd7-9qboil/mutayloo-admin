import React from "react";
import moment from "moment";

// icons
import { MoreHorizontal } from "lucide-react";
// components
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import EditProfile from "./EditProfile";

const RenderTableRows = ({ users }) => {
  return users.map((user) => (
    <TableRow key={user._id} className="hover:bg-accent">
      <TableCell>
        <div className="font-medium">
          {user.fname} {user.lname}
        </div>
        <div className="text-sm text-muted-foreground md:inline">
          {user.email}
        </div>
      </TableCell>
      <TableCell className="sm:table-cell text-center">
        <Badge
          variant="outline"
          className={user.isAdmin ? "bg-primary text-white" : "bg-secondary"}
        >
          {user.isAdmin ? "Admin" : "Customer"}
        </Badge>
      </TableCell>
      <TableCell className="md:table-cell">
        {moment(user.createdAt).format("DD-MM-YYYY")}
      </TableCell>
      <TableCell>
        <div className="hidden lg:flex gap-4 justify-end">
          <EditProfile />

          <Button variant="outline" size="sm">
            Delete
          </Button>
        </div>
        <div className="lg:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button aria-haspopup="true" size="icon" variant="ghost">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </TableCell>
    </TableRow>
  ));
};

export default RenderTableRows;
