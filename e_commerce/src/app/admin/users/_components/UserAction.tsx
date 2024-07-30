"use client";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { deleteUser } from "../../_actions/users";

export function DeleteDropdownItem({ id }: { id: string }) {
  const [isPending, startTransiton] = useTransition();
  const router = useRouter();

  return (
    <>
      <DropdownMenuItem
        variant="destructive"
        disabled={isPending}
        onClick={() =>
          startTransiton(async () => {
            await deleteUser(id);
            router.refresh();
          })
        }
      >
        Delete
      </DropdownMenuItem>
    </>
  );
}
