export interface CountriesData {
  name: string;
  image: string;
  price: number;
  description: string;
}

export const countries: CountriesData[] = [
  {
    name: 'Switzerland',
    image:
      'https://airtable.com/appUT1eMcMzIdKi5E/tblnzkXl8Mq9sIxhm/viwgeKLJeoaJrT8No/recnaNMt2FodB96CB/fldUr88ttMg8gjCOR/att7Yu63cc3RshWNt?blocks=hide',
    price: 30000,
    description:
      'Switzerland is a landlocked country located in the heart of Europe, renowned for its breathtaking Alpine landscapes and pristine lakes. It is a federal republic consisting of 26 cantons, each with a high degree of autonomy. Switzerland is globally recognized for its neutrality, political stability, and is home to numerous international organizations, making it a hub for diplomacy and finance.',
  },
  {
    name: 'Australia',
    image:
      'https://airtable.com/appUT1eMcMzIdKi5E/tblnzkXl8Mq9sIxhm/viwgeKLJeoaJrT8No/recIt87lEOt8Hs2my/fldUr88ttMg8gjCOR/attMx7SoYreheMr3z?blocks=hide',
    price: 35000,
    description:
      "Australia, the world's sixth-largest country, is known for its diverse landscapes, ranging from the iconic Outback to lush rainforests and coastal wonders like the Great Barrier Reef. As a continent and a country, Australia is characterized by unique wildlife, vibrant cities like Sydney and Melbourne, and a rich indigenous culture that dates back thousands of years.",
  },
  {
    name: 'Indonesia',
    image:
      'https://airtable.com/appUT1eMcMzIdKi5E/tblnzkXl8Mq9sIxhm/viwgeKLJeoaJrT8No/recLyinjiemrzntky/fldUr88ttMg8gjCOR/attOcpv1SNrmWyPC0?blocks=hide',
    price: 25000,
    description:
      "Indonesia, the largest archipelago in the world, is a Southeast Asian nation comprising thousands of islands with diverse cultures, languages, and landscapes. Renowned for its lush tropical rainforests, stunning beaches, and vibrant coral reefs, Indonesia is a haven for biodiversity. Jakarta, the capital, is a bustling metropolis, while historical sites like Borobudur and Prambanan showcase the country's rich heritage and deep-rooted traditions.",
  },
];
