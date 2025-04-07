export type actionFunction = (
  prevState: any,
  formData: FormData
) => Promise<{ message: string }>;

export type blogCard = {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  clerkId: string;
  createdAt: Date;
};
