import { z, ZodSchema } from "zod";

export const validateWiteZod = <T>(schema: ZodSchema<T>, data: unknown): T => {
  const result = schema.safeParse(data);
  if (!result.success) {
    const errors = result.error?.errors.map((error) => error.message);
    throw new Error(errors.join(","));
  }
  return result.data;
};
const valadateimage = () => {
  const maxFile = 2048 * 2048;
  return z.instanceof(File).refine((file) => {
    return file.size <= maxFile;
  }, "File size must be less than 1mb");
};

export const blogSchema = z.object({
  image: valadateimage(),
  title: z.string().min(2).max(100),
  category: z.string(),
  description: z.string().min(2).max(1000),
});
