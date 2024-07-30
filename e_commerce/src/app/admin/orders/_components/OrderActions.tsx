"use client";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { deleteOrder } from "../../_actions/orders";

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
            await deleteOrder(id);
            router.refresh();
          })
        }
      >
        Delete
      </DropdownMenuItem>
    </>
  );
}
