import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Cpf } from "@/classes/cpf";
import { useToast } from "./ui/use-toast";

const formSchema = z.object({
  cpf: z.string().min(11).max(14),
});

type TFormSchema = z.infer<typeof formSchema>;

export function CpfValidator() {
  const form = useForm<TFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cpf: "",
    },
  });

  const { toast } = useToast();

  function verify(form: TFormSchema) {
    const cpf = new Cpf(form.cpf);

    if (!cpf.isValid()) return toast({ title: "Invalid CPF" });
    return toast({title: "Valid CPF"});
  }

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4 justify-center items-center border p-5 rounded-sm"
        onSubmit={form.handleSubmit(verify)}
      >
        <h1 className="text-xl font-semibold tracking-wider">CPF Validator</h1>
        <FormField
          control={form.control}
          name="cpf"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">CPF</FormLabel>
              <FormControl>
                <Input
                  placeholder="000.000.000-00"
                  className="text-base"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Generate</Button>
      </form>
    </Form>
  );
}
