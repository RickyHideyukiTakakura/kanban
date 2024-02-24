import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useMutation } from "@tanstack/react-query";
import {
  Check,
  CheckCheck,
  ChevronRight,
  ListTodo,
  MoreHorizontal,
  Pencil,
  X,
} from "lucide-react";
import { deleteCard } from "../api/delete-card";

export interface DropdownMenuCardProps {
  id: string;
}

export function DropdownMenuCard({ id }: DropdownMenuCardProps) {
  const { mutateAsync: deleteCardFn } = useMutation({
    mutationFn: deleteCard,
  });

  async function handleDeleteCard() {
    await deleteCardFn({ id });
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="mb-1 rounded-full bg-violet-200 p-2 text-violet-900 hover:bg-violet-400">
        <MoreHorizontal className="h-4 w-4" />
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className="z-50 w-40 space-y-1 rounded border bg-white p-1 shadow-md">
        <DropdownMenu.Item className="flex w-full items-center justify-between gap-1 rounded-sm px-4 text-violet-900 hover:bg-orange-200 hover:text-orange-900">
          Editar
          <Pencil className="h-4 w-4" />
        </DropdownMenu.Item>

        <DropdownMenu.Item
          className="flex w-full items-center justify-between gap-1 rounded-sm px-4 text-violet-900 hover:bg-red-200 hover:text-red-900"
          onClick={handleDeleteCard}
        >
          Deletar
          <X className="h-4 w-4" />
        </DropdownMenu.Item>

        <DropdownMenu.Separator className="w-full border border-violet-50" />

        <DropdownMenu.Sub>
          <DropdownMenu.SubTrigger className="flex w-full items-center justify-between gap-1 rounded-sm px-4 text-violet-900 hover:bg-violet-200 hover:text-violet-900">
            Mais
            <ChevronRight className="h-4 w-4" />
          </DropdownMenu.SubTrigger>

          <DropdownMenu.SubContent className="z-50 w-40 space-y-1 rounded border bg-white p-1 shadow-md">
            <DropdownMenu.Item className="flex w-full items-center justify-between gap-1 rounded-sm px-4 text-violet-900 hover:bg-red-200 hover:text-red-900">
              A fazer
              <ListTodo className="h-4 w-4" />
            </DropdownMenu.Item>

            <DropdownMenu.Item className="flex w-full items-center justify-between gap-1 rounded-sm px-4 text-violet-900 hover:bg-orange-200 hover:text-orange-900">
              Fazendo
              <Check className="h-4 w-4" />
            </DropdownMenu.Item>

            <DropdownMenu.Item className="flex w-full items-center justify-between gap-1 rounded-sm px-4 text-violet-900 hover:bg-emerald-200 hover:text-emerald-900">
              Feito
              <CheckCheck className="h-4 w-4" />
            </DropdownMenu.Item>
          </DropdownMenu.SubContent>
        </DropdownMenu.Sub>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
