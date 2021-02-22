import { IPipedriveDealsResponse } from 'src/@types/IDeals';

export default async (deals: IPipedriveDealsResponse) => {
  const { data } = deals;

  const orders = data.map((data) => {
    const items = {
      id: data.id,
      personName: data.person_name,
      value: data.value,
      title: data.title,
      orgName: data.org_name,
      date: data.won_time,
    };
    return items;
  });

  return orders;
};
