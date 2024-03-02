import { zodResolver } from "@hookform/resolvers/zod";
import * as Dialog from "@radix-ui/react-dialog";
import { useMutation } from "@tanstack/react-query";
import { Plus, X } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CreateCardBody, createCard } from "../api/create-card";
import { queryClient } from "../lib/react-query";

const newCardSchema = z.object({
  title: z.string().min(1),
  description: z.string(),
  status: z.enum(["do", "doing", "done"]),
  tags: z.string(),
});

export type NewCardSchema = z.infer<typeof newCardSchema>;

export function NewCardDialog() {
  const [status, setStatus] = useState<CreateCardBody["status"]>("do");

  const { handleSubmit, register, reset } = useForm<NewCardSchema>({
    resolver: zodResolver(newCardSchema),
    defaultValues: { title: "", description: "", status: "do", tags: "" },
  });

  const { mutateAsync: createCardFn, isPending } = useMutation({
    mutationFn: createCard,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cards"] });
    },
  });

  async function handleCreateNewCard(data: NewCardSchema) {
    const tagsArray = data.tags
      .split(",")
      .map((tag: string) => ({ name: tag.trim() }));

    await createCardFn({
      title: data.title,
      description: data.description,
      tags: tagsArray,
      status: status,
    });

    reset();
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="flex w-full items-center justify-center gap-2 rounded-md bg-violet-700 p-3 text-white hover:bg-violet-800">
          <Plus className="h-6 w-6" />
          Adicionar card
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80" />

        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-6 shadow-lg duration-200 sm:rounded-lg">
          <div className="flex items-center justify-between">
            <Dialog.Title className="text-lg font-bold text-slate-900">
              Novo cartão
            </Dialog.Title>

            <Dialog.Close>
              <X className="h-5 w-5 text-slate-900/50 hover:text-slate-900" />
            </Dialog.Close>
          </div>

          <form
            onSubmit={handleSubmit(handleCreateNewCard)}
            id="newCardForm"
            className="flex flex-col gap-4"
          >
            <input
              className="h-10 rounded border border-violet-200 px-6 text-sm"
              type="text"
              placeholder="Título"
              {...register("title")}
            />

            <input
              className="h-10 rounded border border-violet-200 px-6 text-sm"
              type="text"
              placeholder="Descrição"
              {...register("description")}
            />

            <input
              className="h-10 rounded border border-violet-200 px-6 text-sm"
              type="text"
              placeholder="Tags"
              {...register("tags")}
            />

            <div className="flex items-center justify-between gap-2">
              <button
                type="button"
                data-status="do"
                onClick={() => setStatus("do")}
                className={`h-10 w-full rounded border border-violet-200 text-sm text-slate-900 ${
                  status === "do"
                    ? "border-red-500 bg-red-50"
                    : "bg-transparent"
                }`}
              >
                A fazer
              </button>
              <button
                type="button"
                data-status="doing"
                onClick={() => setStatus("doing")}
                className={`h-10 w-full rounded border border-violet-200 text-sm text-slate-900 ${
                  status === "doing"
                    ? "border-orange-500 bg-orange-50"
                    : "bg-transparent"
                }`}
              >
                Fazendo
              </button>
              <button
                type="button"
                data-status="done"
                onClick={() => setStatus("done")}
                className={`h-10 w-full rounded border border-violet-200 text-sm text-slate-900 ${
                  status === "done"
                    ? "border-emerald-500 bg-emerald-50"
                    : "bg-transparent"
                }`}
              >
                Feito
              </button>
            </div>

            <button
              form="newCardForm"
              type="submit"
              disabled={isPending}
              className="flex h-10 w-full items-center justify-center rounded bg-violet-700 text-sm text-white hover:bg-violet-800"
            >
              Adicionar
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
