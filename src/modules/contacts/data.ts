import useSWR from "swr";

interface ContactData {
  id: number;
  name: string;
  phone: string;
}

export const useContactsData = () => {
  const {
    data: contactsData,
    mutate: mutateContactsData,
  } = useSWR<ContactData[]>("@data/contacts", {
    fallbackData: [],
  });

  return { contactsData, mutateContactsData };
};