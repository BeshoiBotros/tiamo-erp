import type React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Controller, useForm } from "react-hook-form";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const loginFormSchema = z.object({
  email: z.email({message: 'يجب ان تكون القيمة بريد الكتروني حقيقي.'}),
  password: z.string().nonempty({message: 'يجب ادخال كلمة السر.'}),
});

type loginFormData = z.infer<typeof loginFormSchema>;

const Login: React.FC = () => {
  const loginForm = useForm<loginFormData>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginSubmit = (data: loginFormData) =>{
        console.log(data)
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center p-3">
      <Card className="max-w-[500px] w-370">
        <CardHeader className="flex justify-center items-center">
          <span className="font-black text-foreground text-lg">تسجيل دخول</span>
        </CardHeader>
        <CardContent>
          <form id="login-form" onSubmit={loginForm.handleSubmit(loginSubmit)}>
            <FieldGroup>
              <Controller
                name="email"
                control={loginForm.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="email">الايميل</FieldLabel>
                    <Input
                      {...field}
                      aria-invalid={fieldState.invalid}
                      placeholder="ادخل الايميل"
                    />
                    {fieldState.error && (
                      <p className="text-red-600 text-sm mt-1">
                        {fieldState.error.message}
                      </p>
                    )}
                  </Field>
                )}
              />
              <FieldSeparator />
              <Controller
                name="password"
                control={loginForm.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="password">كلمة السر</FieldLabel>
                    <Input
                      type="password"
                      {...field}
                      aria-invalid={fieldState.invalid}
                      placeholder="ادخل كلمة السر"
                    />
                    {fieldState.error && (
                      <p className="text-red-600 text-sm mt-1">
                        {fieldState.error.message}
                      </p>
                    )}
                  </Field>
                )}
              />
            </FieldGroup>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button type="submit" form="login-form">
            تسجيل دخول
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
