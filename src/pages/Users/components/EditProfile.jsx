import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { updateUser } from "@/api/users";

const EditProfile = ({ user }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {/* name */}
          <div className="grid grid-cols-2 items-center gap-4">
            <div className="grid w-full items-center gap-1.5">
              <Label>First Name</Label>
              <Input
                type="text"
                id="fname"
                placeholder="First Name"
                defaultValue={user.fname}
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label>Last Name</Label>
              <Input
                type="text"
                id="lname"
                placeholder="Last Name"
                defaultValue={user.lname}
              />
            </div>
          </div>

          {/* email and date of birth */}
          <div className="grid grid-cols-2 items-center gap-4">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="Email"
                defaultValue={user.email}
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label>Date of birth</Label>
              <Input disabled type="date" />
            </div>
          </div>

          {/* password and role */}
          <div className="grid grid-cols-2 items-center gap-4">
            <div className="grid w-full items-center gap-1.5">
              <Label>Password</Label>
              <Input disabled type="text" placeholder="********" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label>Role</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue
                    placeholder={user.isAdmin ? "Admin" : "Customer"}
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="customer">Customer</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfile;
